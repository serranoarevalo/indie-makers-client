import Link from "next/link";
import routes from "../../routes";
import Card from "../card";
import Goal from "../goal";
import Section from "../section";
import Title from "../title";
import FakeLink from "../fakeLink";

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
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
    </Card>
  </Section>
);
export default CompletedGoals;
