import React from "react";
import DashboardPresenter from "./DashboardPresenter";

interface IState {
  newToDo: string;
}

class DashboardContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: ""
    };
  }
  render() {
    const { newToDo } = this.state;
    return (
      <DashboardPresenter
        inputValue={newToDo}
        handleInputChange={this.handleInputChange}
      />
    );
  }
  public handleInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default DashboardContainer;
