import gql from "graphql-tag";

export const FILTER_TODOS = gql`
  query filterToDos($status: GoalStatus!, $page: Int!) {
    FilterGoals(status: $status, page: $page) {
      goals {
        id
      }
      page
      totalPages
    }
  }
`;
