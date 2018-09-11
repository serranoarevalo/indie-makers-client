import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import Cookies from "js-cookie";
import { GRAPHQL_URL } from "../configs";

export default withApollo(
  ({ headers }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      credentials: "include",
      headers,
      onError: ({ graphQLErrors }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(error => {
            const JSONError = JSON.parse(error.message);
            if (JSONError.status === 401) {
              Cookies.remove("X-JWT");
            }
          });
        }
      }
    })
);
