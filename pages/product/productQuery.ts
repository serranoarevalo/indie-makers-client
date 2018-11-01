import gql from "graphql-tag";
import {
  PRODUCT_FRAGMENT,
  MAKER_FRAGMENT,
  GOAL_FRAGMENT
} from "../../fragments";

const COMMENT_FRAGMENT = gql`
  fragment ComentParts on Comment {
    id
    createdAt
    text
    maker {
      id
      username
      profilePhoto
    }
  }
`;

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
          ...ComentParts
          childComments {
            ...ComentParts
          }
        }
      }
      clapped
      error
    }
  }
  ${GOAL_FRAGMENT}
  ${PRODUCT_FRAGMENT}
  ${MAKER_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: Int!) {
    DeleteProduct(productId: $productId) {
      ok
      error
    }
  }
`;
