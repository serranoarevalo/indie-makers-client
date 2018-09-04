import { gql } from "apollo-boost";

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    GetProduct(slug: $slug) {
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
