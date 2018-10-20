import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import BlogPost from "../blogPost";
import FakeLink from "../fakeLink";
import Section from "../section";
import Title from "../title";
import { Query } from "react-apollo";
import {
  GET_FEATURED_POST,
  GET_LATEST_THREE
} from "./featuredPostsQueries.blog";
import { GRAPHQLCMS_URL } from "../../configs";
import { getFeatured, getLatest } from "types/blog";

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr minmax(340px, 1fr);
  grid-auto-rows: 525px;
  grid-gap: 50px;
`;

const GridColumn = styled.div``;

const PostsColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
`;

class FeaturedQuery extends Query<getFeatured> {}
class LatestQuery extends Query<getLatest> {}

const FeaturedPosts = () => (
  <Section
    titleElements={[
      <Title key={1}>Launched Products</Title>,
      <Link key={2} href={routes.blog}>
        <a>
          <FakeLink>See more</FakeLink>
        </a>
      </Link>
    ]}
  >
    <PostGrid>
      <GridColumn>
        <FeaturedQuery
          query={GET_FEATURED_POST}
          context={{
            uri: GRAPHQLCMS_URL,
            credentials: "omit"
          }}
        >
          {({ data, loading }) => {
            if (!loading && data && data.productReviews) {
              const { heroImage, intro, name, slug } = data!.productReviews[0]!;
              return (
                <BlogPost
                  slug={slug}
                  featuredImage={heroImage!.url}
                  intro={intro || ""}
                  name={name}
                  featured={true}
                />
              );
            }
            return null;
          }}
        </FeaturedQuery>
      </GridColumn>
      <LatestQuery
        query={GET_LATEST_THREE}
        context={{
          uri: GRAPHQLCMS_URL,
          credentials: "omit"
        }}
      >
        {({ data, loading }) => {
          if (!loading && data && data.productReviews) {
            const { productReviews } = data;
            return (
              <PostsColumn>
                {productReviews &&
                  productReviews.map(
                    review =>
                      review && (
                        <BlogPost
                          key={review.id}
                          slug={review.slug}
                          name={review.name}
                          intro={review.intro || ""}
                          logo={review.logo!.url}
                        />
                      )
                  )}
              </PostsColumn>
            );
          }
          return null;
        }}
      </LatestQuery>
    </PostGrid>
  </Section>
);

export default FeaturedPosts;
