import { gql } from "apollo-boost";

export const GET_BLOG = gql`
  query getBlog {
    posts: productReviews(where: { featured: false }) {
      id
      slug
      name
      intro
      logo {
        url
      }
    }
    featured: productReviews(where: { featured: true }) {
      id
      slug
      name
      intro
      heroImage {
        url
      }
    }
  }
`;
