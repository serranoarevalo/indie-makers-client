import React from "react";
import Header, { FixedHeader } from "./headerPresenter";
import withLogin from "../../lib/withLogin";

interface IState {
  scrolled: boolean;
}

interface IProps {
  loginFn: (response: any) => void;
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
    const { loginFn } = this.props;
    return (
      <React.Fragment>
        <Header loggedIn={false} afterLoginFn={loginFn} />
        {scrolled && <FixedHeader loggedIn={false} afterLoginFn={loginFn} />}
      </React.Fragment>
    );
  }
}

export default withLogin(HeaderContainer);
