import Link from "next/link";
import routes from "../../routes";
import styled, { keyframes } from "../../typed-components";
import Button from "../button";
import Wrapper from "../wrapper";

const Container = styled("header")`
  width: 100%;
  padding: 30px 5px;
  background-color: white;
  box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);
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
    & li {
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
    & > *:first-child {
      margin-right: 30px;
    }
  }
  span {
    cursor: pointer;
  }
`;

const FlexWidthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface IProps {}

const Header: React.SFC<IProps> = () => (
  <Container>
    <Wrapper>
      <FlexWidthContainer>
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
          <span>
            <a>Login</a>
          </span>
          <Link href={routes.join} as={routes.asJoin}>
            <a>
              <Button accent={true} text={"Join Indie Makers"} />
            </a>
          </Link>
        </NavColumn>
      </FlexWidthContainer>
    </Wrapper>
  </Container>
);

const animation = keyframes`
  from{
    transform:translateY(-80px);
  }
  to{
    transform:none;
  }
`;

const FixedHeaderContainer = styled.div`
  position: fixed !important;
  top: 0;
  width: 100%;
  animation: ${animation} 0.2s linear;
  box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);
  z-index: 10;
`;

export const FixedHeader: React.SFC<IProps> = () => (
  <FixedHeaderContainer>
    <Header />
  </FixedHeaderContainer>
);

export default Header;
