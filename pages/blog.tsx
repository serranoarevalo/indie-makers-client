import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import BlogPost from "../components/blogPost";
import routes from "../routes";

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
  background-color: white;
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

const Blog = () => (
  <React.Fragment>
    <Head>
      <title>Blog | Indie Makers</title>
    </Head>
    <Hero>
      <Wrapper>
        <Link href={routes.blogDetail("slug")} as={routes.asBlogDetail("slug")}>
          <a>
            <HeroContainer>
              <FeaturedImage bg={"static/appDemo.png"} />
              <FeaturedContent>
                <FeaturedTitle>Alex's project</FeaturedTitle>
                <FeaturedSubtitle>
                  He made this loved life tony robbins
                </FeaturedSubtitle>
              </FeaturedContent>
            </HeroContainer>
          </a>
        </Link>
      </Wrapper>
    </Hero>
    <Posts>
      <Wrapper>
        <LatestPosts>
          <PostsTitle>Latest Reviews</PostsTitle>
          <LatestPostsGrid>
            <BlogPost featured={true} slug={"stiff"} />
            <BlogPost featured={true} slug={"stiff"} />
            <BlogPost featured={true} slug={"stiff"} />
          </LatestPostsGrid>
        </LatestPosts>
        <PostsTitle>All Reviews</PostsTitle>
        <Grid>
          <BlogPost slug={"stiff"} />
          <BlogPost slug={"stiff"} />
          <BlogPost slug={"stiff"} />
          <BlogPost slug={"stiff"} />
          <BlogPost slug={"stiff"} />
          <BlogPost slug={"stiff"} />
        </Grid>
      </Wrapper>
    </Posts>
  </React.Fragment>
);

export default Blog;
