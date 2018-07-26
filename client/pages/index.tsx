import styled from "styled-components";
import "../globalStyles";
import Wrapper from "../components/wrapper";
import Hero from "../components/hero";

const Container = styled.div``;
const HeroWrapper = styled.div`
  margin-top: 15vh;
`;

export default () => (
  <Container>
    <Wrapper>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
    </Wrapper>
  </Container>
);
