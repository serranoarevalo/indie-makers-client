import { gql } from "apollo-boost";

export const TOGGLE_TODO = gql`
  mutation toggleToDo($isCompleted: Boolean!, $goalId: Int!) {
    EditGoal(isCompleted: $isCompleted, goalId: $goalId) {
      ok
      error
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteGoal($goalId: Int!) {
    DeleteGoal(goalId: $goalId) {
      ok
      error
    }
  }
`;

export const EDIT_TODO = gql`
  mutation editToDo($text: String!, $goalId: Int!) {
    EditGoal(text: $text, goalId: $goalId) {
      ok
      error
    }
  }
`;
