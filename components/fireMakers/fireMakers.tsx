import styled from "../../typed-components";
import routes from "../../routes";
import Section from "../section";
import Title from "../title";
import SmallDetailCard from "../smallDetailCard";

const Container = styled.div`
  display: grid;
  & > a:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const FireMakers = () => (
  <Section titleElements={<Title>Makers on 🔥</Title>}>
    <Container>
      <SmallDetailCard
        icon={"/static/demo.jpg"}
        title={"Nicolás Serrano Arévalo"}
        subtitle={"@serranoarevalo"}
        streakNumber={50}
        isLink={true}
        link={routes.userDetail("@serranoarevalo")}
        linkAs={routes.asUserDetail("@serranoarevalo")}
        isCard={true}
      />
    </Container>
  </Section>
);
export default FireMakers;
