import React from "react";
import Head from "next/head";
import styled from "styled-components";
import CompletedGoals from "../components/completedGoals";
import FeaturedPosts from "../components/featuredPosts";
import FireMakers from "../components/fireMakers";
import Hero from "../components/hero";
import NewProducts from "../components/newProducts";
import Wrapper from "../components/wrapper";
import Dashboard from "../components/dashboard";

const Container = styled.div``;

const IndexColumns = styled.div`
  display: grid;
  grid-template-columns: 3fr minmax(320px, 1fr);
  grid-gap: 50px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const HeroWrapper = styled.div`
  background-color: white;
  padding: 15vh 0px;
  margin-bottom: 10vh;
`;

const Column = styled.div`
  width: 100%;
`;

interface IProps {
  isLoggedIn: boolean;
}

export default class extends React.Component<IProps> {
  render() {
    const { isLoggedIn = false } = this.props;
    return (
      <Container>
        <Head>
          <title>Indie Makers | Build products, together.</title>
          <meta
            name="description"
            content={"Indie Makers: Building beautiful products together!"}
          />
        </Head>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <React.Fragment>
            <HeroWrapper>
              <Wrapper>
                <Hero />
              </Wrapper>
            </HeroWrapper>
            <Wrapper>
              <FeaturedPosts />
            </Wrapper>
          </React.Fragment>
        )}
        <Wrapper>
          <IndexColumns>
            <Column>
              <NewProducts />
              <CompletedGoals />
            </Column>
            <Column>
              <FireMakers />
            </Column>
          </IndexColumns>
        </Wrapper>
      </Container>
    );
  }
}
