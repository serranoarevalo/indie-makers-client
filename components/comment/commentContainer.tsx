import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { toast } from "react-toastify";
import IsMine from "../../lib/isMine";
import { GET_PRODUCT } from "../../pages/product/productQuery";
import CommentPresenter from "./commentPresenter";
import { deleteComment, deleteCommentVariables } from "types/api";
import { DELETE_COMMENT } from "./commentQueries";

interface IProps {
  text: string;
  createdAt: string;
  id: number;
  profilePhoto: string;
  username: string;
  canDelete: boolean;
  makerId: number;
  productSlug: string;
}

class DeleteCommentMutation extends Mutation<
  deleteComment,
  deleteCommentVariables
> {}

export default class CommentContainer extends React.Component<IProps> {
  public deleteComment: MutationFn<deleteComment, deleteCommentVariables>;
  public toastId: number;
  render() {
    const {
      text,
      createdAt,
      username,
      profilePhoto,
      canDelete,
      makerId,
      id,
      productSlug
    } = this.props;
    return (
      <DeleteCommentMutation
        mutation={DELETE_COMMENT}
        variables={{ commentId: id }}
        refetchQueries={[
          { query: GET_PRODUCT, variables: { slug: productSlug } }
        ]}
        onCompleted={this.handleCompleted}
        awaitRefetchQueries={true}
      >
        {deleteComment => {
          this.deleteComment = deleteComment;
          return (
            <IsMine otherId={makerId}>
              {isMine => (
                <CommentPresenter
                  text={text}
                  createdAt={createdAt}
                  profilePhoto={profilePhoto}
                  username={username}
                  canDelete={canDelete}
                  isAuthor={isMine}
                  handleDelete={this.handleDelete}
                />
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
}
