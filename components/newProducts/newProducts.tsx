import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import FakeLink from "../fakeLink";
import Product from "../product";
import Section from "../section";
import Title from "../title";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const newProducts = () => (
  <Section
    titleElements={[
      <Title key={1}>Products added recently</Title>,
      <Link key={2} href={routes.products}>
        <a>
          <FakeLink>See more</FakeLink>
        </a>
      </Link>
    ]}
  >
    <Grid>
      <Product />
      <Product />
      <Product />
    </Grid>
  </Section>
);

export default newProducts;
