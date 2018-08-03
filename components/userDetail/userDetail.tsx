import Link from "next/link";
import PropTypes from "prop-types";
import routes from "../../routes";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";
import Card from "../card";

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
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NameContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  white-space: nowrap;
`;

const UserName = styled.h6`
  color: ${props => props.theme.greyColor};
`;

const Badges = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface IProps {
  avatarURL: string;
  name: string;
  username: string;
  streak: number;
  card?: boolean;
  launched?: number;
}

const UserDetail: React.SFC<IProps> = ({
  avatarURL,
  name,
  username,
  streak,
  launched = 50,
  card = true
}) => {
  if (card) {
    return (
      <Link href={routes.userDetail(username)}>
        <a>
          <Card padding={"15px"}>
            <Container>
              <Column>
                <Avatar src={avatarURL} />
              </Column>
              <Column>
                <NameContainer>
                  <Name>{name}</Name>
                  <Badges>
                    <Badge
                      bgColor={"#FEF48B"}
                      text={streak}
                      icon={"🔥"}
                      title={"Daily streak"}
                    />
                    <span className={"launched"}>
                      <Badge
                        bgColor={"#DBE9F1"}
                        text={launched}
                        icon={"🚀"}
                        title={"Products Finished"}
                      />
                    </span>
                  </Badges>
                </NameContainer>
                <UserName>{username}</UserName>
              </Column>
            </Container>
          </Card>
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={routes.userDetail(username)}>
        <a>
          <Container>
            <Column>
              <Avatar src={avatarURL} />
            </Column>
            <Column>
              <NameContainer>
                <Name>{name}</Name>
                <Badges>
                  <Badge
                    bgColor={"#FEF48B"}
                    text={streak}
                    icon={"🔥"}
                    title={"Daily Streak"}
                  />
                  <span className={"launched"}>
                    <Badge
                      bgColor={"#DBE9F1"}
                      text={launched}
                      icon={"🚀"}
                      title={"Products Finished"}
                    />
                  </span>
                </Badges>
              </NameContainer>
              <UserName>{username}</UserName>
            </Column>
          </Container>
        </a>
      </Link>
    );
  }
};

UserDetail.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  streak: PropTypes.number.isRequired
};

export default UserDetail;
