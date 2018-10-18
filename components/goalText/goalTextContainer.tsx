import React from "react";
import { Mutation, FetchResult } from "react-apollo";
import { DataProxy } from "apollo-cache";
import { toast } from "react-toastify";
import GoalTextPresenter from "./goalTextPresenter";
import {
  toggleToDo,
  toggleToDoVariables,
  deleteGoal,
  deleteGoalVariables
} from "../../types/api";
import { TOGGLE_TODO, DELETE_TODO } from "./goalTextQueries";
import { GOAL_FRAGMENT } from "../../fragments";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import { GET_DASHBOARD } from "../../components/dashboard/DashboardQueries";

class ToggleMutation extends Mutation<toggleToDo, toggleToDoVariables> {}
class DeleteMutation extends Mutation<deleteGoal, deleteGoalVariables> {}

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

export default class GoalTextContainer extends React.Component<IProps> {
  render() {
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
            refetchQueries={[
              { query: GET_PRODUCT, variables: { slug: productSlug } },
              { query: GET_DASHBOARD }
            ]}
          >
            {deleteGoal => (
              <GoalTextPresenter
                {...this.props}
                toggleCompleted={isMine ? toggleToDo : null}
                deleteGoal={deleteGoal}
              />
            )}
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
}
