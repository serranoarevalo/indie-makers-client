import React from "react";
import DashboardPresenter from "./DashboardPresenter";
import { Query, Mutation, MutationFn } from "react-apollo";
import { getDashboard, createGoal, createGoalVariables } from "types/api";
import { GET_DASHBOARD } from "./DashboardQueries";
import { toast } from "react-toastify";
import { ADD_GOAL } from "../../sharedQueries";

interface IState {
  newToDo: string;
  productId: number;
}

class DashboardQuery extends Query<getDashboard> {}
class AddTodoMutation extends Mutation<createGoal, createGoalVariables> {}

class DashboardContainer extends React.Component<{}, IState> {
  public addToDo: MutationFn<createGoal, createGoalVariables>;
  public toastId: number;
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
      productId: 0
    };
  }
  render() {
    const { newToDo, productId } = this.state;
    return (
      <DashboardQuery query={GET_DASHBOARD}>
        {({ data, loading }) => (
          <AddTodoMutation
            mutation={ADD_GOAL}
            variables={{ text: newToDo, productId }}
            refetchQueries={[{ query: GET_DASHBOARD }]}
            onCompleted={this.onAddCompleted}
          >
            {addToDo => {
              this.addToDo = addToDo;
              return (
                <DashboardPresenter
                  inputValue={newToDo}
                  handleInputChange={this.handleInputChange}
                  productId={productId}
                  loading={loading}
                  data={data}
                  handleSubmit={this.handleSubmit}
                />
              );
            }}
          </AddTodoMutation>
        )}
      </DashboardQuery>
    );
  }
  public handleSubmit = () => {
    const { productId, newToDo } = this.state;
    if (productId === 0) {
      toast.error("Select a product");
    } else if (newToDo === "") {
      toast.error("You have to write a goal!");
    } else {
      this.addToDo();
      this.toastId = toast.info("Adding To Do");
    }
  };

  public handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onAddCompleted = () => {
    this.setState({
      newToDo: ""
    });
    toast.update(this.toastId, {
      render: `Created!`,
      type: toast.TYPE.SUCCESS
    });
  };
}

export default DashboardContainer;
