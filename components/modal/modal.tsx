import PropTypes from "prop-types";
import styled, { keyframes } from "../../typed-components";

const enterAnimation = keyframes`
  from {
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const Wrapper = styled<{ showing: boolean }, any>("div")`
  width: 100vw;
  z-index: 11;
  overflow: hidden;
  height: 100vh;
  top: 0;
  display: ${props => (props.showing ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: ${props => (props.showing ? "99" : "0")};
  position: fixed;
  animation: ${props => (props.showing ? enterAnimation : "")} 0.3s linear;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(52, 73, 94, 0.8);
  position: absolute;
`;

const ModalContainer = styled.div`
  z-index: 15;
`;

interface IProps {
  clickClose: () => void;
  children: any;
  showing: boolean;
}

const Modal: React.SFC<IProps> = ({ clickClose, children, showing }) => (
  <Wrapper showing={showing}>
    <Overlay onClick={clickClose} />
    <ModalContainer>{children}</ModalContainer>
  </Wrapper>
);

Modal.propTypes = {
  clickClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
