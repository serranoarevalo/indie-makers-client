import React from "react";
import Head from "next/head";
import styled from "../typed-components";
import routes from "../routes";
import Wrapper from "../components/wrapper";
import BigDetailCard from "../components/bigDetailCard";
import SmallDetailCard from "../components/smallDetailCard";
import Tabs from "../components/tabs";
import Tab from "../components/tab";

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

class Maker extends React.Component {
  render() {
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
            />
          </Column>
          <Column>
            <Tabs>
              <Tab text={"Products"} selected={true} />
              <Tab text={"Todo's"} selected={false} />
            </Tabs>
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
          </Column>
        </Container>
      </Wrapper>
    );
  }
}

export default Maker;
