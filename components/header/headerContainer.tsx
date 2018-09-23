import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import Cookie from "js-cookie";
import Header, { FixedHeader } from "./headerPresenter";
import { logUserIn, logUserInVariables } from "../../types/api";
import { LOG_USER_IN } from "./headerQueries";
import { toast } from "react-toastify";

interface IState {
  scrolled: boolean;
}

class LoginMutation extends Mutation<logUserIn, logUserInVariables> {}

class HeaderContainer extends React.Component<{}, IState> {
  state = {
    scrolled: false
  };
  public facebookLogin: MutationFn<logUserIn, logUserInVariables>;
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        this.setState({
          scrolled: true
        });
      } else if (window.scrollY < 400) {
        this.setState({
          scrolled: false
        });
      }
    });
  }
  render() {
    const { scrolled } = this.state;
    return (
      <LoginMutation
        mutation={LOG_USER_IN}
        onCompleted={data => {
          const {
            ConnectFB: { ok, error, isNew, token }
          } = data;
          if (!ok && error) {
            toast.error(error);
          } else if (ok && token) {
            Cookie.set("X-JWT", token);
            toast.success("Welcome, we are loggin you in 👋🏻");
          }
        }}
      >
        {logUserIn => {
          this.facebookLogin = logUserIn;

          return (
            <React.Fragment>
              <Header loggedIn={false} afterLoginFn={this.postFacebookLogin} />
              {scrolled && (
                <FixedHeader
                  loggedIn={false}
                  afterLoginFn={this.postFacebookLogin}
                />
              )}
            </React.Fragment>
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
}

export default HeaderContainer;
