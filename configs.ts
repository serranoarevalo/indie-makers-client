export const GRAPHQL_URL =
  process.env.NODE_ENV === "production"
    ? "https://indie-api.now.sh/graphql/"
    : "http://127.0.0.1:4000/graphql/";
export const GRAPHQLCMS_URL =
  "https://api-apeast.graphcms.com/v1/cjl84xx290azv01fzax9fajt0/master";
export const FB_APP_ID =
  process.env.NODE_ENV === "production"
    ? "1023002694534040"
    : "1844359489017417";
export const AWS_URL =
  process.env.NODE_ENV === "production"
    ? "https://indie-api.now.sh/aws/"
    : "http://127.0.0.1:4000/aws/";
