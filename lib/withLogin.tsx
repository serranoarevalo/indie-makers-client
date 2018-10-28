import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Mutation, MutationFn } from "react-apollo";
import { LOG_USER_IN } from "../sharedQueries";
import { logUserIn, logUserInVariables } from "types/api";
import { toast } from "react-toastify";
import { FB_APP_ID } from "../configs";
import logIn from "./logIn";

class LoginMutation extends Mutation<logUserIn, logUserInVariables> {}

const withLogin = Component =>
  class extends React.Component<any> {
    public facebookLogin: MutationFn<logUserIn, logUserInVariables>;
    public toastId: number;
    render() {
      const { isLoggedIn } = this.props;
      return (
        <LoginMutation
          mutation={LOG_USER_IN}
          onCompleted={this.onLoginCompleted}
        >
          {logUserIn => {
            this.facebookLogin = logUserIn;
            return (
              <FacebookLogin
                appId={FB_APP_ID}
                autoLoad={!isLoggedIn}
                isMobile={true}
                callback={this.postFacebookLogin}
                fields="name,first_name,last_name,email"
                render={renderProps => (
                  <Component fbLogin={renderProps.onClick} {...this.props} />
                )}
              />
            );
          }}
        </LoginMutation>
      );
    }
    public postFacebookLogin = response => {
      const {
        first_name: firstName,
        last_name: lastName,
        email,
        id: fbId
      } = response;
      this.toastId = toast.info("Loggin you in");
      this.facebookLogin({
        variables: {
          firstName,
          lastName,
          email,
          fbId
        }
      });
    };

    public onLoginCompleted = (data: logUserIn) => {
      const {
        ConnectFB: { ok, error, token }
      } = data;
      if (!ok && error) {
        toast.update(this.toastId, {
          render: `${error}`,
          type: toast.TYPE.ERROR
        });
      } else if (ok && token) {
        logIn(token);
        toast.update(this.toastId, {
          render: `Done! You're logged in!👋🏻`,
          type: toast.TYPE.SUCCESS
        });
      }
    };
  };

export default withLogin;
