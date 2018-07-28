import styled from "../../typed-components";
import CompletedGoal from "../completedGoals";
import Section from "../section";
import Title from "../title";

const Container = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.cardShadow};
  padding: 0px 20px;
`;

const NewGoals = () => (
  <Section titleElements={<Title>Completed Goals</Title>}>
    <Container>
      <CompletedGoal />
      <CompletedGoal />
      <CompletedGoal />
      <CompletedGoal />
      <CompletedGoal />
    </Container>
  </Section>
);
export default NewGoals;
