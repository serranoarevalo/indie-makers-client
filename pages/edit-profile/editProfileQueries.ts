import { gql } from "apollo-boost";

export const EDIT_USER = gql`
  mutation editProfile($username: String, $homepage: String, $bio: String) {
    EditUser(username: $username, homepage: $homepage, bio: $bio) {
      ok
      error
    }
  }
`;
