import { gql } from "apollo-boost";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $needsHelp: Boolean!
    $website: String
    $logo: String
    $isLaunched: Boolean
  ) {
    CreateProduct(
      name: $name
      description: $description
      needsHelp: $needsHelp
      website: $website
      logo: $logo
      isLaunched: $isLaunched
    ) {
      ok
      error
      product {
        id
        name
        slug
      }
    }
  }
`;
