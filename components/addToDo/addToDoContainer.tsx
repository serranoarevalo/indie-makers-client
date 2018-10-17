import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { createGoal, createGoalVariables } from "types/api";
import { ADD_GOAL } from "../../sharedQueries";
import AddToDoPresenter from "./addToDoPresenter";
import { toast } from "react-toastify";

interface IState {
  text: string;
}

interface IProps {
  productId: number;
}

class AddToDoMutation extends Mutation<createGoal, createGoalVariables> {}

export default class AddToDoContainer extends React.Component<IProps, IState> {
  public addToDo: MutationFn<createGoal, createGoalVariables>;
  state = {
    text: ""
  };
  render() {
    const { productId } = this.props;
    const { text } = this.state;
    return (
      <AddToDoMutation mutation={ADD_GOAL} variables={{ productId, text }}>
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
    this.addToDo();
  };
}
