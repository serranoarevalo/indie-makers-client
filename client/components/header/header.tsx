import Link from "next/link";
import styled from "../../typed-components";
import Button from "../button";
import routes from "../../routes";

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 5px;
  background-color: white;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.05);
`;

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-family: "Nunito";
  font-weight: 700;
  font-size: 20px;
  margin-right: 25px;
  border-right: 1px solid ${props => props.theme.blackColor};
  padding-right: 25px;
`;

const Navigation = styled.nav`
  & ul {
    display: flex;
    & li:first-child {
      margin-right: 25px;
    }
  }
`;

const NavColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  &:last-child {
    justify-content: flex-end;
    & *:first-child {
      margin-right: 30px;
    }
  }
`;

const Header = () => (
  <Container>
    <Wrapper>
      <NavColumn>
        <Logo>
          <Link href={routes.home}>
            <a>Indie Makers</a>
          </Link>
        </Logo>
        <Navigation>
          <ul>
            <li>
              <Link href={routes.products}>
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href={routes.makers}>
                <a>Makers</a>
              </Link>
            </li>
            <li>
              <Link href={routes.blog}>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </Navigation>
      </NavColumn>
      <NavColumn>
        <Link href={routes.login}>
          <a>Log In</a>
        </Link>
        <Link href={routes.login}>
          <a>
            <Button accent={true} text={"Join Indie Makers"} />
          </a>
        </Link>
      </NavColumn>
    </Wrapper>
  </Container>
);

export default Header;
