import React from "react";
import { Consumer } from "./context";

interface IProps {
  otherId: any;
  children: (isMine: boolean) => void;
}

export default class IsMine extends React.Component<IProps> {
  render() {
    const { otherId } = this.props;
    return (
      <Consumer>
        {value => {
          const { userQuery } = value;

          const loggedId =
            userQuery &&
            userQuery.Me &&
            userQuery.Me &&
            userQuery.Me.user &&
            userQuery.Me.user.id;

          const isMine = otherId === loggedId;
          return this.props.children(isMine);
        }}
      </Consumer>
    );
  }
}
