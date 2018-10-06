import gql from "graphql-tag";
import { MAKER_FRAGMENT } from "../../fragments";

export const FIRE_MAKERS = gql`
  query fireMakers {
    FilterUsers(status: FIRE, take: 5) {
      makers {
        ...MakerParts
      }
    }
  }
  ${MAKER_FRAGMENT}
`;
