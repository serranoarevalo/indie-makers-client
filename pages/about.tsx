import React from "react";
import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Button from "../components/button";
import withLogin from "../lib/withLogin";

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
  align-items: center;
  justify-items: center;
  grid-gap: 30px;
  margin-bottom: 80px;
  &:nth-child(even) {
    & ${SellPointColumn} {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      text-align: right;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;

    &:nth-child(even) {
      & ${SellPointColumn} {
        order: 1;
        display: block;
        text-align: left;
      }
    }
  }
`;

const SellPointImage = styled<
  { bg: string; bgH?: string; bgV?: string },
  "div"
>("div")`
  border-radius: 50%;
  height: 400px;
  width: 400px;
  height: 400px;
  background-image: url(${props => props.bg});
  border: 5px solid ${props => props.theme.darkBlueColor};
  background-size: cover;
  background-position: ${props =>
    props.bgH && props.bgV ? `${props.bgH} ${props.bgV}` : "center center"};
  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
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

const About = ({ fbLogin }) => (
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
          <SellPointImage bg={"/static/aboutOne.png"} />
          <SellPointColumn>
            <SellPointTitle>Track your progress</SellPointTitle>
            <SellPointText>
              Share what you're working on and track your progress by using
              simple To Do lists to organize your goals.
            </SellPointText>
          </SellPointColumn>
        </SellPoint>
        <SellPoint>
          <SellPointColumn>
            <SellPointTitle>Discover</SellPointTitle>
            <SellPointText>
              See what others are working on and check out their progress,
              discover projects that need a cofounder or just get in touch with
              like-minded makers.
            </SellPointText>
          </SellPointColumn>
          <SellPointImage
            bg={"/static/aboutTwo.png"}
            bgH={"bottom"}
            bgV={"bottom"}
          />
        </SellPoint>
        <SellPoint>
          <SellPointImage bg={"/static/aboutThree.png"} />
          <SellPointColumn>
            <SellPointTitle>Launch together</SellPointTitle>
            <SellPointText>
              Use Indie Makers to keep you accountable and motivated when making
              products, join a community focused on FINISHING and launching
              beautiful products.
            </SellPointText>
          </SellPointColumn>
        </SellPoint>
      </SellPoints>
      <JoinHero>
        <Button
          accent={true}
          text={"Join Indie Makers"}
          fontSize={32}
          onClick={fbLogin}
        />
      </JoinHero>
    </Wrapper>
  </React.Fragment>
);

export default withLogin(About);
