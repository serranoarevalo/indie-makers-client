import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  clickClose: () => void;
  children: any;
}

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(52, 73, 94, 0.8);
  position: absolute;
`;

const ModalContainer = styled.div``;

const Modal: React.SFC<IProps> = ({ clickClose, children }) => (
  <Wrapper>
    <Overlay onClick={clickClose} />
    <ModalContainer>{children}</ModalContainer>
  </Wrapper>
);

Modal.propTypes = {
  clickClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
