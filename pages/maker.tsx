import styled from "../typed-components";
import Wrapper from "../components/wrapper";

const Container = styled.div`
  margin: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 25px;
`;

export default () => (
  <Wrapper>
    <Container>hi</Container>
  </Wrapper>
);
