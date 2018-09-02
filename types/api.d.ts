/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: addedRecently
// ====================================================

export interface addedRecently_GetLatestProducts_products_maker {
  __typename: "User";
  profilePhoto: string;
}

export interface addedRecently_GetLatestProducts_products {
  __typename: "Product";
  id: number;
  logo: string | null;
  name: string;
  description: string;
  goalCount: number;
  completedGoalCount: number;
  slug: string;
  needsHelp: boolean;
  maker: addedRecently_GetLatestProducts_products_maker | null;
}

export interface addedRecently_GetLatestProducts {
  __typename: "GetLatestProductsResponse";
  products: (addedRecently_GetLatestProducts_products | null)[] | null;
}

export interface addedRecently {
  GetLatestProducts: addedRecently_GetLatestProducts;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
