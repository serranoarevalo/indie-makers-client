import { gql } from "apollo-boost";

export const GET_FEATURED_POST = gql`
  {
    productReviews(
      orderBy: createdAt_DESC
      where: { featured: true }
      first: 1
    ) {
      id
      name
      intro
      slug
      heroImage {
        url
      }
    }
  }
`;

export const GET_LATEST_THREE = gql`
  {
    productReviews(
      orderBy: createdAt_DESC
      first: 3
      where: { featured: false }
    ) {
      id
      slug
      name
      intro
      logo {
        url
      }
    }
  }
`;
