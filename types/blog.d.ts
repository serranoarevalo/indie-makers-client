/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFeatured
// ====================================================

export interface getFeatured_productReviews_heroImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getFeatured_productReviews {
  __typename: "ProductReview";
  id: string;
  name: string;
  intro: string | null;
  slug: string;
  heroImage: getFeatured_productReviews_heroImage | null;
}

export interface getFeatured {
  productReviews: (getFeatured_productReviews | null)[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLatest
// ====================================================

export interface getLatest_productReviews_logo {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getLatest_productReviews {
  __typename: "ProductReview";
  id: string;
  slug: string;
  name: string;
  intro: string | null;
  logo: getLatest_productReviews_logo | null;
}

export interface getLatest {
  productReviews: (getLatest_productReviews | null)[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getReview
// ====================================================

export interface getReview_productReview_heroImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getReview_productReview_projectTypes {
  __typename: "ProjectType";
  name: string;
}

export interface getReview_productReview_tech {
  __typename: "Tech";
  name: string;
}

export interface getReview_productReview {
  __typename: "ProductReview";
  id: string;
  name: string;
  intro: string | null;
  heroImage: getReview_productReview_heroImage | null;
  timeToMarket: string;
  projectTypes: getReview_productReview_projectTypes[] | null;
  tech: getReview_productReview_tech[] | null;
  review: string | null;
}

export interface getReview {
  productReview: getReview_productReview | null;
}

export interface getReviewVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBlog
// ====================================================

export interface getBlog_posts_logo {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getBlog_posts {
  __typename: "ProductReview";
  id: string;
  slug: string;
  name: string;
  intro: string | null;
  logo: getBlog_posts_logo | null;
}

export interface getBlog_featured_heroImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getBlog_featured {
  __typename: "ProductReview";
  id: string;
  slug: string;
  name: string;
  intro: string | null;
  heroImage: getBlog_featured_heroImage | null;
}

export interface getBlog {
  posts: (getBlog_posts | null)[];
  featured: (getBlog_featured | null)[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
