import React from "react";
import Header, { FixedHeader } from "./headerPresenter";
import LoginModal from "../logInModal";
import Modal from "../modal";

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
        <Header onLoginClick={this._onLoginClick} />
        {scrolled && <FixedHeader onLoginClick={this._onLoginClick} />}
        <Modal clickClose={this._onOverlayClick} showing={showingModal}>
          <LoginModal />
        </Modal>
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
