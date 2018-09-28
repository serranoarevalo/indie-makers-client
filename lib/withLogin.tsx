import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import Cookie from "js-cookie";
import { LOG_USER_IN } from "../sharedQueries";
import { logUserIn, logUserInVariables } from "types/api";
import { toast } from "react-toastify";

class LoginMutation extends Mutation<logUserIn, logUserInVariables> {}

const withLogin = Component =>
  class extends React.Component {
    public facebookLogin: MutationFn<logUserIn, logUserInVariables>;
    render() {
      return (
        <LoginMutation
          mutation={LOG_USER_IN}
          onCompleted={this.onLoginCompleted}
        >
          {logUserIn => {
            this.facebookLogin = logUserIn;
            return <Component loginFn={this.postFacebookLogin} />;
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
        Cookie.set("X-JWT", token);
        toast.success("Welcome, we are loggin you in 👋🏻");
      }
    };
  };

export default withLogin;
