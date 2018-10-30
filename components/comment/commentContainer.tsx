import React from "react";
import CommentPresenter from "./commentPresenter";

interface IProps {
  text: string;
  createdAt: string;
  id: number;
  profilePhoto: string;
  username: string;
}

export default class CommentContainer extends React.Component<IProps> {
  render() {
    const { text, createdAt, username, profilePhoto } = this.props;
    return (
      <CommentPresenter
        text={text}
        createdAt={createdAt}
        profilePhoto={profilePhoto}
        username={username}
      />
    );
  }
}
