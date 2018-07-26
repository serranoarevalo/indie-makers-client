import Link from "next/link";
import styled from "../../typed-components";

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px 5px;
  background-color: white;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: "Nunito";
  font-weight: 700;
  font-size: 20px;
  margin-right: 10%;
  & span:first-child {
    color: #f19938;
  }
  span {
    color: #113654;
  }
`;

const Navigation = styled.nav``;

const Header = () => (
  <Container>
    <Wrapper>
      <Logo>
        <span>I</span>ndie <span>M</span>akers
      </Logo>
      <Navigation>
        <ul>
          <li>Hi</li>
        </ul>
      </Navigation>
    </Wrapper>
  </Container>
);

export default Header;
