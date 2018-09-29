import { gql } from "apollo-boost";

export const GET_DASHBOARD = gql`
  query getDashboard {
    Me {
      user {
        firstName
      }
    }
    GetLatestProducts(take: 5) {
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
    GetLatestGoals(take: 10) {
      goals {
        text
        createdAt
        id
        product {
          name
        }
      }
    }
    GetAllProducts {
      products {
        id
        name
      }
    }
  }
`;
