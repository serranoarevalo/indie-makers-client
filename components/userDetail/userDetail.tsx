import Link from "next/link";
import PropTypes from "prop-types";
import routes from "../../routes";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";

const Container = styled.div`
  display: flex;
`;

const Column = styled.div``;

const Avatar = styled(RoundImage)`
  width: 40px;
  border: none;
`;

const Name = styled.h5``;

const NameContainer = styled.div``;

const UserName = styled.h6``;

interface IProps {
  avatarURL: string;
  name: string;
  username: string;
  streak: number;
}

const UserDetail: React.SFC<IProps> = ({
  avatarURL,
  name,
  username,
  streak
}) => (
  <Link href={routes.userDetail(username)}>
    <a>
      <Container>
        <Column>
          <Avatar src={avatarURL} />
        </Column>
        <Column>
          <NameContainer>
            <Name>{name}</Name>
            <Badge bgColor={"#FEF48B"} text={streak} />
          </NameContainer>
          <UserName>{username}</UserName>
        </Column>
      </Container>
    </a>
  </Link>
);

UserDetail.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  streak: PropTypes.number.isRequired
};

export default UserDetail;
