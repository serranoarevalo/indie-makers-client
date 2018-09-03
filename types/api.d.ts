/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: completedGoals
// ====================================================

export interface completedGoals_FilterGoals_makers_goals_product {
  __typename: "Product";
  name: string;
}

export interface completedGoals_FilterGoals_makers_goals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: completedGoals_FilterGoals_makers_goals_product | null;
  completedAt: string | null;
}

export interface completedGoals_FilterGoals_makers {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
  streak: number;
  launchedProductCount: number;
  username: string | null;
  goals: (completedGoals_FilterGoals_makers_goals | null)[] | null;
}

export interface completedGoals_FilterGoals {
  __typename: "FilterGoalsResponse";
  makers: (completedGoals_FilterGoals_makers | null)[] | null;
}

export interface completedGoals {
  FilterGoals: completedGoals_FilterGoals;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fireMakers
// ====================================================

export interface fireMakers_FilterUsers_makers {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
  streak: number;
  username: string | null;
}

export interface fireMakers_FilterUsers {
  __typename: "FilterUsersResponse";
  makers: (fireMakers_FilterUsers_makers | null)[] | null;
}

export interface fireMakers {
  FilterUsers: fireMakers_FilterUsers;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: addedRecently
// ====================================================

export interface addedRecently_FilterProducts_products_maker {
  __typename: "User";
  profilePhoto: string;
}

export interface addedRecently_FilterProducts_products {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
  slug: string;
  needsHelp: boolean;
  maker: addedRecently_FilterProducts_products_maker | null;
}

export interface addedRecently_FilterProducts {
  __typename: "FilterProductsResponse";
  products: (addedRecently_FilterProducts_products | null)[] | null;
}

export interface addedRecently {
  FilterProducts: addedRecently_FilterProducts;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
