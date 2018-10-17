import { gql } from "apollo-boost";

export const TOGGLE_TODO = gql`
  mutation toggleToDo($isCompleted: Boolean!, $goalId: Int!) {
    EditGoal(isCompleted: $isCompleted, goalId: $goalId) {
      ok
      error
    }
  }
`;
