import { gql } from "apollo-boost";

export const GET_REVIEW = gql`
  query getReview($slug: String!) {
    productReview(where: { slug: $slug }) {
      id
      name
      intro
      heroImage {
        url
      }
      timeToMarket
      projectTypes {
        name
      }
      tech {
        name
      }
      review
    }
  }
`;
