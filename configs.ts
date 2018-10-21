export const GRAPHQL_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.indiemakers.net/graphql/"
    : "https://popular-dodo-99.localtunnel.me/graphql/";
export const GRAPHQLCMS_URL =
  "https://api-apeast.graphcms.com/v1/cjl84xx290azv01fzax9fajt0/master";
export const FB_APP_ID =
  process.env.NODE_ENV === "production"
    ? "1023002694534040"
    : "1844359489017417";
export const AWS_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.indiemakers.net/aws/"
    : "http://127.0.0.1:4000/aws/";
