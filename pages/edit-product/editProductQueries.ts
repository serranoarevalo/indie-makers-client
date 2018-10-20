import { gql } from "apollo-boost";

export const EDIT_PRODUCT = gql`
  mutation editProduct(
    $slug: String!
    $name: String
    $description: String
    $needsHelp: Boolean
    $website: String
    $logo: String
  ) {
    EditProduct(
      slug: $slug
      name: $name
      description: $description
      needsHelp: $needsHelp
      website: $website
      logo: $logo
    ) {
      ok
      error
    }
  }
`;
