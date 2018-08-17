import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../wrapper";
import Input from "../input";

const Container = styled.div`
  margin: 50px 0px;
  margin-bottom: 200px;
  padding: 15vh 0px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 50px;
`;

const Column = styled.div``;

const Title = styled.h2`
  font-weight: 600;
  font-size: 38px;
`;

const Subtitle = styled.h3`
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const List = styled.div`
  background-color: white;
  ${props => props.theme.cardShadow};
  padding: 20px 40px;
  border-radius: ${props => props.theme.borderRadius};
`;

interface IProps {
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getTime = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let time = "";
  if (currentHour < 12) {
    time = "morning";
  } else if (currentHour < 18) {
    time = "afternoon";
  } else {
    time = "evening";
  }
  return time;
};

const DashboardPresenter: React.SFC<IProps> = ({
  inputValue,
  handleInputChange
}) => (
  <Container>
    <Head>
      <title>Dashboard | Indie Makers</title>
    </Head>
    <Wrapper>
      <Grid>
        <Column>
          <Title>Good {getTime()} Nicolas!</Title>
          <Subtitle>What are you gonna accomplish today?</Subtitle>
          <List>
            <Input
              fontSize={"22px"}
              type={"text"}
              value={inputValue}
              name={"newToDo"}
              onChange={handleInputChange}
              placeholder={"Type a goal"}
            />
          </List>
        </Column>
      </Grid>
    </Wrapper>
  </Container>
);

export default DashboardPresenter;
