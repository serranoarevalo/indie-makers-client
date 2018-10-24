import React from "react";
import Link from "next/link";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";
import ImagePlaceholder from "../imagePlaceholder";

const Span = styled.span``;

const Container = styled<{ isLink: boolean }, any>("div")`
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  ${props => props.theme.cardShadow};
  background-color: white;
  cursor: ${props => (props.isLink ? "pointer" : "default")};
  width: 100%;
  & ${Span} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 15px;
`;

const Icon = styled(RoundImage)`
  height: 80px;
  display: block;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Pitch = styled.p``;

const Badges = styled.div`
  width: 100%;
  display: flex;
`;

const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Maker = styled(RoundImage)`
  height: 30px;
  width: 30px;
  border: 0;
`;

const Small = styled.span`
  color: ${props => props.theme.greyColor};
  margin-bottom: 20px;
`;

interface IPresenterProps {
  icon: string;
  title: string;
  subtitle: string;
  showSubtitle: boolean;
  hasAuthor: boolean;
  authorAvatar?: string;
  streakNumber?: number;
  launchedNumber?: number;
  toDoNumber?: string;
  needsHelp?: boolean;
  authorUsername?: string;
  isFinished?: boolean;
  underTitle?: string;
}

const CardContent: React.SFC<IPresenterProps> = ({
  icon,
  title,
  subtitle,
  showSubtitle,
  hasAuthor,
  authorAvatar,
  needsHelp,
  streakNumber,
  toDoNumber,
  launchedNumber,
  isFinished,
  underTitle
}) => (
  <React.Fragment>
    <IconContainer>
      {icon ? (
        <Icon src={icon} />
      ) : (
        <ImagePlaceholder letter={title[0]} size={80} />
      )}
    </IconContainer>
    <Title>{title}</Title>
    {underTitle && <Small>{underTitle}</Small>}
    {showSubtitle && <Pitch>{subtitle}</Pitch>}
    <Footer>
      <Badges>
        <React.Fragment>
          {!isFinished &&
            toDoNumber !== undefined && <Badge text={toDoNumber} icon={"✅"} />}
          {isFinished && <Badge text={"Finished"} icon={"🚀"} />}
          {!isFinished &&
            needsHelp && <Badge text={"Need Help!"} icon={"⚠️"} />}
        </React.Fragment>
        <React.Fragment>
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
        </React.Fragment>
      </Badges>
      {hasAuthor && <Maker src={authorAvatar!} />}
    </Footer>
  </React.Fragment>
);

interface IContainerProps {
  isLink: boolean;
  link?: string;
  linkAs?: string;
}

const BigDetailCardContainer: React.SFC<IContainerProps & IPresenterProps> = ({
  isLink,
  link,
  linkAs,
  ...rest
}) => {
  if (!isLink) {
    return (
      <Container isLink={isLink}>
        <Span>
          <CardContent {...rest} />
        </Span>
      </Container>
    );
  } else {
    return (
      <Container isLink={isLink}>
        <Link prefetch href={link} as={linkAs}>
          <a>
            <Span>
              <CardContent {...rest} />
            </Span>
          </a>
        </Link>
      </Container>
    );
  }
};

export default BigDetailCardContainer;
