import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Card from "../card";
import Goal from "../goal";
import GoalText from "../goalText";
import Section from "../section";
import Title from "../title";
import FakeLink from "../fakeLink";

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

const CompletedGoals = () => (
  <Section
    titleElements={[
      <Title key={1}>Completed Goals</Title>,
      <Link href={routes.todos}>
        <a>
          <FakeLink key={2}>See more</FakeLink>
        </a>
      </Link>
    ]}
  >
    <Card padding={"0px 20px"}>
      <Goal>
        <Goals>
          <GoalText
            lineThrough={false}
            isCompleted={true}
            text={"Go to bebek"}
            productName={"Indie Makers"}
          />
          <GoalText
            lineThrough={false}
            isCompleted={true}
            text={"Go to bebek"}
            productName={"Indie Makers"}
          />
        </Goals>
      </Goal>
      <Goal>
        <Goals>
          <GoalText
            lineThrough={false}
            isCompleted={true}
            text={"Go to bebek"}
            productName={"Indie Makers"}
          />
        </Goals>
      </Goal>
      <Goal>
        <Goals>
          <GoalText
            lineThrough={false}
            isCompleted={true}
            text={"Go to bebek"}
            productName={"Indie Makers"}
          />
        </Goals>
      </Goal>
      <Goal>
        <Goals>
          <GoalText
            lineThrough={false}
            isCompleted={true}
            text={"Go to bebek"}
            productName={"Indie Makers"}
          />
        </Goals>
      </Goal>
      <Goal>
        <Goals>
          <GoalText
            lineThrough={false}
            isCompleted={true}
            text={"Go to bebek"}
            productName={"Indie Makers"}
          />
        </Goals>
      </Goal>
    </Card>
  </Section>
);
export default CompletedGoals;
