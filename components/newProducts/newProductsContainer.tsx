import React from "react";
import { Query } from "react-apollo";
import NewProductsPresenter from "./newProductsPresenter";
import { GET_NEW } from "./newProductsQueries";
import { addedRecently } from "types/api";

class LatestProductsQuery extends Query<addedRecently> {}

export default () => (
  <LatestProductsQuery query={GET_NEW}>
    {({ data, loading }) =>
      !loading ? <NewProductsPresenter data={data} /> : null
    }
  </LatestProductsQuery>
);
