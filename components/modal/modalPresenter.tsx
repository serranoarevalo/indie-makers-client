import PropTypes from "prop-types";

interface IProps {
  clickClose: () => void;
}

const ModalPresenter: React.SFC<IProps> = () => null;

ModalPresenter.propTypes = {
  clickClose: PropTypes.func.isRequired
};

export default ModalPresenter;
