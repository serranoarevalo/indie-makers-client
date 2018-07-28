import Link from "next/link";
import { lighten } from "polished";
import routes from "../../routes";
import styled from "../../typed-components";
import GoalText from "../goalText";
import RoundImage from "../roundImage";

const Container = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid ${props => lighten(0.15, props.theme.greyColor)};
  &:last-child {
    border-bottom: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
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
`;

const CompleteGoal = () => (
  <Container>
    <Header>
      <MakerAvatar src="static/demo.jpg" />
      <Title>
        <Link href={routes.userDetail("serranoarevalo")}>
          <a>Nicolás Serrano Arévalo</a>
        </Link>
      </Title>
    </Header>
    <GoalText
      lineThrough={false}
      isCompleted={true}
      text={"Go to bebek"}
      goalName={"Indie Makers"}
    />
  </Container>
);

export default CompleteGoal;
