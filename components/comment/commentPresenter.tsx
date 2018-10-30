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
`;

const ARound = styled(RoundImage)`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`;

interface IProps {
  text: string;
  createdAt: string;
  profilePhoto: string;
  username: string;
}

const CommentPresenter: React.SFC<IProps> = ({
  text,
  profilePhoto,
  username
}) => (
  <Container>
    <Link href={routes.userDetail(username)} as={routes.asUserDetail(username)}>
      <a style={{ width: 30, height: 30, marginRight: 20 }}>
        <LazyLoad height={30} once>
          <ARound src={profilePhoto} alt={text} />
        </LazyLoad>
      </a>
    </Link>
    <Text>{text}</Text>
  </Container>
);

export default CommentPresenter;
