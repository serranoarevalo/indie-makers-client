import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Card from "../card";
import Section from "../section";
import Title from "../title";
import FakeLink from "../fakeLink";
import { completedGoals } from "../../types/api";
import GoalFeed from "../goalFeed";

const Goals = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  & > span {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

interface IProps {
  data: completedGoals;
}

const CompletedGoals: React.SFC<IProps> = ({
  data: { FilterGoals: { goals = [] } = {} } = {}
}) =>
  goals && goals.length !== 0 ? (
    <Section
      titleElements={[
        <Title key={1}>Completed Goals</Title>,
        <Link key={2} href={routes.todos}>
          <a>
            <FakeLink key={2}>See more</FakeLink>
          </a>
        </Link>
      ]}
    >
      <Card padding={"0px 20px"}>
        <Goals>
          {goals.map(goal => goal && <GoalFeed key={goal.id} goal={goal} />)}
        </Goals>
      </Card>
    </Section>
  ) : null;
export default CompletedGoals;
