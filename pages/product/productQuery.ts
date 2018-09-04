import { gql } from "apollo-boost";

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    GetProduct(id: $id) {
      product {
        logo
        name
        description
        completedGoalCount
        goalCount
        needsHelp
        website
        maker {
          id
          username
          streak
          profilePhoto
          fullName
        }
        pendingGoals {
          text
          createdAt
        }
        completedGoals {
          text
          completedAt
        }
      }
    }
  }
`;
