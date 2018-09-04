import React from "react";
import { Query } from "react-apollo";
import MakersPresenter from "./makersPresenter";
import { FILTER_MAKERS } from "./makersQueries";
import { filterMakers, filterMakersVariables } from "types/api";

interface IProps {
  tab: "UPDATED" | "FIRE" | "SHIPPED";
  page: number;
}

class MakersQuery extends Query<filterMakers, filterMakersVariables> {}

export default class extends React.Component<IProps> {
  static getInitialProps(props) {
    const { query } = props;
    const { tab = "FIRE", page = 0 } = query;
    return { tab: tab.toUpperCase(), page: parseInt(page) };
  }
  render() {
    const { tab, page } = this.props;
    return (
      <MakersQuery
        query={FILTER_MAKERS}
        variables={{ status: tab as any, page }}
      >
        {({ loading, data }) =>
          !loading ? (
            <MakersPresenter tab={tab} page={page} data={data} />
          ) : null
        }
      </MakersQuery>
    );
  }
}
