import React from "react";
import Head from "next/head";
import styled from "../..//typed-components";
import Wrapper from "../../components/wrapper";

const Container = styled.div`
  padding-bottom: 200px;
`;

const Header = styled<{ bg: string }, "div">("div")`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.bg});
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const EWrapper = styled(Wrapper)`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 40px;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const TechCard = styled.div`
  background-color: white;
  ${props => props.theme.cardShadow};
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  position: relative;
  top: -50px;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Column = styled.div`
  text-align: center;
  &:nth-child(2) {
    border-left: 1px solid ${props => props.theme.darkBlueColor};
    border-right: 1px solid ${props => props.theme.darkBlueColor};
  }
`;

const ColumnTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ColumnText = styled.p`
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  margin-bottom: 30px;
`;

const QuestionTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const QuestionAnswer = styled.p`
  font-size: 16px;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  margin: 25px 0px;
  border-radius: ${props => props.theme.borderRadius};
`;

export default () => (
  <Container>
    <Head>
      <title>Review | Indie Makers</title>
    </Head>
    <Header bg={"/static/appDemo.png"}>
      <EWrapper>
        <Title>Alex's project</Title>
        <Subtitle>He was a boy, now he turned into a girl</Subtitle>
      </EWrapper>
    </Header>
    <EWrapper>
      <TechCard>
        <Column>
          <ColumnTitle>Built with</ColumnTitle>
          <ColumnText>React, GraphQL, NodeJS</ColumnText>
        </Column>
        <Column>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnText>Website</ColumnText>
        </Column>
        <Column>
          <ColumnTitle>Time to Market</ColumnTitle>
          <ColumnText>1 month</ColumnText>
        </Column>
      </TechCard>
    </EWrapper>
    <Content>
      <EWrapper>
        <Question>
          <QuestionTitle>What is your fav food?</QuestionTitle>
          <QuestionAnswer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            aliquam sem. Suspendisse ut dui tellus. Morbi congue, ipsum non
            ullamcorper sollicitudin, neque tellus tempor ipsum, viverra pretium
            magna est id urna. Duis vulputate arcu mi, a cursus urna blandit ut.
            Suspendisse fermentum nibh eget purus aliquet, maximus convallis
            odio finibus. Morbi sollicitudin maximus fringilla. Morbi bibendum
            ultricies maximus. Vivamus vitae lorem mauris. Ut egestas rutrum
            libero et vestibulum.
          </QuestionAnswer>
        </Question>
        <Question>
          <Image src={"/static/appDemo.png"} />
          <QuestionTitle>What is your fav food?</QuestionTitle>
          <QuestionAnswer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            aliquam sem. Suspendisse ut dui tellus. Morbi congue, ipsum non
            ullamcorper sollicitudin, neque tellus tempor ipsum, viverra pretium
            magna est id urna. Duis vulputate arcu mi, a cursus urna blandit ut.
            Suspendisse fermentum nibh eget purus aliquet, maximus convallis
            odio finibus. Morbi sollicitudin maximus fringilla. Morbi bibendum
            ultricies maximus. Vivamus vitae lorem mauris. Ut egestas rutrum
            libero et vestibulum.
          </QuestionAnswer>
        </Question>
        <Question>
          <Image src={"/static/appDemo.png"} />
          <QuestionTitle>What is your fav food?</QuestionTitle>
          <QuestionAnswer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            aliquam sem. Suspendisse ut dui tellus. Morbi congue, ipsum non
            ullamcorper sollicitudin, neque tellus tempor ipsum, viverra pretium
            magna est id urna. Duis vulputate arcu mi, a cursus urna blandit ut.
            Suspendisse fermentum nibh eget purus aliquet, maximus convallis
            odio finibus. Morbi sollicitudin maximus fringilla. Morbi bibendum
            ultricies maximus. Vivamus vitae lorem mauris. Ut egestas rutrum
            libero et vestibulum.
          </QuestionAnswer>
        </Question>
      </EWrapper>
    </Content>
  </Container>
);
