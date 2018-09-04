import React from "react";
import { Query } from "react-apollo";
import ProductPresenter from "../product/productPresenter";
import { getProduct, getProductVariables } from "types/api";
import { GET_PRODUCT } from "./productQuery";

interface IProps {
  id: number;
}

class ProductQuery extends Query<getProduct, getProductVariables> {}

export default class extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    const { id } = query;
    return { id };
  }
  render() {
    const { id } = this.props;
    return (
      <ProductQuery query={GET_PRODUCT} variables={{ id }}>
        {({ data, loading }) =>
          !loading ? <ProductPresenter data={data} /> : null
        }
      </ProductQuery>
    );
  }
}
