import React from "react";
import { Query } from "react-apollo";
import ProductsPresenter from "./productsPresenter";
import { filterProducts, filterProductsVariables } from "types/api";
import { FILTER_PRODUCTS } from "./productsQueries";

class ProductsQuery extends Query<filterProducts, filterProductsVariables> {}

type ProductState = "NEW" | "UPDATED" | "LAUNCHED" | "HELP" | "FEATURED";

interface IProps {
  tab?: ProductState;
}

export default class extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    const { tab = "NEW" } = query;
    return { tab: tab.toUpperCase() };
  }
  render() {
    const { tab } = this.props;
    return (
      <ProductsQuery query={FILTER_PRODUCTS} variables={{ status: tab as any }}>
        {({ data, loading }) =>
          !loading ? <ProductsPresenter tab={tab} data={data} /> : null
        }
      </ProductsQuery>
    );
  }
}
