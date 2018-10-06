import { gql } from "apollo-boost";

export const MAKER_FRAGMENT = gql`
  fragment MakerParts on User {
    id
    fullName
    profilePhoto
    username
    streak
    launchedProductCount
  }
`;

export const GOAL_FRAGMENT = gql`
  fragment GoalParts on Goal {
    id
    text
    isCompleted
    product {
      id
      slug
      name
    }
    createdAt
  }
`;

export const PRODUCT_FRAGMENT = gql`
  fragment ProductParts on Product {
    id
    logo
    name
    slug
    description
    goalCount
    completedGoalCount
    needsHelp
  }
`;
