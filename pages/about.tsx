import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Button from "../components/button";
import routes from "../routes";

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const SellPoints = styled.div`
  margin-bottom: 150px;
`;

const SellPointColumn = styled.div``;

const SellPoint = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center center;
  margin-bottom: 30px;
  &:nth-child(even) {
    & ${SellPointColumn} {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      text-align: right;
    }
  }
`;

const SellPointImage = styled<{ bg: string }, "div">("div")`
  border-radius: 50%;
  height: 400px;
  width: 400px;
  background-image: url(${props => props.bg});
  border: 5px solid ${props => props.theme.darkBlueColor};
  background-size: cover;
  background-position: center center;
`;

const SellPointTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SellPointText = styled.p`
  width: 60%;
`;

const JoinHero = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const About = () => (
  <React.Fragment>
    <Head>
      <title>About | Indie Makers</title>
    </Head>
    <Wrapper>
      <Container>
        <Title>We build stuff together.</Title>
        <Subtitle>
          Join a community of entrepreneurs that are passionate for building
          beautiful, usefull, passionate products.
        </Subtitle>
      </Container>
      <SellPoints>
        <SellPoint>
          <SellPointImage bg={"/static/appDemo.png"} />
          <SellPointColumn>
            <SellPointTitle>See products</SellPointTitle>
            <SellPointText>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Praesent commodo sem est, sed
              pretium nunc mollis sed. Maecenas quis ultrices mi, in ultricies
              turpis. Aliquam et dolor massa. Etiam eu arcu lacus. Pellentesque
              tempus arcu vel aliquet facilisis. Maecenas interdum porta velit
              ut feugiat.
            </SellPointText>
          </SellPointColumn>
        </SellPoint>
        <SellPoint>
          <SellPointColumn>
            <SellPointTitle>See products</SellPointTitle>
            <SellPointText>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Praesent commodo sem est, sed
              pretium nunc mollis sed. Maecenas quis ultrices mi, in ultricies
              turpis. Aliquam et dolor massa. Etiam eu arcu lacus. Pellentesque
              tempus arcu vel aliquet facilisis. Maecenas interdum porta velit
              ut feugiat.
            </SellPointText>
          </SellPointColumn>
          <SellPointImage bg={"/static/appDemo.png"} />
        </SellPoint>
        <SellPoint>
          <SellPointImage bg={"/static/appDemo.png"} />
          <SellPointColumn>
            <SellPointTitle>See products</SellPointTitle>
            <SellPointText>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Praesent commodo sem est, sed
              pretium nunc mollis sed. Maecenas quis ultrices mi, in ultricies
              turpis. Aliquam et dolor massa. Etiam eu arcu lacus. Pellentesque
              tempus arcu vel aliquet facilisis. Maecenas interdum porta velit
              ut feugiat.
            </SellPointText>
          </SellPointColumn>
        </SellPoint>
      </SellPoints>
      <JoinHero>
        <Link href={routes.join} as={routes.asJoin}>
          <a>
            <Button accent={true} text={"Join Indie Makers"} fontSize={32} />
          </a>
        </Link>
      </JoinHero>
    </Wrapper>
  </React.Fragment>
);

export default About;
