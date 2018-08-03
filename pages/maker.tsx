import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import DetailCard from "../components/detailCard";
import UserDetail from "../components/userDetail";

const Container = styled.div`
  margin: 50px 0px;
  display: grid;
  grid-template-columns: 320px 3fr;
  grid-gap: 50px;
`;

const Column = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: 85px;
  grid-gap: 40px;
`;

export default () => (
  <Wrapper>
    <Container>
      <Head>
        <title>Maker Name | Indie Makers</title>
      </Head>
      <Column>
        <DetailCard href="" disableLink={true} kind={"user"} />
      </Column>
      <Grid>
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
      </Grid>
    </Container>
  </Wrapper>
);
