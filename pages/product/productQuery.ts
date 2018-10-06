import gql from "graphql-tag";
import { PRODUCT_FRAGMENT, MAKER_FRAGMENT } from "../../fragments";

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
          id
          text
          createdAt
        }
        completedGoals {
          id
          text
          completedAt
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
  ${MAKER_FRAGMENT}
`;
