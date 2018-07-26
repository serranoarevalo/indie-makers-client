import styled from "../../typed-components";
import Link from "next/link";
import Button from "../button";
import routes from "../../routes";

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
  margin-bottom: 50px;
`;

const Hero = () => (
  <Container>
    <Title>Build products, together.</Title>
    <Subtitle>
      Join a community of 4,059 makers to make better products.
    </Subtitle>
    <Link href={routes.join}>
      <a>
        <Button accent={true} text={"Join Indie Makers"} fontSize={20} />
      </a>
    </Link>
  </Container>
);
export default Hero;
