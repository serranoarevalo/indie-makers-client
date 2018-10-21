import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { createGoal, createGoalVariables } from "types/api";
import { ADD_GOAL } from "../../sharedQueries";
import AddToDoPresenter from "./addToDoPresenter";
import { toast } from "react-toastify";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import { GET_DASHBOARD } from "../dashboard/DashboardQueries";
import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";
import { FULL_PRODUCT_FRAGMENT } from "../../fragments";

interface IState {
  text: string;
}

interface IProps {
  productId: number;
  slug: string;
}

class AddToDoMutation extends Mutation<createGoal, createGoalVariables> {}

export default class AddToDoContainer extends React.Component<IProps, IState> {
  public addToDo: MutationFn<createGoal, createGoalVariables>;
  state = {
    text: ""
  };
  render() {
    const { productId, slug } = this.props;
    const { text } = this.state;
    return (
      <AddToDoMutation
        mutation={ADD_GOAL}
        variables={{ productId, text }}
        refetchQueries={[{ query: GET_DASHBOARD }]}
        update={this.onUpdate}
      >
        {addToDo => {
          this.addToDo = addToDo;
          return (
            <AddToDoPresenter
              handleOnChange={this.handleOnChange}
              handleSubmit={this.handleSubmit}
              text={text}
            />
          );
        }}
      </AddToDoMutation>
    );
  }
  public handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({
      text: value
    });
  };

  public handleSubmit = () => {
    const { text } = this.state;
    if (text === "") {
      toast.error("You have to type a goal");
      return;
    }
    this.setState({
      text: ""
    });
    this.addToDo();
  };

  public onUpdate = (
    cache: DataProxy,
    { data }: FetchResult<createGoal, Record<string, any>>
  ) => {
    console.log(data);
    const { productId } = this.props;
    if (data && "CreateGoal" in data) {
      const {
        CreateGoal: { ok, error, goal }
      } = data;
      if (!ok && error) {
        toast.error(error);
        return;
      } else if (ok && !error) {
        const id = `Product:${productId}`;
        const product: any = cache.readFragment({
          id,
          fragment: FULL_PRODUCT_FRAGMENT,
          fragmentName: "FullProductParts"
        });
        if (product) {
          cache.writeFragment({
            id,
            fragment: FULL_PRODUCT_FRAGMENT,
            data: {
              ...product,
              pendingGoals: [...product.pendingGoals, goal]
            },
            fragmentName: "FullProductParts"
          });
        }
        return;
      }
    }
  };
}
