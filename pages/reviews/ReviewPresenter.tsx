import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import BlogPost from "../../components/blogPost";
import routes from "../../routes";
import { getBlog } from "types/blog";

const Hero = styled.div`
  padding: 50px 0px;
  margin-bottom: 25px;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const FeaturedImage = styled<{ bg: string }, "div">("div")`
  ${props => props.theme.cardShadow};
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  min-height: 60vh;
`;

const FeaturedContent = styled.div`
  justify-self: center;
`;

const FeaturedTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
`;

const FeaturedSubtitle = styled.p``;

const Posts = styled.div`
  padding: 50px 0px;
  padding-bottom: 20vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
  grid-gap: 30px;
`;

const PostsTitle = styled.h5`
  font-size: 26px;
  margin-bottom: 25px;
`;

const LatestPosts = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const LatestPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

interface IProps {
  data: getBlog;
}

const ReviewPresenter: React.SFC<IProps> = ({
  data: { posts = [], featured = [] }
}) => (
  <React.Fragment>
    <Head>
      <title>Blog | Indie Makers</title>
    </Head>
    <Hero>
      <Wrapper>
        {featured && (
          <Link
            href={routes.blogDetail(featured[0]!.slug)}
            as={routes.asBlogDetail(featured[0]!.slug)}
          >
            <a>
              <HeroContainer>
                <FeaturedImage bg={featured[0]!.heroImage!.url} />
                <FeaturedContent>
                  <FeaturedTitle>{featured[0]!.name}</FeaturedTitle>
                  <FeaturedSubtitle>{featured[0]!.intro}</FeaturedSubtitle>
                </FeaturedContent>
              </HeroContainer>
            </a>
          </Link>
        )}
      </Wrapper>
    </Hero>

    <Posts>
      <Wrapper>
        {featured.length > 1 && (
          <LatestPosts>
            <PostsTitle>Latest Reviews</PostsTitle>
            <LatestPostsGrid>
              {featured.map((post, index) => {
                if (index < 1) return;
                return (
                  post && (
                    <BlogPost
                      key={post.id}
                      featured={true}
                      slug={post.slug}
                      name={post.name}
                      intro={post.intro}
                      featuredImage={post.heroImage!.url}
                    />
                  )
                );
              })}
            </LatestPostsGrid>
          </LatestPosts>
        )}
        {posts.length > 0 && (
          <React.Fragment>
            <PostsTitle>All Reviews</PostsTitle>
            <Grid>
              {posts &&
                posts.map(
                  post =>
                    post && (
                      <BlogPost
                        key={post.id}
                        slug={post.slug}
                        name={post.name}
                        intro={post.intro}
                        logo={post.logo!.url}
                      />
                    )
                )}
            </Grid>
          </React.Fragment>
        )}
      </Wrapper>
    </Posts>
  </React.Fragment>
);

export default ReviewPresenter;
