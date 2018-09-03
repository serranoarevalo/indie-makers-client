import { gql } from "apollo-boost";

export const FILTER_PRODUCTS = gql`
  query filterProducts($status: ProductState!) {
    FilterProducts(status: $status) {
      products {
        id
        logo
        name
        description
        completedGoalCount
        goalCount
        needsHelp
        maker {
          profilePhoto
        }
      }
    }
  }
`;
