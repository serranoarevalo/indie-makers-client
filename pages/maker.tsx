import React from "react";
import Head from "next/head";
import styled from "../typed-components";
import routes from "../routes";
import Wrapper from "../components/wrapper";
import BigDetailCard from "../components/bigDetailCard";
import SmallDetailCard from "../components/smallDetailCard";
import Tabs from "../components/tabs";
import Tab from "../components/tab";
import Card from "../components/card";
import GoalText from "../components/goalText";

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 3fr;
  grid-gap: 50px;
`;

const Column = styled.div`
  &:first-child {
    margin: 50px 0px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: 85px;
  grid-gap: 40px;
`;

const Goals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: 10px;
  }
`;

interface IProps {
  tab?: "todo" | "done";
}

class Maker extends React.Component<IProps> {
  static getInitialProps(props) {
    const { query } = props;
    const { tab } = query;
    return { tab };
  }
  render() {
    const { tab } = this.props;
    return (
      <Wrapper>
        <Container>
          <Head>
            <title>Maker Name | Indie Makers</title>
          </Head>
          <Column>
            <BigDetailCard
              isLink={false}
              icon={"/static/demo.jpg"}
              authorAvatar={"/static/demo.jpg"}
              title={"Nicolás Serrano Arévalo"}
              showSubtitle={true}
              subtitle={"Building pretty stuff"}
              hasAuthor={false}
              needsHelp={false}
              streakNumber={40}
              launchedNumber={20}
              underTitle={"@serranoarevalo"}
            />
          </Column>
          <Column>
            <Tabs>
              <Tab
                link={routes.userDetail("@serranoarevalo")}
                linkAs={routes.asUserDetail("@serranoarevalo")}
                text={"Products"}
                selected={tab === undefined}
              />
              <Tab
                link={routes.makerDone("@serranoarevalo")}
                linkAs={routes.asMakerDone("@serranoarevalo")}
                text={"Done"}
                selected={tab === "done"}
              />
              <Tab
                link={routes.makerToDo("@serranoarevalo")}
                linkAs={routes.asMakerToDo("@serranoarevalo")}
                text={"To Do"}
                selected={tab === "todo"}
              />
            </Tabs>
            {tab === undefined && (
              <Grid>
                <SmallDetailCard
                  icon={"/static/demo.jpg"}
                  title={"Best project ever"}
                  subtitle={
                    "Use this life changing product when you're on the toilet"
                  }
                  isLink={true}
                  link={routes.productDetail("indie-makers")}
                  linkAs={routes.asProductDetail("indie-makers")}
                  isCard={true}
                  lightSubtitle={false}
                />
              </Grid>
            )}
            {tab === "todo" && (
              <Card>
                <Goals>
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                  />
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                  />
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                  />
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                  />
                </Goals>
              </Card>
            )}
            {tab === "done" && (
              <Card>
                <Goals>
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                    isCompleted={true}
                  />
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                    isCompleted={true}
                  />
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                    isCompleted={true}
                  />
                  <GoalText
                    text={"Order nice food"}
                    productName={"Indie Makers"}
                    isCompleted={true}
                  />
                </Goals>
              </Card>
            )}
          </Column>
        </Container>
      </Wrapper>
    );
  }
}

export default Maker;
