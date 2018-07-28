import styled from "../../typed-components";
import Card from "../card";
import Section from "../section";
import Title from "../title";
import UserDetail from "../userDetail";

const FireMakers = () => (
  <Section titleElements={<Title>Makers on 🔥</Title>}>
    <Card>
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
      />
    </Card>
  </Section>
);
export default FireMakers;
