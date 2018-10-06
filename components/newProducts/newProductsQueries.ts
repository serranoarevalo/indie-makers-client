import gql from "graphql-tag";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const GET_NEW = gql`
  query addedRecently {
    FilterProducts(status: NEW, take: 3, page: 0) {
      products {
        ...ProductParts
        maker {
          id
          profilePhoto
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;
