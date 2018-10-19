import React from "react";
import EditProductPresenter from "./editProductPresenter";
import IsMine from "../../lib/isMine";
import { Query } from "react-apollo";
import { getProduct, getProductVariables } from "types/api";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import { withRouter } from "next/router";

class GetProductQuery extends Query<getProduct, getProductVariables> {}

class EditProductContainer extends React.Component<any> {
  static getInitialProps(props) {
    const {
      query: { slug }
    } = props;
    return { slug };
  }
  render() {
    const { slug, router } = this.props;
    return (
      <GetProductQuery query={GET_PRODUCT} variables={{ slug }}>
        {({ data }) => {
          if (
            data &&
            data.GetProduct &&
            data.GetProduct.product &&
            data.GetProduct.product.maker &&
            data.GetProduct.product.maker.id
          ) {
            return (
              <IsMine otherId={data.GetProduct.product.maker.id}>
                {isMine => {
                  if (isMine) {
                    return <EditProductPresenter data={data} />;
                  } else {
                    router.push(`/product/${slug}`);
                    return null;
                  }
                }}
              </IsMine>
            );
          } else {
            return null;
          }
        }}
      </GetProductQuery>
    );
  }
}

export default withRouter(EditProductContainer);
