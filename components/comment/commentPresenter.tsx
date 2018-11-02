import React from "react";
import LazyLoad from "react-lazyload";
import Link from "next/link";
import Card from "../card";
import Form from "../form";
import RoundImage from "../roundImage";
import styled from "../../typed-components";
import routes from "../../routes";
import { AddComment } from "../comments/commentsPresenter";
import AButton from "../button";
import Reply from "../comment";
import { getProduct_GetProduct_product_comments_childComments } from "types/api";

const Container = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
`;

const Text = styled(Card)`
  width: 100%;
  margin-right: 20px;
`;

const ARound = styled(RoundImage)`
  height: 30px;
  width: 30px;
  margin-bottom: 20px;
`;

const Actions = styled.div`
  display: flex;
  margin-right: 20px;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

const CommentBtn = styled(Button)`
  margin-right: 25px;
`;

const Comment = styled.div`
  display: flex;
`;

const Column = styled.div``;

const AddText = styled(Text)`
  margin: 25px 0px;
`;

const AddTextContainer = styled.div`
  margin-bottom: 25px;
`;

const Replies = styled.div``;

const Wrapper = styled<{ isReply: boolean }, any>("div")`
  margin-left: ${props => (props.isReply ? "50px" : "0px")};
`;

interface IProps {
  text: string;
  createdAt: string;
  profilePhoto: string;
  username: string;
  canDelete: boolean;
  isAuthor: boolean;
  handleDelete: () => void;
  isReplying: boolean;
  isLoggedIn: boolean;
  reply: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  toggleReply: () => void;
  handleSubmit: () => void;
  replies: getProduct_GetProduct_product_comments_childComments[];
  isReply: boolean;
}

const CommentPresenter: React.SFC<IProps> = ({
  text,
  profilePhoto,
  username,
  canDelete,
  isAuthor,
  handleDelete,
  isReplying,
  isLoggedIn,
  reply,
  handleChange,
  toggleReply,
  handleSubmit,
  replies,
  isReply
}) => (
  <Wrapper isReply={isReply}>
    <Container>
      <Column>
        <Actions>
          <Link
            href={routes.userDetail(username)}
            as={routes.asUserDetail(username)}
          >
            <a style={{ width: 30, height: 30, marginBottom: 20 }}>
              <LazyLoad height={30} once>
                <ARound src={profilePhoto} alt={text} />
              </LazyLoad>
            </a>
          </Link>
          {canDelete ||
            (isAuthor && <Button onClick={handleDelete}>❌</Button>)}
        </Actions>
      </Column>
      <Column>
        <Comment>
          <Text>{text}</Text>
          {isLoggedIn &&
            !isReply && <CommentBtn onClick={toggleReply}>💬</CommentBtn>}
        </Comment>
        {isReplying && (
          <AddTextContainer>
            <AddText>
              <Form onSubmit={handleSubmit}>
                <AddComment
                  value={reply}
                  onChange={handleChange}
                  placeholder={"Reply..."}
                  autofocus={true}
                />
              </Form>
            </AddText>
            <AButton text={"Post reply"} onClick={handleSubmit} />
          </AddTextContainer>
        )}
      </Column>
    </Container>
    <Replies>
      {replies &&
        replies.map(comment => (
          <Reply
            key={comment.id}
            text={comment.text}
            createdAt={comment.createdAt}
            id={comment.id}
            profilePhoto={comment.maker.profilePhoto}
            username={comment.maker.username}
            canDelete={canDelete || isAuthor}
            makerId={comment.maker.id}
            productSlug={""}
            isLoggedIn={isLoggedIn}
            replies={[]}
            isReply={true}
          />
        ))}
    </Replies>
  </Wrapper>
);

export default CommentPresenter;
