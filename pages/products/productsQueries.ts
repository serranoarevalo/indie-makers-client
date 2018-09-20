import gql from "graphql-tag";

export const FILTER_PRODUCTS = gql`
  query filterProducts($status: ProductState!, $page: Int!) {
    FilterProducts(status: $status, page: $page) {
      products {
        id
        logo
        name
        description
        completedGoalCount
        goalCount
        needsHelp
        slug
        maker {
          profilePhoto
        }
      }
      page
      totalPages
    }
  }
`;
