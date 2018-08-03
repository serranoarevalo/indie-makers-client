import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Button from "../button";
import FakeLink from "../fakeLink";
import BigDetailCard from "../bigDetailCard";
import Section from "../section";
import Title from "../title";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const AddButton = styled(Button)`
  margin-left: 30px;
`;

const newProducts = () => (
  <Section
    titleElements={[
      <Title key={1}>Products added recently</Title>,
      <Link key={3} href={routes.new}>
        <a>
          <AddButton accent={false} text={"Add yours now"} size={"xs"} />
        </a>
      </Link>,
      <Link key={2} href={routes.products}>
        <a>
          <FakeLink>See more</FakeLink>
        </a>
      </Link>
    ]}
  >
    <Grid>
      <BigDetailCard
        isLink={true}
        link={routes.productDetail("something")}
        linkAs={routes.asProductDetail("something")}
        icon={"/static/demo.jpg"}
        authorAvatar={"/static/demo.jpg"}
        title={"Best Product"}
        showSubtitle={true}
        toDoNumber={"10/30"}
        subtitle={"Gonna make millions with this"}
        hasAuthor={true}
        needsHelp={true}
      />
    </Grid>
  </Section>
);

export default newProducts;
