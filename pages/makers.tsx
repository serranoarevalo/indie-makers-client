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

export default () => (
  <Wrapper>
    <Head>
      <title>Makers | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab text={"More Active"} selected={true} />
      <Tab text={"Serial Makers"} />
      <Tab text={"All"} />
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
