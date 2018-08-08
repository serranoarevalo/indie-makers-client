import React from "react";
import Header, { FixedHeader } from "./headerPresenter";

interface IState {
  scrolled: boolean;
}

class HeaderContainer extends React.Component<{}, IState> {
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
    return (
      <React.Fragment>
        <Header loggedIn={false} />
        {scrolled && <FixedHeader loggedIn={false} />}
      </React.Fragment>
    );
  }
}

export default HeaderContainer;
