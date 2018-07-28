import styled from "../../typed-components";
import Goal from "../goal";
import Section from "../section";
import Title from "../title";

const Container = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.cardShadow};
  padding: 0px 20px;
`;

const CompletedGoals = () => (
  <Section titleElements={<Title>Completed Goals</Title>}>
    <Container>
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
    </Container>
  </Section>
);
export default CompletedGoals;
