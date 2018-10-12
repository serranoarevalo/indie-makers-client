import React from "react";
import { Query } from "react-apollo";
import MakerPresenter from "./makerPresenter";
import { getMaker, getMakerVariables, getMe } from "../../types/api";
import { GET_MAKER } from "./makerQueries";

class MakerQuery extends Query<getMaker, getMakerVariables> {}

interface IProps {
  tab: "PRODUCTS" | "DONE" | "TODO";
  username: string;
  userQuery: getMe;
}

class MakerContainer extends React.Component<IProps> {
  static getInitialProps(props) {
    const { query } = props;
    const { username, tab = "PRODUCTS" } = query;
    return { username, tab: tab.toUpperCase() };
  }
  render() {
    const { username, tab } = this.props;

    return (
      <MakerQuery query={GET_MAKER} variables={{ username: username }}>
        {({ data, loading }) =>
          !loading ? <MakerPresenter data={data} tab={tab} /> : null
        }
      </MakerQuery>
    );
  }
}

export default MakerContainer;
