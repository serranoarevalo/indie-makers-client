import React from "react";
import EditProductPresenter from "./editProductPresenter";
import IsMine from "../../lib/isMine";
import { Query, Mutation, MutationFn } from "react-apollo";
import {
  getProduct,
  getProductVariables,
  editProduct,
  editProductVariables
} from "types/api";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import { withRouter, WithRouterProps } from "next/router";
import { EDIT_PRODUCT } from "./editProductQueries";
import { toast } from "react-toastify";

class GetProductQuery extends Query<getProduct, getProductVariables> {}
class EditProductMutation extends Mutation<editProduct, editProductVariables> {}

interface IProps {
  slug: string;
}

class EditProductContainer extends React.Component<WithRouterProps & IProps> {
  public updateFn: MutationFn<editProduct, editProductVariables>;
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
                    return (
                      <EditProductMutation
                        mutation={EDIT_PRODUCT}
                        onCompleted={this.onCompleted}
                      >
                        {updateFn => {
                          this.updateFn = updateFn;
                          return (
                            <EditProductPresenter
                              updateProduct={this.updateProduct}
                              data={data}
                            />
                          );
                        }}
                      </EditProductMutation>
                    );
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
  public updateProduct = (
    name: string,
    description: string,
    logoUrl?: string,
    website?: string,
    needsHelp?: boolean
  ) => {
    const { slug } = this.props;
    console.log(website);
    this.updateFn({
      variables: { slug, name, description, logo: logoUrl, website, needsHelp }
    });
  };
  public onCompleted = (data: editProduct) => {
    const {
      EditProduct: { ok, error }
    } = data;
    const { router, slug } = this.props;
    if (!ok && error) {
      toast.error(error);
    } else {
      toast.success("Product updated!");
      setTimeout(() => router.push(`/product/${slug}`), 2000);
    }
  };
}

export default withRouter(EditProductContainer);
