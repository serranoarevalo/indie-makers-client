import React from "react";
import Cookie from "js-cookie";
import Header, { FixedHeader } from "./headerPresenter";
import withLogin from "../../lib/withLogin";
import { getMe } from "types/api";
import { toast } from "react-toastify";

interface IState {
  scrolled: boolean;
}

interface IProps {
  fbLogin: () => void;
  isLoggedIn: boolean;
  user: getMe;
}

class HeaderContainer extends React.Component<IProps, IState> {
  state = {
    scrolled: false
  };
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
    const { fbLogin, isLoggedIn, user } = this.props;

    return (
      <React.Fragment>
        <Header
          fbLogin={fbLogin}
          isLoggedIn={isLoggedIn}
          user={user}
          onLogOutClick={this.onLogOutClick}
        />
        {scrolled && (
          <FixedHeader
            fbLogin={fbLogin}
            isLoggedIn={isLoggedIn}
            user={user}
            onLogOutClick={this.onLogOutClick}
          />
        )}
      </React.Fragment>
    );
  }

  public onLogOutClick = () => {
    toast.info("See you later! 👋🏻");
    setTimeout(() => {
      Cookie.remove("X-JWT", {
        domain: ".localtunnel.me"
      });
      window.location.href = "/";
    }, 1000);
  };
}

export default withLogin(HeaderContainer);
