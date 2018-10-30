import { gql } from "apollo-boost";

export const ADD_COMMENT = gql`
  mutation addComment($text: String!, $productId: Int!) {
    CreateComment(text: $text, productId: $productId) {
      ok
      error
      comment {
        id
        text
        createdAt
        maker {
          profilePhoto
          username
        }
      }
    }
  }
`;
