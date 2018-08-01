import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Button from "../button";
import FakeLink from "../fakeLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  line-height: 1.5;
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
`;

const Hero = () => (
  <Container>
    <Title>Build products, together.</Title>
    <Subtitle>
      Join a community of 4,059 makers to make better products.
    </Subtitle>
    <CTAs>
      <Link href={routes.join} as={routes.asJoin}>
        <a>
          <Button accent={true} text={"Join Indie Makers"} fontSize={28} />
        </a>
      </Link>
      <Link href={routes.about}>
        <a>
          <FakeLink>Learn more</FakeLink>
        </a>
      </Link>
    </CTAs>
  </Container>
);
export default Hero;
