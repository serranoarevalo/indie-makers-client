import { gql } from "apollo-boost";

export const GET_NEW = gql`
  query addedRecently {
    FilterProducts(status: NEW, take: 3, page: 0) {
      products {
        id
        logo
        name
        description
        goalCount
        completedGoalCount
        needsHelp
        maker {
          profilePhoto
        }
      }
    }
  }
`;
