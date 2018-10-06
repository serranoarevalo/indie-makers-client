import gql from "graphql-tag";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const FILTER_PRODUCTS = gql`
  query filterProducts($status: ProductState!, $page: Int!) {
    FilterProducts(status: $status, page: $page) {
      products {
        ...ProductParts
        maker {
          id
          profilePhoto
        }
      }
      page
      totalPages
    }
  }
  ${PRODUCT_FRAGMENT}
`;
