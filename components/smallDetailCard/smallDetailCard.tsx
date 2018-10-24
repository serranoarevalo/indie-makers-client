import Link from "next/link";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";
import Card from "../card";
import ImagePlaceholder from "../imagePlaceholder";

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
  height: 40px;
  width: 40px;
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
  margin-bottom: 5px;
`;

const UserName = styled<{ light: boolean }, any>("h6")`
  color: ${props =>
    props.light ? props.theme.greyColor : props.theme.blackColor};
`;

const Badges = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface IPresenterProps {
  icon?: string;
  title: string;
  subtitle?: string;
  streakNumber?: number;
  launchedNumber?: number;
  toDoNumber?: string;
  needsHelp?: boolean;
  lightSubtitle?: boolean;
  className?: string;
}

const DetailContent: React.SFC<IPresenterProps> = ({
  icon,
  title,
  subtitle,
  streakNumber,
  launchedNumber,
  toDoNumber,
  needsHelp,
  className,
  lightSubtitle = true
}) => (
  <Container className={className}>
    <Column>
      {icon ? (
        <Avatar src={icon} />
      ) : (
        <ImagePlaceholder size={40} letter={title[0]} />
      )}
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
              title={"To Dos Completed"}
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
          {needsHelp && <Badge text={"Needs help"} icon={"⚠️"} />}
        </Badges>
      </NameContainer>
      {subtitle && (
        <UserName light={lightSubtitle}>
          {subtitle.length > 50 ? `${subtitle.substring(0, 50)}...` : subtitle}
        </UserName>
      )}
    </Column>
  </Container>
);

interface IContainerProps {
  isLink: boolean;
  isCard: boolean;
  link?: string;
  linkAs?: string;
  className?: string;
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
        <Link prefetch href={link} as={linkAs}>
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
        <Link prefetch href={link} as={linkAs}>
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
