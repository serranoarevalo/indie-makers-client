import { gql } from "apollo-boost";
import { GOAL_FRAGMENT } from "./fragments";

export const LOG_USER_IN = gql`
  mutation logUserIn(
    $firstName: String!
    $lastName: String!
    $email: String
    $fbId: String!
  ) {
    ConnectFB(
      firstName: $firstName
      lastName: $lastName
      email: $email
      fbId: $fbId
    ) {
      ok
      error
      token
      isNew
    }
  }
`;

export const GET_ME = gql`
  query getMe {
    Me {
      user {
        id
        username
        profilePhoto
        bio
      }
    }
  }
`;

export const ADD_GOAL = gql`
  mutation createGoal($text: String!, $productId: Int!) {
    CreateGoal(text: $text, productId: $productId) {
      ok
      error
      goal {
        ...GoalParts
      }
    }
  }
  ${GOAL_FRAGMENT}
`;
