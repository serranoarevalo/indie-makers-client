import gql from "graphql-tag";

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
