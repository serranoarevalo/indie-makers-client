import React from "react";
import { withRouter, WithRouterProps } from "next/router";
import { Mutation, MutationFn } from "react-apollo";
import NewPresenter from "./newPresenter";
import { toast } from "react-toastify";
import { addProduct, addProductVariables } from "types/api";
import { ADD_PRODUCT } from "./newQueries";
import { GET_DASHBOARD } from "../../components/dashboard/DashboardQueries";

class AddProductMutaton extends Mutation<addProduct, addProductVariables> {}

class NewContainer extends React.Component<WithRouterProps> {
  public addProduct: MutationFn<addProduct, addProductVariables>;
  render() {
    return (
      <AddProductMutaton
        mutation={ADD_PRODUCT}
        onCompleted={this.onAddCompleted}
        refetchQueries={[{ query: GET_DASHBOARD }]}
      >
        {addProduct => {
          this.addProduct = addProduct;
          return <NewPresenter handleSubmit={this.handleSubmit} />;
        }}
      </AddProductMutaton>
    );
  }
  public handleSubmit = (
    name: string,
    description: string,
    logoUrl?: string,
    website?: string,
    needsHelp?: boolean
  ) => {
    if (name === "" && description === "") {
      toast.error("Fill up the required fields");
      return;
    }
    this.addProduct({
      variables: {
        name,
        description,
        website,
        logo: logoUrl,
        needsHelp: needsHelp || false
      }
    });
  };
  public onAddCompleted = (data: addProduct) => {
    const { router } = this.props;
    const {
      CreateProduct: { ok, product, error }
    } = data;
    if (!ok && error) {
      toast.error(error);
      return;
    } else {
      if (product) {
        toast.success(`${product.name} created!`);
        setTimeout(() => router.push(`/product/${product.slug}`), 2000);
      }
    }
  };
}

export default withRouter(NewContainer);
