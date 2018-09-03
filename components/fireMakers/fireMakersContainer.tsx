import React from "react";
import { Query } from "react-apollo";
import FireMakersPresenter from "./fireMakersPresenter";
import { fireMakers } from "types/api";
import { FIRE_MAKERS } from "./fireMakersQueries";

class FireQuery extends Query<fireMakers> {}

export default class extends React.Component {
  render() {
    return (
      <FireQuery query={FIRE_MAKERS}>
        {({ data, loading }) =>
          !loading ? <FireMakersPresenter data={data} /> : null
        }
      </FireQuery>
    );
  }
}
