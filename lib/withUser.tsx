import React from "react";
import { Query } from "react-apollo";
import { getMe } from "types/api";
import { GET_ME } from "../sharedQueries";

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
        {({ data }) =>
          React.Children.map(children, (child, index) =>
            React.cloneElement(child as any, {
              index,
              user: data
            })
          )
        }
      </MeQuery>
    );
  }
}
