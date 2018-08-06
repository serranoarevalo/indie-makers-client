import React from "react";
import Head from "next/head";
import styled from "../typed-components";
import routes from "../routes";
import Wrapper from "../components/wrapper";
import Tabs from "../components/tabs";
import Tab from "../components/tab";
import SmallDetailCard from "../components/smallDetailCard";

const MakersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 50px;
`;

interface IProps {
  tab?: "serial" | "all";
}

class Makers extends React.Component<IProps> {
  static getInitialProps(props) {
    const { query } = props;
    const { tab } = query;
    return { tab };
  }
  render() {
    const { tab } = this.props;
    return (
      <Wrapper>
        <Head>
          <title>Makers | Indie Makers</title>
        </Head>
        <Tabs>
          <Tab
            link={routes.makers}
            text={"More Active"}
            selected={tab === undefined}
          />
          <Tab
            link={routes.makersSerial}
            linkAs={routes.asMakersSerial}
            text={"Serial Makers"}
            selected={tab === "serial"}
          />
          <Tab
            link={routes.makersAll}
            linkAs={routes.asMakersAll}
            text={"All"}
            selected={tab === "all"}
          />
        </Tabs>
        <MakersGrid>
          <SmallDetailCard
            icon={"/static/demo.jpg"}
            title={"Nicolás Serrano Arévalo"}
            subtitle={"@serranoarevalo"}
            streakNumber={50}
            launchedNumber={20}
            isLink={true}
            link={routes.userDetail("@serranoarevalo")}
            linkAs={routes.asUserDetail("@serranoarevalo")}
            isCard={true}
          />
        </MakersGrid>
      </Wrapper>
    );
  }
}

export default Makers;
