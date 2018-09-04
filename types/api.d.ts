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

// ====================================================
// GraphQL query operation: filterMakers
// ====================================================

export interface filterMakers_FilterUsers_makers {
  __typename: "User";
  id: number;
  profilePhoto: string;
  fullName: string;
  username: string | null;
  streak: number;
  launchedProductCount: number;
}

export interface filterMakers_FilterUsers {
  __typename: "FilterUsersResponse";
  makers: (filterMakers_FilterUsers_makers | null)[] | null;
  page: number;
  totalPages: number;
}

export interface filterMakers {
  FilterUsers: filterMakers_FilterUsers;
}

export interface filterMakersVariables {
  status: UserState;
  page: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: filterProducts
// ====================================================

export interface filterProducts_FilterProducts_products_maker {
  __typename: "User";
  profilePhoto: string;
}

export interface filterProducts_FilterProducts_products {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  description: string;
  completedGoalCount: number;
  goalCount: number;
  needsHelp: boolean;
  maker: filterProducts_FilterProducts_products_maker | null;
}

export interface filterProducts_FilterProducts {
  __typename: "FilterProductsResponse";
  products: (filterProducts_FilterProducts_products | null)[] | null;
  page: number;
  totalPages: number;
}

export interface filterProducts {
  FilterProducts: filterProducts_FilterProducts;
}

export interface filterProductsVariables {
  status: ProductState;
  page: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: filterToDos
// ====================================================

export interface filterToDos_FilterGoals_makers_goals_product {
  __typename: "Product";
  name: string;
}

export interface filterToDos_FilterGoals_makers_goals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: filterToDos_FilterGoals_makers_goals_product | null;
  completedAt: string | null;
}

export interface filterToDos_FilterGoals_makers {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
  streak: number;
  launchedProductCount: number;
  username: string | null;
  goals: (filterToDos_FilterGoals_makers_goals | null)[] | null;
}

export interface filterToDos_FilterGoals {
  __typename: "FilterGoalsResponse";
  makers: (filterToDos_FilterGoals_makers | null)[] | null;
  page: number;
  totalPages: number;
}

export interface filterToDos {
  FilterGoals: filterToDos_FilterGoals;
}

export interface filterToDosVariables {
  status: GoalStatus;
  page: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum GoalStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

export enum ProductState {
  FEATURED = "FEATURED",
  HELP = "HELP",
  LAUNCHED = "LAUNCHED",
  NEW = "NEW",
  UPDATED = "UPDATED",
}

export enum UserState {
  FIRE = "FIRE",
  SHIPPED = "SHIPPED",
  UPDATED = "UPDATED",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
