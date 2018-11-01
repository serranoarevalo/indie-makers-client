import React from "react";
import LazyLoad from "react-lazyload";
import Link from "next/link";
import Card from "../card";
import RoundImage from "../roundImage";
import styled from "../../typed-components";
import routes from "../../routes";

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

const Comment = styled.div`
  display: flex;
`;

interface IProps {
  text: string;
  createdAt: string;
  profilePhoto: string;
  username: string;
  canDelete: boolean;
  isAuthor: boolean;
  handleDelete: () => void;
}

const CommentPresenter: React.SFC<IProps> = ({
  text,
  profilePhoto,
  username,
  canDelete,
  isAuthor,
  handleDelete
}) => (
  <Container>
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
      {canDelete || (isAuthor && <Button onClick={handleDelete}>❌</Button>)}
    </Actions>
    <Comment>
      <Text>{text}</Text>
      <Button>💬</Button>
    </Comment>
  </Container>
);

export default CommentPresenter;
