import gql from "graphql-tag";
import { MAKER_FRAGMENT } from "../../fragments";

export const FILTER_MAKERS = gql`
  query filterMakers($status: UserState!, $page: Int!) {
    FilterUsers(status: $status, page: $page) {
      makers {
        ...MakerParts
      }
      page
      totalPages
    }
  }
  ${MAKER_FRAGMENT}
`;
