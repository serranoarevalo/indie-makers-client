import React from "react";
import DashboardPresenter from "./DashboardPresenter";
import { Query } from "react-apollo";
import { getDashboard } from "types/api";
import { GET_DASHBOARD } from "./DashboardQueries";

interface IState {
  newToDo: string;
  product: string;
}

class DashboardQuery extends Query<getDashboard> {}

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
      <DashboardQuery query={GET_DASHBOARD}>
        {({ data, loading }) => (
          <DashboardPresenter
            inputValue={newToDo}
            handleInputChange={this.handleInputChange}
            product={product}
            loading={loading}
            data={data}
          />
        )}
      </DashboardQuery>
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
