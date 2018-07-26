import styled from "styled-components";
import "../globalStyles";
import Wrapper from "../components/wrapper";
import Hero from "../components/hero";

const Container = styled.div``;

export default () => (
  <Container>
    <Wrapper>
      <Hero />
    </Wrapper>
  </Container>
);
