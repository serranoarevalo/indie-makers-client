import Card from "../card";
import Goal from "../goal";
import Section from "../section";
import Title from "../title";

const CompletedGoals = () => (
  <Section titleElements={<Title>Completed Goals</Title>}>
    <Card padding={"0px 20px"}>
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
    </Card>
  </Section>
);
export default CompletedGoals;
