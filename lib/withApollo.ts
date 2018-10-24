import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { GRAPHQL_URL } from "../configs";
import logOut from "./logOut";

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
                logOut();
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
