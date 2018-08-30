import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { GRAPHQL_URL } from "../configs";

// tslint:disable-next-line
export default withApollo(
  // tslint:disable-next-line
  ({ headers }) => new ApolloClient({ uri: GRAPHQL_URL })
);
