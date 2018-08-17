import React from "react";
import NewPresenter from "./newPresenter";

interface IState {
  name: string;
  description: string;
  needHelp: boolean;
  homepage: string;
  logo: string;
}

class NewContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      needHelp: false,
      homepage: "",
      logo: ""
    };
  }
  render() {
    return (
      <NewPresenter
        {...this.state}
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

export default NewContainer;
