import React from "react";
import { Query } from "react-apollo";
import CompleteProfilePresenter from "./editProfilePresenter";
import { getMe } from "../../types/api";
import { GET_ME } from "../../sharedQueries";

interface IState {
  homepage: string | undefined | null;
  bio: string | undefined | null;
  username: string | undefined | null;
}

class MeQuery extends Query<getMe> {}

export default class CompleteProfileContainer extends React.Component<
  {},
  IState
> {
  render() {
    return (
      <MeQuery
        query={GET_ME}
        fetchPolicy={"network-only"}
        onCompleted={this.handleMeQuery}
      >
        {() => <CompleteProfilePresenter {...this.state} />}
      </MeQuery>
    );
  }
  public handleMeQuery = (data: {} | getMe) => {
    if ("Me" in data) {
      const {
        Me: { user }
      } = data;
      if (user) {
        const { homepage, bio, username } = user;
        this.setState({
          homepage,
          bio,
          username
        });
      }
    }
  };
}
