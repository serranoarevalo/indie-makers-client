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
          id
          text
          createdAt
        }
        completedGoals {
          id
          text
          completedAt
        }
      }
    }
  }
`;
