import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { GRAPHQL_URL } from "../configs";

export default withApollo(
  ({ headers }) => new ApolloClient({ uri: GRAPHQL_URL })
);
