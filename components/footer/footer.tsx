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
  @media (max-width: 765px) {
    grid-template-columns: repeat(2, 1fr);
  }
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

const FLink = styled.a`
  text-decoration: underline;
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <Grid>
        <Nav>
          <List>
            <SLink>
              <Link prefetch href={routes.products}>
                <a>Products</a>
              </Link>
            </SLink>
            <SLink>
              <Link prefetch href={routes.todos}>
                <a>Goals</a>
              </Link>
            </SLink>
            <SLink>
              <Link prefetch href={routes.makers}>
                <a>Makers</a>
              </Link>
            </SLink>
            <SLink>
              <Link prefetch href={routes.blog}>
                <a>Launched</a>
              </Link>
            </SLink>
          </List>
        </Nav>
        <Copyright>
          <Text>Build beautiful things 💖.</Text>
          <Text>
            &copy; {`${new Date().getFullYear()}`}{" "}
            <FLink
              href={"https://nomadcoders.co/"}
              rel="noopener"
              target={"_blank"}
            >
              Nomadcoders
            </FLink>
          </Text>
        </Copyright>
      </Grid>
    </Wrapper>
  </Container>
);
export default Footer;
