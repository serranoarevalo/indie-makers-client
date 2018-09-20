import gql from "graphql-tag";

export const GET_NEW = gql`
  query addedRecently {
    FilterProducts(status: NEW, take: 3, page: 0) {
      products {
        id
        logo
        slug
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
