import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Button from "../button";
import FakeLink from "../fakeLink";
import withLogin from "../../lib/withLogin";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  line-height: 1.5;
  @media (max-width: 1400px) {
    box-sizing: border-box;
  }
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 50px;
  background-color: ${props => props.theme.lightBlueColor};
`;

const Subtitle = styled.h3`
  font-size: 40px;
  margin-top: 10px;
  background-color: ${props => props.theme.lightBlueColor};
`;

const CTAs = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    & * {
      margin: 0 !important;
      &:last-child {
        margin-top: 10px !important;
      }
    }
  }
`;

interface IProps {
  fbLogin: () => void;
}

const Hero: React.SFC<IProps> = ({ fbLogin }) => (
  <Container>
    <Title>Build products, together.</Title>
    <Subtitle>
      Join a community of 4,059 makers to make better products.
    </Subtitle>
    <CTAs>
      <Button
        accent={true}
        text={"Join Indie Makers"}
        fontSize={28}
        onClick={fbLogin}
      />
      <Link prefetch href={routes.about}>
        <a>
          <FakeLink>About Indie Makers</FakeLink>
        </a>
      </Link>
    </CTAs>
  </Container>
);
export default withLogin(Hero);
