import gql from "graphql-tag";
import {
  PRODUCT_FRAGMENT,
  MAKER_FRAGMENT,
  GOAL_FRAGMENT
} from "../../fragments";

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    GetProduct(slug: $slug) {
      product {
        ...ProductParts
        website
        maker {
          ...MakerParts
        }
        pendingGoals {
          ...GoalParts
        }
        completedGoals {
          ...GoalParts
        }
        comments {
          id
          text
          maker {
            username
            profilePhoto
          }
        }
      }
      error
    }
  }
  ${GOAL_FRAGMENT}
  ${PRODUCT_FRAGMENT}
  ${MAKER_FRAGMENT}
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: Int!) {
    DeleteProduct(productId: $productId) {
      ok
      error
    }
  }
`;
