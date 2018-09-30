import { gql } from "apollo-boost";

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
      }
    }
  }
`;
