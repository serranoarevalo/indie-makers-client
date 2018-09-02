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
