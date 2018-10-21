import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import Cookies from "js-cookie";
import { GRAPHQL_URL } from "../configs";

export default withApollo(
  ({ headers }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      credentials: "include",
      onError: ({ graphQLErrors }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(error => {
            try {
              const JSONError = JSON.parse(error.message);
              if (JSONError.status === 401) {
                Cookies.remove("X-JWT");
                window.location.href = "/";
              }
            } catch (error) {
              console.log(error);
            }
          });
        }
      },
      headers: {
        cookie: headers && headers.cookie
      }
    })
);
