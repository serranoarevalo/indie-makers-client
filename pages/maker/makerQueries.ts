import gql from "graphql-tag";

export const GET_MAKER = gql`
  query getMaker($username: String!) {
    GetMaker(username: $username) {
      maker {
        profilePhoto
        fullName
        username
        bio
        streak
        launchedProductCount
        products {
          id
          slug
          logo
          name
          description
        }
        completedGoals {
          id
          text
          product {
            id
            slug
            name
          }
          completedAt
        }
        pendingGoals {
          id
          text
          product {
            id
            slug
            name
          }
          createdAt
        }
      }
    }
  }
`;
