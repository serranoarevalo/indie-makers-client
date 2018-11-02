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
      logo
    }
    createdAt
    completedAt
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
    commentCount
    voteCount
    needsHelp
  }
`;

export const FULL_PRODUCT_FRAGMENT = gql`
  fragment FullProductParts on Product {
    ...ProductParts
    website
    maker {
      ...MakerParts
    }
    pendingGoals {
      ...GoalParts
    }
    completedGoals {
      ...GoalParts
    }
  }
  ${PRODUCT_FRAGMENT}
  ${GOAL_FRAGMENT}
  ${MAKER_FRAGMENT}
`;

export const COMMENT_FRAGMENT = gql`
  fragment ComentParts on Comment {
    id
    createdAt
    text
    maker {
      id
      username
      profilePhoto
    }
  }
`;
