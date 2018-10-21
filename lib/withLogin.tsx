import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Mutation, MutationFn } from "react-apollo";
import Cookie from "js-cookie";
import { LOG_USER_IN } from "../sharedQueries";
import { logUserIn, logUserInVariables } from "types/api";
import { toast } from "react-toastify";
import { FB_APP_ID } from "../configs";

class LoginMutation extends Mutation<logUserIn, logUserInVariables> {}

const withLogin = Component =>
  class extends React.Component<any> {
    public facebookLogin: MutationFn<logUserIn, logUserInVariables>;
    render() {
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
                autoLoad={false}
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
        toast.error(error);
      } else if (ok && token) {
        if (process.env.NODE_ENV === "production") {
          Cookie.set("X-JWT", token, {
            domain: ".indiemakers.net"
          });
        } else {
          Cookie.set("X-JWT", token, {
            domain: ".localtunnel.me"
          });
          Cookie.set("X-JWT", token, {
            domain: "127.0.0.1"
          });
        }
        toast.success("Welcome, we are loggin you in 👋🏻");
        setTimeout(() => window.location.reload(), 2000);
      }
    };
  };

export default withLogin;
