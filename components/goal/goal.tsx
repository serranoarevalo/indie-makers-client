import { lighten } from "polished";
import styled from "../../typed-components";
import routes from "../../routes";
import GoalText from "../goalText";
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

const Goal = () => (
  <Container>
    <Header>
      <SmallDetailCard
        icon={"/static/demo.jpg"}
        title={"Nicolás Serrano Arévalo"}
        subtitle={"@serranoarevalo"}
        streakNumber={50}
        launchedNumber={20}
        isLink={true}
        link={routes.userDetail("@serranoarevalo")}
        linkAs={routes.asUserDetail("@serranoarevalo")}
        isCard={false}
      />
    </Header>
    <Section>
      <GoalText
        lineThrough={false}
        isCompleted={true}
        text={"Go to bebek"}
        productName={"Indie Makers"}
      />
    </Section>
  </Container>
);

export default Goal;
