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
import { GOAL_FRAGMENT } from "../../fragments";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import { GET_DASHBOARD } from "../../components/dashboard/DashboardQueries";

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
  goalId: number;
}

interface IState {
  isEditing: boolean;
  text: string;
}

export default class GoalTextContainer extends React.Component<IProps, IState> {
  public editToDo: MutationFn<editToDo, editToDoVariables>;
  public deleteGoal: MutationFn<deleteGoal, deleteGoalVariables>;
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
        refetchQueries={[
          { query: GET_PRODUCT, variables: { slug: productSlug } }
        ]}
      >
        {toggleToDo => (
          <DeleteMutation
            mutation={DELETE_TODO}
            variables={{ goalId }}
            awaitRefetchQueries={true}
            refetchQueries={[
              { query: GET_PRODUCT, variables: { slug: productSlug } },
              { query: GET_DASHBOARD }
            ]}
          >
            {deleteGoal => {
              this.deleteGoal = deleteGoal;
              return (
                <EditMutation
                  mutation={EDIT_TODO}
                  variables={{ text, goalId }}
                  update={this.handleEditToDo}
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
    const { goalId, isCompleted } = this.props;
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
              isCompleted: !isCompleted
            }
          });
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
      toast.error("Goal cant be empty, try to delete it first");
      return;
    }

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
          this.setState({
            isEditing: false
          });
        }
        return;
      }
    }
  };
  public handleDeleteGoal = () => {
    const confirmation = confirm("Are you sure you want to delete this goal?");
    if (confirmation) {
      this.deleteGoal();
      toast.success("To Do Deleted");
    }
  };
}
