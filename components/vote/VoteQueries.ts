import { gql } from "apollo-boost";

export const VOTE = gql`
  mutation vote($productId: Int!) {
    ToggleVote(productId: $productId) {
      ok
      error
    }
  }
`;
