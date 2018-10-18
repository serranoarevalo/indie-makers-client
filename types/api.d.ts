/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: completedGoals
// ====================================================

export interface completedGoals_FilterGoals_goals_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface completedGoals_FilterGoals_goals_maker {
  __typename: "User";
  username: string | null;
  profilePhoto: string;
}

export interface completedGoals_FilterGoals_goals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: completedGoals_FilterGoals_goals_product | null;
  createdAt: string;
  completedAt: string | null;
  maker: completedGoals_FilterGoals_goals_maker | null;
}

export interface completedGoals_FilterGoals {
  __typename: "FilterGoalsResponse";
  goals: (completedGoals_FilterGoals_goals | null)[] | null;
}

export interface completedGoals {
  FilterGoals: completedGoals_FilterGoals;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDashboard
// ====================================================

export interface getDashboard_Me_user {
  __typename: "User";
  id: number;
  firstName: string;
}

export interface getDashboard_Me {
  __typename: "MeResponse";
  user: getDashboard_Me_user | null;
}

export interface getDashboard_GetLatestProducts_products {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  slug: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
  needsHelp: boolean;
}

export interface getDashboard_GetLatestProducts {
  __typename: "GetLatestProductsResponse";
  products: (getDashboard_GetLatestProducts_products | null)[] | null;
}

export interface getDashboard_GetLatestGoals_goals_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface getDashboard_GetLatestGoals_goals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: getDashboard_GetLatestGoals_goals_product | null;
  createdAt: string;
  completedAt: string | null;
}

export interface getDashboard_GetLatestGoals {
  __typename: "GetLatestGoalsResponse";
  goals: (getDashboard_GetLatestGoals_goals | null)[] | null;
}

export interface getDashboard_GetAllProducts_products {
  __typename: "Product";
  id: number;
  name: string;
}

export interface getDashboard_GetAllProducts {
  __typename: "GetAllProductsResponse";
  products: (getDashboard_GetAllProducts_products | null)[] | null;
}

