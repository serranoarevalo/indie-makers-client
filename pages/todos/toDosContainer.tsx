import React from "react";
import { Query } from "react-apollo";
import ToDosPresenter from "./toDosPresenter";
import { filterToDos, filterToDosVariables } from "types/api";
import { FILTER_TODOS } from "./toDosQueries";

interface IProps {
  tab: "PENDING" | "COMPLETED";
  page: number;
}

class ToDosQuery extends Query<filterToDos, filterToDosVariables> {}

export default class extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    const { tab = "COMPLETED", page = 0 } = query;
    return { tab: tab.toUpperCase(), page: parseInt(page) };
  }
  render() {
    const { tab, page } = this.props;
    return (
      <ToDosQuery query={FILTER_TODOS} variables={{ status: tab as any, page }}>
        {({ data, loading }) =>
          !loading ? <ToDosPresenter page={page} tab={tab} data={data} /> : null
        }
      </ToDosQuery>
    );
  }
}
