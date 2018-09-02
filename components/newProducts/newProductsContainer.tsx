import React from "react";
import { Query } from "react-apollo";
import NewProductsPresenter from "./newProductsPresenter";
import { GET_NEW } from "./newProductsQueries";

export default class extends React.Component {
  render() {
    return (
      <Query query={GET_NEW}>
        {({ data, loading }) => <NewProductsPresenter />}
      </Query>
    );
  }
}
