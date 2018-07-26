import styled from "styled-components";
import "../globalStyles";
import Wrapper from "../components/wrapper";
import Hero from "../components/hero";
import NewProducts from "../components/newProducts";

const Container = styled.div``;

const IndexColumns = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 60px;
`;

export default () => (
  <Container>
    <Wrapper>
      <Hero />
      <IndexColumns>
        <NewProducts />
      </IndexColumns>
    </Wrapper>
  </Container>
);
