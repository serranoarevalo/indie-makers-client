import React from "react";
import { withRouter, WithRouterProps } from "next/router";
import { Mutation, MutationFn } from "react-apollo";
import NewPresenter from "./newPresenter";
import { toast } from "react-toastify";
import { addProduct, addProductVariables } from "types/api";
import { ADD_PRODUCT } from "./newQueries";
import { GET_DASHBOARD } from "../../components/dashboard/DashboardQueries";

interface IState {
  canSubmit: boolean;
}

class AddProductMutaton extends Mutation<addProduct, addProductVariables> {}

class NewContainer extends React.Component<WithRouterProps, IState> {
  public addProduct: MutationFn<addProduct, addProductVariables>;
  public toastId: number;
  state = {
    canSubmit: true
  };
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
    needsHelp?: boolean,
    isLaunched?: boolean
  ) => {
    const { canSubmit } = this.state;
    if (name === "" && description === "") {
      toast.error("Fill up the required fields");
      return;
    }
    if (canSubmit) {
      this.setState(
        {
          canSubmit: false
        },
        () => {
          this.toastId = toast.info("Creating product");
          this.addProduct({
            variables: {
              name,
              description,
              website,
              logo: logoUrl,
              needsHelp: needsHelp || false,
              isLaunched: isLaunched || false
            }
          });
        }
      );
    }
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
        toast.update(this.toastId, {
          render: `${product.name} created!`,
          type: toast.TYPE.SUCCESS
        });
        setTimeout(() => router.push(`/product/${product.slug}`), 2000);
      }
    }
  };
}

export default withRouter(NewContainer);
