import Link from "next/link";
import styled from "../../typed-components";

const Container = styled.header`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
`;

const Logo = styled.h1``;

const Header = () => (
  <Container>
    <Wrapper>
      <Logo>Indie Makers</Logo>
    </Wrapper>
  </Container>
);

export default Header;
