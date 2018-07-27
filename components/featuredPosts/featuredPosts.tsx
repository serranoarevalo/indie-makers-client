import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import FakeLink from "../fakeLink";
import Section from "../section";
import Title from "../title";

const FeaturedPosts = () => (
  <Section
    titleElements={[
      <Title key={1}>Products added recently</Title>,
      <Link key={2} href={routes.blog}>
        <a>
          <FakeLink>See all</FakeLink>
        </a>
      </Link>
    ]}
  />
);

export default FeaturedPosts;
