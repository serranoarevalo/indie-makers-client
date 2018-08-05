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
  align-items: center;
`;

interface IPresenterProps {
  icon: string;
  title: string;
  subtitle: string;
  showSubtitle?: boolean;
  streakNumber?: number;
  launchedNumber?: number;
  toDoNumber?: number;
  needsHelp?: boolean;
}

const DetailContent: React.SFC<IPresenterProps> = ({
  icon,
  title,
  subtitle,
  showSubtitle,
  streakNumber,
  launchedNumber,
  toDoNumber,
  needsHelp
}) => (
  <Container>
    <Column>
      <Avatar src={icon} />
    </Column>
    <Column>
      <NameContainer>
        <Name>{title}</Name>
        <Badges>
          {streakNumber !== undefined && (
            <Badge
              bgColor={"#FEF48B"}
              text={streakNumber}
              icon={"🔥"}
              title={"Daily Streak"}
            />
          )}
          {launchedNumber !== undefined && (
            <Badge
              bgColor={"#DBE9F1"}
              text={launchedNumber}
              icon={"🚀"}
              title={"Products Finished"}
            />
          )}
          {toDoNumber !== undefined && <Badge text={toDoNumber} icon={"✅"} />}
          {needsHelp && <Badge text={""} icon={"⚠️"} />}
        </Badges>
      </NameContainer>
      {showSubtitle && <UserName>{subtitle}</UserName>}
    </Column>
  </Container>
);

interface IContainerProps {
  isLink: boolean;
  link?: string;
  linkAs?: string;
  isCard?: boolean;
}

const SmallDetailContainer: React.SFC<IContainerProps & IPresenterProps> = ({
  isLink,
  link,
  linkAs,
  isCard,
  ...rest
}) => {
  if (isCard) {
    if (isLink) {
      return (
        <Link href={link} as={linkAs}>
          <a>
            <Card padding={"15px"}>
              <DetailContent {...rest} />
            </Card>
          </a>
        </Link>
      );
    } else {
      return (
        <Card padding={"15px"}>
          <DetailContent {...rest} />
        </Card>
      );
    }
  } else {
    if (isLink) {
      return (
        <Link href={link} as={linkAs}>
          <a>
            <DetailContent {...rest} />
          </a>
        </Link>
      );
    } else {
      return <DetailContent {...rest} />;
    }
  }
};

export default SmallDetailContainer;
