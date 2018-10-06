import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT, GOAL_FRAGMENT } from "../../fragments";

export const GET_DASHBOARD = gql`
  query getDashboard {
    Me {
      user {
        id
        firstName
      }
    }
    GetLatestProducts(take: 5) {
      products {
        ...ProductParts
      }
    }
    GetLatestGoals {
      goals {
        ...GoalParts
      }
    }
    GetAllProducts {
      products {
        id
        name
      }
    }
  }
  ${PRODUCT_FRAGMENT}
  ${GOAL_FRAGMENT}
`;
