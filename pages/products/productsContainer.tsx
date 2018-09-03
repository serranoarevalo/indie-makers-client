import React from "react";
import { Query } from "react-apollo";
import ProductsPresenter from "./productsPresenter";
import { filterProducts, filterProductsVariables } from "types/api";
import { FILTER_PRODUCTS } from "./productsQueries";

class ProductsQuery extends Query<filterProducts, filterProductsVariables> {}

type ProductState = "NEW" | "UPDATED" | "LAUNCHED" | "HELP" | "FEATURED";

interface IProps {
  tab?: ProductState;
  page: number;
}

export default class extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    const { tab = "UPDATED", page = 0 } = query;
    return { tab: tab.toUpperCase(), page: parseInt(page) };
  }
  render() {
    const { tab, page } = this.props;
    console.log(this.props);
    return (
      <ProductsQuery
        query={FILTER_PRODUCTS}
        variables={{ status: tab as any, page }}
      >
        {({ data, loading }) =>
          !loading ? (
            <ProductsPresenter tab={tab} data={data} page={page} />
          ) : null
        }
      </ProductsQuery>
    );
  }
}
