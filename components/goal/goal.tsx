import Link from "next/link";
import { lighten } from "polished";
import routes from "../../routes";
import styled from "../../typed-components";
import GoalText from "../goalText";
import RoundImage from "../roundImage";
import UserDetail from "../userDetail";

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

const MakerAvatar = styled(RoundImage)`
  width: 25px;
  margin-right: 10px;
`;

const Title = styled.h5`
  font-weight: 600;
  font-size: 16px;
  margin-right: 10px;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: ${props => props.theme.greyColor};
  margin-left: 10px;
`;

const Section = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Goal = () => (
  <Container>
    <Header>
      <UserDetail
        avatarURL={"/static/demo.jpg"}
        name={"Nicolás Serrano Arévalo"}
        username={"@serranoarevalo"}
        streak={50}
      />
    </Header>
    <Section>
      <GoalText
        lineThrough={false}
        isCompleted={true}
        text={"Go to bebek"}
        goalName={"Indie Makers"}
      />
      <Timestamp>25 minutes ago</Timestamp>
    </Section>
  </Container>
);

export default Goal;
