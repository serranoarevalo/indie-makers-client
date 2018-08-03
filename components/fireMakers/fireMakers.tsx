import styled from "../../typed-components";
import Section from "../section";
import Title from "../title";
import UserDetail from "../userDetail";

const Container = styled.div`
  display: grid;
  & .launched {
    display: none;
  }
  & > a:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const FireMakers = () => (
  <Section titleElements={<Title>Makers on 🔥</Title>}>
    <Container>
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
      />
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
      />
    </Container>
  </Section>
);
export default FireMakers;
