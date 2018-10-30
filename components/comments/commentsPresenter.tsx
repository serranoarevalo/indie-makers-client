import React from "react";
import TextArea from "react-textarea-autosize";
import styled from "../../typed-components";
import Title from "../title";
import Comment from "../comment";
import Card from "../card";
import Form from "../form";
import Button from "../button";
import { getProduct_GetProduct_product_comments } from "types/api";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

const STitle = styled(Title)`
  align-self: flex-start;
  margin-bottom: 30px;
`;

const SCard = styled(Card)`
  margin-bottom: 25px;
`;

const AddCommentForm = styled(Form)`
  width: 100%;
  max-width: 400px;
  margin-bottom: 50px;
`;

const AddComment = styled(TextArea)`
  all: unset;
  width: 100%;
  font-size: 16px;
`;

const Comments = styled.div`
  width: 100%;
  max-width: 400px;
`;

interface IProps {
  comment: string;
  fbLogin: any;
  isLoggedIn: boolean;
  handleComment: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  comments: getProduct_GetProduct_product_comments[];
  posting: boolean;
  sendComment: () => void;
}

const CommentsPresenter: React.SFC<IProps> = ({
  comment,
  fbLogin,
  isLoggedIn,
  posting,
  handleComment,
  comments,
  sendComment
}) => (
  <Container>
    <STitle>Comments {comments.length > 1 && `(${comments.length})`}</STitle>
    <AddCommentForm onSubmit={isLoggedIn ? sendComment : null}>
      <SCard>
        <AddComment
          value={comment}
          onChange={handleComment}
          placeholder={"Leave a comment..."}
        />
      </SCard>
      <Button
        text={
          isLoggedIn
            ? posting
              ? "Posting..."
              : "Post Comment"
            : "Log in to Comment"
        }
        onClick={isLoggedIn ? sendComment : fbLogin}
      />
    </AddCommentForm>
    <Comments>
      {comments.map(
        comment =>
          comment && (
            <Comment
              key={comment.id}
              text={comment.text}
              id={comment.id}
              profilePhoto={comment.maker.profilePhoto}
              createdAt={comment.createdAt}
              username={comment.maker.username || ""}
            />
          )
      )}
    </Comments>
  </Container>
);

export default CommentsPresenter;
