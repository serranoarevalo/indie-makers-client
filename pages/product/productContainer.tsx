import React from "react";
import { Query, Mutation, MutationFn } from "react-apollo";
import ProductPresenter from "./productPresenter";
import { withRouter, WithRouterProps } from "next/router";
import {
  getProduct,
  getProductVariables,
  deleteProduct,
  deleteProductVariables
} from "types/api";
import { GET_PRODUCT, DELETE_PRODUCT } from "./productQuery";
import { toast } from "react-toastify";
import { GET_DASHBOARD } from "../../components/dashboard/DashboardQueries";
import { GET_MAKER } from "../../pages/maker/makerQueries";

interface IProps {
  slug: string;
  isLoggedIn: boolean;
}

class ProductQuery extends Query<getProduct, getProductVariables> {}
class DeleteProductMutation extends Mutation<
  deleteProduct,
  deleteProductVariables
> {}

class ProductContainer extends React.Component<IProps & WithRouterProps> {
  public deleteProduct: MutationFn<deleteProduct, deleteProductVariables>;
  static async getInitialProps({ query }) {
    const { slug } = query;
    return { slug };
  }
  render() {
    const { slug, isLoggedIn } = this.props;
    return (
      <ProductQuery
        query={GET_PRODUCT}
        variables={{ slug }}
        fetchPolicy={"cache-and-network"}
      >
        {({ data }) =>
          data ? (
            <DeleteProductMutation
              mutation={DELETE_PRODUCT}
              refetchQueries={[
                { query: GET_DASHBOARD },
                {
                  query: GET_MAKER,
                  variables: {
                    username:
                      (data.GetProduct.product &&
                        data.GetProduct.product.maker &&
                        data.GetProduct.product.maker.username) ||
                      ""
                  }
                }
              ]}
              variables={{
                productId:
                  (data.GetProduct.product && data.GetProduct.product.id) || 0
              }}
            >
              {deleteProduct => {
                this.deleteProduct = deleteProduct;
                return (
                  <ProductPresenter
                    data={data}
                    confirmDeletion={this.confirmDeletion}
                    isLoggedIn={isLoggedIn}
                  />
                );
              }}
            </DeleteProductMutation>
          ) : null
        }
      </ProductQuery>
    );
  }
  public confirmDeletion = () => {
    const { router } = this.props;
    const confirmation = confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmation) {
      this.deleteProduct();
      toast.success("Product Deleted");
      router.push("/");
    }
  };
}

export default withRouter(ProductContainer);
