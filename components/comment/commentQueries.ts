import { gql } from "apollo-boost";

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: Int!) {
    DeleteComment(commentId: $commentId) {
      ok
      error
    }
  }
`;

export const REPLY_TO_COMMENT = gql`
  mutation replyComment($text: String!, $commentId: Int!) {
    CreateComment(text: $text, commentId: $commentId) {
      ok
      error
    }
  }
`;
