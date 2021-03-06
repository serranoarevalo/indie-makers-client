import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "../../typed-components";
import routes from "../../routes";
import Wrapper from "../../components/wrapper";
import BigDetailCard from "../../components/bigDetailCard";
import SmallDetailCard from "../../components/smallDetailCard";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Card from "../../components/card";
import GoalText from "../../components/goalText";
import { getMaker } from "../../types/api";
import IsMine from "../../lib/isMine";
import Button from "../../components/button";

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 3fr;
  grid-gap: 50px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  &:first-child {
    margin: 50px 0px;
  }
  @media (max-width: 750px) {
    &:first-child {
      margin-bottom: 0px;
    }
  }
`;

const Divider = styled.div`
  margin-bottom: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: 85px;
  grid-gap: 40px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Goals = styled.div`
  width: 100%;
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
  data?: getMaker;
  tab: "PRODUCTS" | "DONE" | "TODO";
}

const MakerPresenter: React.SFC<IProps> = ({
  tab,
  data: { GetMaker: { maker = null } = {} } = {}
}) => (
  <Wrapper>
    <Container>
      <Head>
        <title>
          {maker ? maker.fullName : "Maker Not Found"} | Indie Makers
        </title>
        {maker && (
          <meta
            name="description"
            content={`${
              maker.bio
                ? maker.bio
                : `Follow ${maker.fullName.split(" ")[0]}'s progress.`
            }`}
          />
        )}
      </Head>
      {maker ? (
        <React.Fragment>
          <Column>
            <BigDetailCard
              isLink={false}
              icon={maker.profilePhoto}
              title={maker.fullName}
              showSubtitle={true}
              subtitle={maker.bio || ""}
              hasAuthor={false}
              needsHelp={false}
              streakNumber={maker.streak}
              launchedNumber={maker.launchedProductCount}
              underTitle={maker.username!}
            />

            {maker.homepage && (
              <>
                <Divider />

                <a
                  href={
                    maker.homepage.substring(0, 4) === "http"
                      ? maker.homepage
                      : `http://${maker.homepage}`
                  }
                  target={"_blank"}
                >
                  <Button text={`Contact ${maker.fullName!.split(" ")[0]}`} />
                </a>
              </>
            )}

            <Divider />
            <IsMine otherId={maker.id}>
              {isMine =>
                isMine && (
                  <Link prefetch href={routes.editProfile}>
                    <a>
                      <Button text={`Edit Profile`} />
                    </a>
                  </Link>
                )
              }
            </IsMine>
          </Column>
          <Column>
            <Tabs>
              <Tab
                link={routes.userDetail(maker.username!)}
                linkAs={routes.asUserDetail(maker.username!)}
                text={"Products"}
                selected={tab === "PRODUCTS"}
              />
              <Tab
                link={routes.makerDone(maker.username!)}
                linkAs={routes.asMakerDone(maker.username!)}
                text={"Done"}
                selected={tab === "DONE"}
              />
              <Tab
                link={routes.makerToDo(maker.username!)}
                linkAs={routes.asMakerToDo(maker.username!)}
                text={"To Do"}
                selected={tab === "TODO"}
              />
            </Tabs>
            {tab === "PRODUCTS" && (
              <>
                {maker.products &&
                  maker.products.length === 0 && (
                    <Card>This maker has no products yet!</Card>
                  )}
                <Grid>
                  {maker.products &&
                    maker.products.map(
                      product =>
                        product && (
                          <SmallDetailCard
                            key={product.id}
                            icon={product.logo || ""}
                            title={product.name}
                            subtitle={product.description}
                            isLink={true}
                            link={routes.productDetail(`${product.slug}`)}
                            linkAs={routes.asProductDetail(`${product.slug}`)}
                            isCard={true}
                            lightSubtitle={false}
                          />
                        )
                    )}
                </Grid>
              </>
            )}
            {tab === "DONE" && (
              <Card>
                <Goals>
                  {maker.completedGoals &&
                    maker.completedGoals.map(
                      goal =>
                        goal && (
                          <GoalText
                            key={goal.id}
                            text={goal.text}
                            isCompleted={true}
                            productName={goal.product!.name}
                            productSlug={goal.product!.slug}
                            timeStamp={goal.completedAt!}
                            goalId={goal.id}
                          />
                        )
                    )}
                  {maker.completedGoals &&
                    maker.completedGoals.length === 0 &&
                    `This maker has no completed goals yet!`}
                </Goals>
              </Card>
            )}
            {tab === "TODO" && (
              <Card>
                <Goals>
                  {maker.pendingGoals &&
                    maker.pendingGoals.map(
                      goal =>
                        goal && (
                          <GoalText
                            key={goal.id}
                            text={goal.text}
                            productName={goal.product!.name}
                            productSlug={goal.product!.slug}
                            isCompleted={false}
                            timeStamp={goal.createdAt}
                            goalId={goal.id}
                          />
                        )
                    )}
                  {maker.pendingGoals &&
                    maker.pendingGoals.length === 0 &&
                    `This maker has no pending goals yet!`}
                </Goals>
              </Card>
            )}
          </Column>
        </React.Fragment>
      ) : (
        <h1 className={"thickName"}>This maker does not exist</h1>
      )}
    </Container>
  </Wrapper>
);

export default MakerPresenter;
