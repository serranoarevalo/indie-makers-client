import React from "react";
import { Mutation, FetchResult, MutationFn } from "react-apollo";
import { DataProxy } from "apollo-cache";
import { toast } from "react-toastify";
import GoalTextPresenter from "./goalTextPresenter";
import {
  toggleToDo,
  toggleToDoVariables,
  deleteGoal,
  deleteGoalVariables,
  editToDo,
  editToDoVariables
} from "../../types/api";
import { TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "./goalTextQueries";
import { GOAL_FRAGMENT, FULL_PRODUCT_FRAGMENT } from "../../fragments";
import { GET_PRODUCT } from "../../pages/product/productQuery";

class ToggleMutation extends Mutation<toggleToDo, toggleToDoVariables> {}
class DeleteMutation extends Mutation<deleteGoal, deleteGoalVariables> {}
class EditMutation extends Mutation<editToDo, editToDoVariables> {}

interface IProps {
  text: string;
  isCompleted?: boolean;
  lineThrough?: boolean;
  productName?: string;
  onProductPage?: boolean;
  fontSize?: string;
  className?: string;
  isMine?: boolean;
  timeStamp?: string;
  productSlug?: string;
  productId?: number;
  goalId: number;
}

interface IState {
  isEditing: boolean;
  text: string;
}

export default class GoalTextContainer extends React.Component<IProps, IState> {
  public editToDo: MutationFn<editToDo, editToDoVariables>;
  public deleteGoal: MutationFn<deleteGoal, deleteGoalVariables>;
  public toastId: number;
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEditing: false,
      text: props.text
    };
  }
  render() {
    const { isEditing, text } = this.state;
    const { isMine, goalId, isCompleted, productSlug } = this.props;
    return (
      <ToggleMutation
        mutation={TOGGLE_TODO}
        variables={{ goalId, isCompleted: !isCompleted }}
        update={this.handleAfterToggle}
        optimisticResponse={{
          EditGoal: {
            __typename: "Mutation",
            ok: true,
            error: null,
            isCompleted: !isCompleted
          }
        }}
        refetchQueries={[
          { query: GET_PRODUCT, variables: { slug: productSlug } }
        ]}
      >
        {toggleToDo => (
          <DeleteMutation
            mutation={DELETE_TODO}
            variables={{ goalId }}
            update={this.handleDelete}
            refetchQueries={[
              { query: GET_PRODUCT, variables: { slug: productSlug } }
            ]}
          >
            {deleteGoal => {
              this.deleteGoal = deleteGoal;
              return (
                <EditMutation
                  mutation={EDIT_TODO}
                  variables={{ text, goalId }}
                  update={this.handleEditToDo}
                  refetchQueries={[
                    { query: GET_PRODUCT, variables: { slug: productSlug } }
                  ]}
                >
                  {editToDo => {
                    this.editToDo = editToDo;
                    return (
                      <GoalTextPresenter
                        {...this.props}
                        toggleCompleted={isMine ? toggleToDo : null}
                        deleteGoal={this.handleDeleteGoal}
                        isEditing={isEditing}
                        editingText={text}
                        handleInputChange={this.handleInputChange}
                        toggleEditing={this.toggleEditing}
                        onSubmit={this.onSubmit}
                      />
                    );
                  }}
                </EditMutation>
              );
            }}
          </DeleteMutation>
        )}
      </ToggleMutation>
    );
  }

  public handleAfterToggle = (
    cache: DataProxy,
    { data }: FetchResult<toggleToDo, Record<string, any>>
  ) => {
    const { goalId, productId } = this.props;
    if (data) {
      const {
        EditGoal: { ok, error, isCompleted }
      } = data;
      if (error) {
        toast.error(error);
        return;
      }
      if (ok) {
        const id = `Goal:${goalId}`;
        const goal = cache.readFragment({
          id,
          fragment: GOAL_FRAGMENT
        });
        if (goal) {
          const newGoal = {
            ...goal,
            __typename: "Goal",
            isCompleted
          };
          cache.writeFragment({
            id,
            fragment: GOAL_FRAGMENT,
            data: { ...newGoal }
          });
          const pId = `Product:${productId}`;
          const product: any = cache.readFragment({
            id: pId,
            fragment: FULL_PRODUCT_FRAGMENT,
            fragmentName: "FullProductParts"
          });
          if (product) {
            if (isCompleted) {
              cache.writeFragment({
                id: pId,
                fragment: FULL_PRODUCT_FRAGMENT,
                data: {
                  __typename: "Product",
                  ...product,
                  pendingGoals: product.pendingGoals.filter(
                    goal => goal.id !== goalId
                  ),
                  completedGoals: [...product.completedGoals, newGoal]
                },
                fragmentName: "FullProductParts"
              });
            } else {
              cache.writeFragment({
                id: pId,
                fragment: FULL_PRODUCT_FRAGMENT,
                data: {
                  __typename: "Product",
                  ...product,
                  completedGoals: product.completedGoals.filter(
                    goal => goal.id !== goalId
                  ),
                  pendingGoals: [...product.pendingGoals, newGoal]
                },
                fragmentName: "FullProductParts"
              });
            }
          }
        }
        return;
      }
    }
  };
  public handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({
      text: value
    });
  };
  public toggleEditing = () => {
    this.setState(prev => {
      return {
        isEditing: !prev.isEditing
      };
    });
  };
  public onSubmit = () => {
    const { text } = this.state;
    if (text === "") {
      toast.error("Goal cant be empty, try to delete it if you want.");
      return;
    }
    this.setState({
      isEditing: false
    });
    // this.toastId = toast.info("Updating...");
    this.editToDo();
  };
  public handleEditToDo = (
    cache: DataProxy,
    { data }: FetchResult<editToDo, Record<string, any>>
  ) => {
    const { text } = this.state;
    const { goalId } = this.props;
    if (data) {
      const {
        EditGoal: { ok, error }
      } = data;
      if (error) {
        toast.error(error);
        return;
      }
      if (ok) {
        const id = `Goal:${goalId}`;
        const goal = cache.readFragment({
          id,
          fragment: GOAL_FRAGMENT
        });
        if (goal) {
          cache.writeFragment({
            id,
            fragment: GOAL_FRAGMENT,
            data: {
              ...goal,
              text
            }
          });
          /* toast.update(this.toastId, {
            render: `Updated!`,
            type: toast.TYPE.SUCCESS
          }); */
        }
        return;
      }
    }
  };
  public handleDeleteGoal = () => {
    const confirmation = confirm("Are you sure you want to delete this goal?");
    if (confirmation) {
      this.deleteGoal();
      this.toastId = toast.info("Deleting To Do");
    }
  };
  public handleDelete = (
    cache: DataProxy,
    { data }: FetchResult<deleteGoal, Record<string, any>>
  ) => {
    const { goalId, productId } = this.props;
    if (data) {
      const {
        DeleteGoal: { ok, error }
      } = data;
      if (error) {
        toast.error(error);
        return;
      }
      if (ok) {
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
              pendingGoals: product.pendingGoals.filter(
                goal => goal.id !== goalId
              ),
              completedGoals: product.completedGoals.filter(
                goal => goal.id !== goalId
              )
            },
            fragmentName: "FullProductParts"
          });
          toast.update(this.toastId, {
            render: `Deleted!`,
            type: toast.TYPE.SUCCESS
          });
        } else {
          window.location.reload();
        }
        return;
      }
    }
  };
}
