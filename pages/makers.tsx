import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Tabs from "../components/tabs";
import Tab from "../components/tab";
import UserDetail from "../components/userDetail";

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
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
      />
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
        card={true}
      />
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
        card={true}
      />
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
        card={true}
      />
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
        card={true}
      />
    </MakersGrid>
  </Wrapper>
);
