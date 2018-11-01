import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { toast } from "react-toastify";
import sortBy from "lodash.sortby";
import withLogin from "../../lib/withLogin";
import CommentsPresenter from "./commentsPresenter";
import {
  getProduct_GetProduct_product_comments,
  addComment,
  addCommentVariables
} from "types/api";
import { ADD_COMMENT } from "./commentsQuery";
import { GET_PRODUCT } from "../../pages/product/productQuery";

interface IProps {
  isLoggedIn: boolean;
  fbLogin: any;
  productId: number;
  comments: getProduct_GetProduct_product_comments[];
  productSlug: string;
  canDelete: boolean;
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
    const {
      comments,
      fbLogin,
      isLoggedIn,
      productId,
      productSlug,
      canDelete
    } = this.props;
    return (
      <AddCommentMutation
        variables={{ productId, text: comment }}
        mutation={ADD_COMMENT}
        refetchQueries={[
          { query: GET_PRODUCT, variables: { slug: productSlug } }
        ]}
        onCompleted={this.handleCompleted}
        awaitRefetchQueries={true}
      >
        {postComment => {
          this.postComment = postComment;
          return (
            <CommentsPresenter
              canDelete={canDelete}
              comment={comment}
              comments={sortBy(comments, ["id"])}
              productSlug={productSlug}
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

  public handleCompleted = (data: addComment) => {
    const {
      CreateComment: { ok, error }
    } = data;
    if (!ok && error) {
      toast.update(this.toastId, {
        render: error,
        type: toast.TYPE.ERROR
      });
    } else {
      this.setState({
        posting: false,
        comment: ""
      });
      toast.update(this.toastId, {
        render: "Comment Created",
        type: toast.TYPE.SUCCESS
      });
    }
  };
}

export default withLogin(Comments);
