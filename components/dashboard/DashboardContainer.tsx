import React from "react";
import DashboardPresenter from "./DashboardPresenter";

interface IState {
  newToDo: string;
  product: string;
}

class DashboardContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
      product: "none"
    };
  }
  render() {
    const { newToDo, product } = this.state;
    return (
      <DashboardPresenter
        inputValue={newToDo}
        handleInputChange={this.handleInputChange}
        product={product}
      />
    );
  }
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
}

export default DashboardContainer;
