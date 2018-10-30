import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import withLogin from "../../lib/withLogin";
import CommentsPresenter from "./commentsPresenter";
import {
  getProduct_GetProduct_product_comments,
  addComment,
  addCommentVariables
} from "types/api";
import { ADD_COMMENT } from "./commentsQuery";
import { toast } from "react-toastify";

interface IProps {
  isLoggedIn: boolean;
  fbLogin: any;
  productId: number;
  comments: getProduct_GetProduct_product_comments[];
}

interface IState {
  comment: string;
  posting: boolean;
}

class AddCommentMutation extends Mutation<addComment, addCommentVariables> {}

class Comments extends React.Component<IProps, IState> {
  public postComment: MutationFn<addComment, addCommentVariables>;
  public toastId: number;
  static defaultProps = {
    comments: []
  };
  state = {
    comment: "",
    posting: false
  };
  render() {
    const { comment, posting } = this.state;
    const { comments, fbLogin, isLoggedIn, productId } = this.props;
    return (
      <AddCommentMutation
        variables={{ productId, text: comment }}
        mutation={ADD_COMMENT}
      >
        {postComment => {
          this.postComment = postComment;
          return (
            <CommentsPresenter
              comment={comment}
              comments={comments}
              fbLogin={fbLogin}
              isLoggedIn={isLoggedIn}
              handleComment={this.handleComment}
              posting={posting}
              sendComment={this.sendComment}
            />
          );
        }}
      </AddCommentMutation>
    );
  }

  public handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({
      comment: value
    } as any);
  };

  public sendComment = () => {
    const { comment, posting } = this.state;
    if (comment === "") {
      toast.error("Please write a comment!");
      return;
    }
    if (!posting) {
      this.setState({ posting: true });
      this.postComment();
      this.toastId = toast.info("Posting ");
    }
  };
}

export default withLogin(Comments);
