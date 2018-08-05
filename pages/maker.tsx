import Head from "next/head";
import styled from "../typed-components";
import routes from "../routes";
import Wrapper from "../components/wrapper";
import BigDetailCard from "../components/bigDetailCard";
import SmallDetailCard from "../components/smallDetailCard";

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
      <Grid>
        <SmallDetailCard
          icon={"/static/demo.jpg"}
          title={"Best project ever"}
          toDoNumber={"20/10"}
          subtitle={"Use this life changing product when you're on the toilet"}
          isLink={true}
          link={routes.productDetail("indie-makers")}
          linkAs={routes.asProductDetail("indie-makers")}
          isCard={true}
          lightSubtitle={false}
        />
      </Grid>
    </Container>
  </Wrapper>
);
