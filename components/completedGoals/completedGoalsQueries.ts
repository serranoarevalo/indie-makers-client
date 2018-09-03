import { gql } from "apollo-boost";

export const COMPLETED_GOALS = gql`
  query completedGoals {
    FilterGoals(status: COMPLETED) {
      makers {
        fullName
        profilePhoto
        streak
        launchedProductCount
        username
        goals {
          text
          isCompleted
          product {
            name
          }
          updatedAt
        }
      }
    }
  }
`;
