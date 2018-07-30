import React from "react";
import PropTypes from "prop-types";
import ModalPresenter from "./modalPresenter";

interface IProps {
  clickClose: () => void;
}

class ModalContainer extends React.Component<IProps> {
  static propTypes = {
    clickClose: PropTypes.func.isRequired
  };
  render() {
    const { clickClose } = this.props;
    return <ModalPresenter clickClose={clickClose} />;
  }
}

export default ModalContainer;
