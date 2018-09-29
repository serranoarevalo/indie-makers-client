import { gql } from "apollo-boost";

export const GET_DASHBOARD = gql`
  query getDashboard {
    Me {
      user {
        firstName
      }
    }
    GetLatestProducts {
      products {
        id
        slug
        logo
        name
        description
        completedGoalCount
        goalCount
      }
    }
    GetLatestGoals {
      goals {
        text
        createdAt
        id
        product {
          name
        }
      }
    }
  }
`;
