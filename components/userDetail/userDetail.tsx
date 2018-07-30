import Link from "next/link";
import PropTypes from "prop-types";
import routes from "../../routes";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 48px 2fr;
  grid-gap: 10px;
  place-items: center center;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  &:first-child {
    width: 40px;
    height: 40px;
  }
`;

const Avatar = styled(RoundImage)`
  height: 100%;
  width: 100%;
`;

const Name = styled.h5`
  font-size: 18px;
  text-overflow: ellipsis;
  padding-right: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  white-space: nowrap;
`;

const UserName = styled.h6`
  color: ${props => props.theme.greyColor};
`;

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
            <Badge bgColor={"#FEF48B"} text={streak} icon={"🔥"} />
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
