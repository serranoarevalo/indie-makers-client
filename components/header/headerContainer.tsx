import React from "react";
import Header, { FixedHeader } from "./headerPresenter";
import LoginModal from "../logInModal";

interface IState {
  scrolled: boolean;
  showingModal: boolean;
}

class HeaderContainer extends React.Component<{}, IState> {
  state = {
    scrolled: false,
    showingModal: false
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
    const { scrolled, showingModal } = this.state;
    return (
      <React.Fragment>
        {showingModal && <LoginModal clickClose={this._onOverlayClick} />}
        <Header onLoginClick={this._onLoginClick} />
        {scrolled && <FixedHeader onLoginClick={this._onLoginClick} />}
      </React.Fragment>
    );
  }
  private _onLoginClick = () => {
    this.setState({
      showingModal: true
    });
  };

  private _onOverlayClick = () => {
    this.setState({
      showingModal: false
    });
  };
}

export default HeaderContainer;
