import React from "react";
import Header, { FixedHeader } from "./headerPresenter";
import withLogin from "../../lib/withLogin";

interface IState {
  scrolled: boolean;
}

interface IProps {
  fbLogin: () => void;
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
    const { fbLogin } = this.props;
    return (
      <React.Fragment>
        <Header loggedIn={false} fbLogin={fbLogin} />
        {scrolled && <FixedHeader loggedIn={false} fbLogin={fbLogin} />}
      </React.Fragment>
    );
  }
}

export default withLogin(HeaderContainer);
