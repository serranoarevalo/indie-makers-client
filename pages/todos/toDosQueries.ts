import gql from "graphql-tag";

export const FILTER_TODOS = gql`
  query filterToDos($status: GoalStatus!, $page: Int!) {
    FilterGoals(status: $status, page: $page) {
      goals {
        id
        text
        isCompleted
        product {
          logo
          id
          slug
          name
        }
        maker {
          username
          profilePhoto
        }
        createdAt
        completedAt
      }
      page
      totalPages
    }
  }
`;
