import React from "react";
import Header, { FixedHeader } from "./headerPresenter";
import withLogin from "../../lib/withLogin";
import { getMe } from "types/api";

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
        <Header fbLogin={fbLogin} isLoggedIn={isLoggedIn} user={user} />
        {scrolled && (
          <FixedHeader fbLogin={fbLogin} isLoggedIn={isLoggedIn} user={user} />
        )}
      </React.Fragment>
    );
  }
}

export default withLogin(HeaderContainer);
