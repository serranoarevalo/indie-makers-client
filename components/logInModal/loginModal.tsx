import PropTypes from "prop-types";
import styled from "../../typed-components";
import Card from "../card";
import Modal from "../modal";

const Container = styled.div`
  width: 40%;
`;

interface IProps {
  clickClose: () => void;
}

const LoginModal: React.SFC<IProps> = ({ clickClose }) => (
  <Modal clickClose={clickClose}>
    <Container>
      <Card>hello</Card>
    </Container>
  </Modal>
);

LoginModal.propTypes = {
  clickClose: PropTypes.func.isRequired
};

export default LoginModal;
