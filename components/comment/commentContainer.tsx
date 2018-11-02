import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { toast } from "react-toastify";
import IsMine from "../../lib/isMine";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import CommentPresenter from "./commentPresenter";
import {
  deleteComment,
  deleteCommentVariables,
  replyComment,
  replyCommentVariables,
  getProduct_GetProduct_product_comments_childComments
} from "types/api";
import { DELETE_COMMENT, REPLY_TO_COMMENT } from "./commentQueries";

interface IProps {
  text: string;
  createdAt: string;
  id: number;
  profilePhoto: string;
  username: string;
  canDelete: boolean;
  makerId: number;
  productSlug: string;
  isLoggedIn: boolean;
  replies: getProduct_GetProduct_product_comments_childComments[];
  isReply: boolean;
}

interface IState {
  isReplying: boolean;
  reply: string;
}

class DeleteCommentMutation extends Mutation<
  deleteComment,
  deleteCommentVariables
> {}

class ReplyComment extends Mutation<replyComment, replyCommentVariables> {}

export default class CommentContainer extends React.Component<IProps, IState> {
  public deleteComment: MutationFn<deleteComment, deleteCommentVariables>;
  public toastId: number;
  public replyComment: MutationFn<replyComment, replyCommentVariables>;
  state = {
    isReplying: false,
    reply: ""
  };
  render() {
    const {
      text,
      createdAt,
      username,
      profilePhoto,
      canDelete,
      makerId,
      id,
      productSlug,
      isLoggedIn,
      replies,
      isReply
    } = this.props;
    const { isReplying, reply } = this.state;
    return (
      <DeleteCommentMutation
        mutation={DELETE_COMMENT}
        variables={{ commentId: id }}
        refetchQueries={[
          { query: GET_PRODUCT, variables: { slug: productSlug } }
        ]}
        onCompleted={this.handleCompleted}
      >
        {deleteComment => {
          this.deleteComment = deleteComment;
          return (
            <IsMine otherId={makerId}>
              {isMine => (
                <ReplyComment
                  mutation={REPLY_TO_COMMENT}
                  variables={{ text: reply, commentId: id }}
                  onCompleted={this.handlePostingCompleted}
                  refetchQueries={[
                    { query: GET_PRODUCT, variables: { slug: productSlug } }
                  ]}
                >
                  {replyComment => {
                    this.replyComment = replyComment;
                    return (
                      <CommentPresenter
                        text={text}
                        createdAt={createdAt}
                        profilePhoto={profilePhoto}
                        username={username}
                        canDelete={canDelete}
                        isAuthor={isMine}
                        handleDelete={this.handleDelete}
                        isReplying={isReplying}
                        isLoggedIn={isLoggedIn}
                        reply={reply}
                        handleChange={this.handleChange}
                        toggleReply={this.toggeReplying}
                        handleSubmit={this.handleSubmit}
                        replies={replies}
                        isReply={isReply}
                      />
                    );
                  }}
                </ReplyComment>
              )}
            </IsMine>
          );
        }}
      </DeleteCommentMutation>
    );
  }
  public handleDelete = () => {
    const confirmation = confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmation) {
      this.deleteComment();
      this.toastId = toast.info("Deleting Comment");
    }
  };
  public handleCompleted = () => {
    toast.update(this.toastId, {
      render: `Comment Deleted`,
      type: toast.TYPE.SUCCESS
    });
  };
  public handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const {
      target: { value }
    } = event;
    this.setState({
      reply: value
    });
  };
  public toggeReplying = () => {
    this.setState(prev => {
      return {
        isReplying: !prev.isReplying
      };
    });
  };

  public handleSubmit = () => {
    const { reply } = this.state;
    if (reply !== "") {
      this.replyComment();
      this.toastId = toast.info("Posting Comment");
    } else {
      toast.error(`You need to write a reply`);
    }
  };
  public handlePostingCompleted = () => {
    this.setState({
      reply: "",
      isReplying: false
    });
    toast.update(this.toastId, {
      render: `Reply posted`,
      type: toast.TYPE.SUCCESS
    });
  };
}
