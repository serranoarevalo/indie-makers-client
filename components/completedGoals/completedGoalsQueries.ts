import { gql } from "apollo-boost";

export const COMPLETED_GOALS = gql`
  query completedGoals {
    FilterGoals(status: COMPLETED) {
      makers {
        id
        fullName
        profilePhoto
        streak
        launchedProductCount
        username
        goals {
          id
          text
          isCompleted
          product {
            id
            name
          }
          completedAt
        }
      }
    }
  }
`;
