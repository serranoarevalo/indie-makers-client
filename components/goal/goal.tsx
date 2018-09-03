import { lighten } from "polished";
import styled from "../../typed-components";
import routes from "../../routes";
import SmallDetailCard from "../smallDetailCard";

const Container = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid ${props => lighten(0.15, props.theme.greyColor)};
  &:last-child {
    border-bottom: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  & ~ * {
    margin-left: 6px;
    & .em {
      margin-right: 5px;
    }
  }
`;

const Section = styled.div``;

interface IProps {
  maker: any;
  children: any;
}

const Goal: React.SFC<IProps> = ({ maker, children }) => (
  <Container>
    <Header>
      <SmallDetailCard
        icon={maker.profilePhoto}
        title={maker.fullName}
        subtitle={maker.username}
        streakNumber={maker.streak}
        launchedNumber={maker.launchedProductCount}
        isLink={true}
        link={routes.userDetail(maker.username)}
        linkAs={routes.asUserDetail(maker.username)}
        isCard={false}
      />
    </Header>
    <Section>{children}</Section>
  </Container>
);

export default Goal;
