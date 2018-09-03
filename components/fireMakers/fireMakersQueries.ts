import { gql } from "apollo-boost";

export const FIRE_MAKERS = gql`
  query fireMakers {
    FilterUsers(status: FIRE, take: 5) {
      makers {
        id
        fullName
        profilePhoto
        streak
        username
      }
    }
  }
`;
