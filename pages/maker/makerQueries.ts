import { gql } from "apollo-boost";
import { MAKER_FRAGMENT, GOAL_FRAGMENT } from "../../fragments";

export const GET_MAKER = gql`
  query getMaker($username: String!) {
    GetMaker(username: $username) {
      maker {
        ...MakerParts
        bio
        homepage
        products {
          id
          slug
          logo
          name
          description
        }
        completedGoals {
          ...GoalParts
        }
        pendingGoals {
          ...GoalParts
        }
      }
    }
  }
  ${MAKER_FRAGMENT}
  ${GOAL_FRAGMENT}
`;
