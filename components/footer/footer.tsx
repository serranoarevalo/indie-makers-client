import Link from "next/link";
import styled from "../../typed-components";
import Wrapper from "../wrapper";
import routes from "../../routes";

const Container = styled.div`
  background-color: ${props => props.theme.blackColor};
  width: 100%;
  padding: 50px;
  color: white;
  margin-top: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SLink = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Copyright = styled.div`
  grid-column-start: 4;
  align-self: flex-end;
`;

const Text = styled.div`
  display: block;
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <Grid>
        <Nav>
          <List>
            <SLink>
              <Link href={routes.products}>
                <a>Products</a>
              </Link>
            </SLink>
            <SLink>
              <Link href={routes.todos}>
                <a>Goals</a>
              </Link>
            </SLink>
            <SLink>
              <Link href={routes.makers}>
                <a>Makers</a>
              </Link>
            </SLink>
            <SLink>
              <Link href={routes.blog}>
                <a>Blog</a>
              </Link>
            </SLink>
          </List>
        </Nav>
        <Copyright>
          <Text>Build beautiful things.</Text>
          <Text>&copy; {`${new Date().getFullYear()}`} Nomadcoders</Text>
        </Copyright>
      </Grid>
    </Wrapper>
  </Container>
);
export default Footer;
