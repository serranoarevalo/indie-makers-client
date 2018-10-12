import React from "react";
import { Query } from "react-apollo";
import { getMe } from "types/api";
import { GET_ME } from "../sharedQueries";
import { Provider } from "./context";

class MeQuery extends Query<getMe> {}

interface IProps {
  children: any;
  isLoggedIn: boolean;
}

export default class extends React.Component<IProps> {
  render() {
    const { children, isLoggedIn } = this.props;
    return (
      <MeQuery query={GET_ME} skip={!isLoggedIn}>
        {({ data }) => (
          <Provider value={{ userQuery: data }}>{children}</Provider>
        )}
      </MeQuery>
    );
  }
}
