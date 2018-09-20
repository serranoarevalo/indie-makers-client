import withApollo from "next-with-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import Cookies from "js-cookie";
import { GRAPHQL_URL } from "../configs";

export default withApollo(
  ({ headers }) =>
    new ApolloClient({
      ssrMode: true,
      link: ApolloLink.from([
        onError(({ graphQLErrors }) => {
          if (graphQLErrors) {
            graphQLErrors.forEach(error => {
              const JSONError = JSON.parse(error.message);
              if (JSONError.status === 401) {
                Cookies.remove("X-JWT");
              }
            });
          }
        }),
        new HttpLink({
          uri: GRAPHQL_URL,
          credentials: "include",
          headers
        })
      ]),
      cache: new InMemoryCache()
    })
);
