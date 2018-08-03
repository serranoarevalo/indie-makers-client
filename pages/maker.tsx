import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import DetailCard from "../components/detailCard";

const Container = styled.div`
  margin: 50px 0px;
  display: grid;
  grid-template-columns: 320px 3fr;
  grid-gap: 25px;
`;

const UserDetails = styled.div``;

export default () => (
  <Wrapper>
    <Container>
      <Head>
        <title>Maker Name | Indie Makers</title>
      </Head>
      <UserDetails>
        <DetailCard href="" disableLink={true} />
      </UserDetails>
    </Container>
  </Wrapper>
);