export interface getDashboard {
  Me: getDashboard_Me;
  GetLatestProducts: getDashboard_GetLatestProducts;
  GetLatestGoals: getDashboard_GetLatestGoals;
  GetAllProducts: getDashboard_GetAllProducts;
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
  username: string | null;
  streak: number;
  launchedProductCount: number;
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
// GraphQL mutation operation: toggleToDo
// ====================================================

export interface toggleToDo_EditGoal {
  __typename: "EditGoalResponse";
  ok: boolean;
  error: string | null;
}

export interface toggleToDo {
  EditGoal: toggleToDo_EditGoal;
}

export interface toggleToDoVariables {
  isCompleted: boolean;
  goalId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteGoal
// ====================================================

export interface deleteGoal_DeleteGoal {
  __typename: "DeleteGoalResponse";
  ok: boolean;
  error: string | null;
}

export interface deleteGoal {
  DeleteGoal: deleteGoal_DeleteGoal;
}

export interface deleteGoalVariables {
  goalId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: addedRecently
// ====================================================

export interface addedRecently_FilterProducts_products_maker {
  __typename: "User";
  id: number;
  profilePhoto: string;
}

export interface addedRecently_FilterProducts_products {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  slug: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
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
// GraphQL query operation: getMaker
// ====================================================

export interface getMaker_GetMaker_maker_products {
  __typename: "Product";
  id: number;
  slug: string;
  logo: string | null;
  name: string;
  description: string;
}

export interface getMaker_GetMaker_maker_completedGoals_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface getMaker_GetMaker_maker_completedGoals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: getMaker_GetMaker_maker_completedGoals_product | null;
  createdAt: string;
  completedAt: string | null;
}

export interface getMaker_GetMaker_maker_pendingGoals_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface getMaker_GetMaker_maker_pendingGoals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: getMaker_GetMaker_maker_pendingGoals_product | null;
  createdAt: string;
  completedAt: string | null;
}

export interface getMaker_GetMaker_maker {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
  username: string | null;
  streak: number;
  launchedProductCount: number;
  bio: string | null;
  products: (getMaker_GetMaker_maker_products | null)[] | null;
  completedGoals: (getMaker_GetMaker_maker_completedGoals | null)[] | null;
  pendingGoals: (getMaker_GetMaker_maker_pendingGoals | null)[] | null;
}

export interface getMaker_GetMaker {
  __typename: "GetMakerResponse";
  maker: getMaker_GetMaker_maker | null;
}

export interface getMaker {
  GetMaker: getMaker_GetMaker;
}

export interface getMakerVariables {
  username: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: filterMakers
// ====================================================

export interface filterMakers_FilterUsers_makers {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
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
// GraphQL mutation operation: addProduct
// ====================================================

export interface addProduct_CreateProduct_product {
  __typename: "Product";
  id: number;
  slug: string;
}

export interface addProduct_CreateProduct {
  __typename: "CreateProductResponse";
  ok: boolean;
  error: string | null;
  product: addProduct_CreateProduct_product | null;
}

export interface addProduct {
  CreateProduct: addProduct_CreateProduct;
}

export interface addProductVariables {
  name: string;
  description: string;
  needsHelp: boolean;
  website?: string | null;
  logo?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProduct
// ====================================================

export interface getProduct_GetProduct_product_maker {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
  username: string | null;
  streak: number;
  launchedProductCount: number;
}

export interface getProduct_GetProduct_product_pendingGoals_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface getProduct_GetProduct_product_pendingGoals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: getProduct_GetProduct_product_pendingGoals_product | null;
  createdAt: string;
  completedAt: string | null;
}

export interface getProduct_GetProduct_product_completedGoals_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface getProduct_GetProduct_product_completedGoals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: getProduct_GetProduct_product_completedGoals_product | null;
  createdAt: string;
  completedAt: string | null;
}

export interface getProduct_GetProduct_product {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  slug: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
  needsHelp: boolean;
  website: string | null;
  maker: getProduct_GetProduct_product_maker | null;
  pendingGoals: (getProduct_GetProduct_product_pendingGoals | null)[] | null;
  completedGoals: (getProduct_GetProduct_product_completedGoals | null)[] | null;
}

export interface getProduct_GetProduct {
  __typename: "GetProductResponse";
  product: getProduct_GetProduct_product | null;
}

export interface getProduct {
  GetProduct: getProduct_GetProduct;
}

export interface getProductVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: filterProducts
// ====================================================

export interface filterProducts_FilterProducts_products_maker {
  __typename: "User";
  id: number;
  profilePhoto: string;
}

export interface filterProducts_FilterProducts_products {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  slug: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
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

export interface filterToDos_FilterGoals_goals_product {
  __typename: "Product";
  logo: string | null;
  id: number;
  slug: string;
  name: string;
}

export interface filterToDos_FilterGoals_goals_maker {
  __typename: "User";
  username: string | null;
  profilePhoto: string;
}

export interface filterToDos_FilterGoals_goals {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: filterToDos_FilterGoals_goals_product | null;
  maker: filterToDos_FilterGoals_goals_maker | null;
  createdAt: string;
  completedAt: string | null;
}

export interface filterToDos_FilterGoals {
  __typename: "FilterGoalsResponse";
  goals: (filterToDos_FilterGoals_goals | null)[] | null;
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

// ====================================================
// GraphQL mutation operation: logUserIn
// ====================================================

export interface logUserIn_ConnectFB {
  __typename: "ConnectFBResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
  isNew: boolean;
}

export interface logUserIn {
  ConnectFB: logUserIn_ConnectFB;
}

export interface logUserInVariables {
  firstName: string;
  lastName: string;
  email?: string | null;
  fbId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMe
// ====================================================

export interface getMe_Me_user {
  __typename: "User";
  id: number;
  username: string | null;
  profilePhoto: string;
  bio: string | null;
}

export interface getMe_Me {
  __typename: "MeResponse";
  user: getMe_Me_user | null;
}

export interface getMe {
  Me: getMe_Me;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createGoal
// ====================================================

export interface createGoal_CreateGoal_goal_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface createGoal_CreateGoal_goal {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: createGoal_CreateGoal_goal_product | null;
  createdAt: string;
  completedAt: string | null;
}

export interface createGoal_CreateGoal {
  __typename: "CreateGoalResponse";
  ok: boolean;
  error: string | null;
  goal: createGoal_CreateGoal_goal | null;
}

export interface createGoal {
  CreateGoal: createGoal_CreateGoal;
}

export interface createGoalVariables {
  text: string;
  productId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MakerParts
// ====================================================

export interface MakerParts {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string;
  username: string | null;
  streak: number;
  launchedProductCount: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GoalParts
// ====================================================

export interface GoalParts_product {
  __typename: "Product";
  id: number;
  slug: string;
  name: string;
}

export interface GoalParts {
  __typename: "Goal";
  id: number;
  text: string;
  isCompleted: boolean;
  product: GoalParts_product | null;
  createdAt: string;
  completedAt: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductParts
// ====================================================

export interface ProductParts {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  slug: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
  needsHelp: boolean;
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
