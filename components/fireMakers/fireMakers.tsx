import styled from "../../typed-components";
import Card from "../card";
import Section from "../section";
import Title from "../title";
import UserDetail from "../userDetail";

const Container = styled.div`
  overflow: hidden;
  display: grid;
  & h5 {
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > a:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const FireMakers = () => (
  <Section titleElements={<Title>Makers on 🔥</Title>}>
    <Card padding={"20px"}>
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
    </Card>
  </Section>
);
export default FireMakers;
