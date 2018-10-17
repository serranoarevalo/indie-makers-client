import React from "react";
import { Query } from "react-apollo";
import CompletedGoalsPresenter from "./completedGoalsPresenter";
import { completedGoals } from "types/api";
import { COMPLETED_GOALS } from "./completedGoalsQueries";

class CompletedQuery extends Query<completedGoals> {}

export default class extends React.Component {
  render() {
    return (
      <CompletedQuery query={COMPLETED_GOALS}>
        {({ data, loading }) =>
          !loading ? <CompletedGoalsPresenter data={data!} /> : null
        }
      </CompletedQuery>
    );
  }
}
