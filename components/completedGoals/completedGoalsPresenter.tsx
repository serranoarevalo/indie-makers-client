import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Card from "../card";
import Goal from "../goal";
import GoalText from "../goalText";
import Section from "../section";
import Title from "../title";
import FakeLink from "../fakeLink";
import { completedGoals } from "../../types/api";

const Goals = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

interface IProps {
  data?: completedGoals;
}

const CompletedGoals: React.SFC<IProps> = ({
  data: { FilterGoals: { makers = [] } = {} } = {}
}) => (
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
      {makers &&
        makers.map(
          maker =>
            maker && (
              <Goal maker={maker} key={maker.id}>
                <Goals>
                  {maker.goals &&
                    maker.goals.map(
                      goal =>
                        goal && (
                          <GoalText
                            key={goal.id}
                            lineThrough={false}
                            isCompleted={goal.isCompleted}
                            text={goal.text}
                            productName={goal.product!.name}
                            timeStamp={goal.completedAt || ""}
                          />
                        )
                    )}
                </Goals>
              </Goal>
            )
        )}
    </Card>
  </Section>
);
export default CompletedGoals;
