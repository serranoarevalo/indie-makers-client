import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "../../typed-components";
import routes from "../../routes";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import SmallDetailCard from "../../components/smallDetailCard";
import BigDetailCard from "../../components/bigDetailCard";
import GoalText from "../../components/goalText";
import Button from "../../components/button";
import AddToDo from "../../components/addToDo";
import { getProduct } from "types/api";
import IsMine from "../../lib/isMine";

const Container = styled.div`
  margin: 50px 0px;
  display: grid;
  grid-template-columns: 320px 3fr;
  grid-gap: 50px;
`;

const ToDos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > a {
    width: 100%;
    display: block;
  }
`;

const Divider = styled.div`
  margin: 25px 0;
`;

const ToDosColumn = styled.div`
  height: 100%;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const Header = styled.div`
  text-align: center;
  padding-bottom: 10px;
  box-shadow: 0px 10px 10px -5px rgba(219, 233, 241, 0.8);
`;

const GoalsContainer = styled.div`
  padding: 20px 10px;
  display: grid;
  grid-auto-rows: 40px;
  height: 60vh;
  max-height: 60vh;
  overflow: scroll;
`;

const GoalsFooter = styled.div`
  box-shadow: 0px -10px 10px -5px rgba(219, 233, 241, 0.8);
  height: 20px;
  width: 100%;
`;

const LinkBtn = styled(Button)`
  width: 100%;
  display: block;
`;

interface IProps {
  data?: getProduct;
}

const ProductPresenter: React.SFC<IProps> = ({
  data: { GetProduct: { product = null } = {} } = {}
}) => (
  <Wrapper>
    <Head>
      <title>
        {product ? product.name : "Product Not Found"} | Indie Makers
      </title>
    </Head>
    <Container>
      {product ? (
        <IsMine otherId={product.maker && product.maker.id}>
          {isMine => (
            <>
              <DetailsContainer>
                <BigDetailCard
                  isLink={false}
                  icon={product.logo || ""}
                  title={product.name}
                  showSubtitle={true}
                  toDoNumber={`${product.completedGoalCount}/${
                    product.goalCount
                  }`}
                  subtitle={product.description}
                  hasAuthor={false}
                  needsHelp={product.needsHelp}
                />
                <Divider />

                {isMine && (
                  <>
                    <AddToDo productId={product.id} slug={product.slug} />
                    <Divider />
                    <Link
                      href={routes.editProduct(product.slug)}
                      as={routes.asEditProduct(product.slug)}
                    >
                      <a>
                        <Button text={"Edit Product"} />
                      </a>
                    </Link>
                    <Divider />
                  </>
                )}

                {product.website && (
                  <>
                    <a href={product.website} target={"_blank"}>
                      <LinkBtn accent={false} text={"Visit Website"} />
                    </a>
                    <Divider />
                  </>
                )}
                {product.maker && (
                  <SmallDetailCard
                    icon={product.maker.profilePhoto}
                    title={product.maker.fullName}
                    subtitle={product.maker.username || ""}
                    streakNumber={product.maker.streak}
                    isLink={true}
                    link={routes.userDetail(product.maker.username || "")}
                    linkAs={routes.asUserDetail(product.maker.username || "")}
                    isCard={true}
                  />
                )}
              </DetailsContainer>
              <Card>
                <ToDos>
                  <ToDosColumn>
                    <Header>
                      <Title>Doing</Title>
                    </Header>
                    <GoalsContainer>
                      {product.pendingGoals &&
                        product.pendingGoals.map(
                          goal =>
                            goal && (
                              <GoalText
                                key={goal.id}
                                lineThrough={false}
                                isCompleted={goal.isCompleted}
                                text={goal.text}
                                onProductPage={true}
                                timeStamp={goal.createdAt}
                                isMine={isMine}
                                goalId={goal.id}
                                productSlug={
                                  (goal.product && goal.product.slug) || ""
                                }
                              />
                            )
                        )}
                    </GoalsContainer>
                    <GoalsFooter />
                  </ToDosColumn>
                  <ToDosColumn>
                    <Header>
                      <Title>Done</Title>
                    </Header>
                    <GoalsContainer>
                      {product.completedGoals &&
                        product.completedGoals.map(
                          goal =>
                            goal && (
                              <GoalText
                                key={goal.id}
                                goalId={goal.id}
                                lineThrough={false}
                                isCompleted={goal.isCompleted}
                                text={goal.text}
                                timeStamp={goal.completedAt!}
                                onProductPage={true}
                                isMine={isMine}
                                productSlug={
                                  (goal.product && goal.product.slug) || ""
                                }
                              />
                            )
                        )}
                    </GoalsContainer>
                    <GoalsFooter />
                  </ToDosColumn>
                </ToDos>
              </Card>
            </>
          )}
        </IsMine>
      ) : (
        <h1 className={"thickText"}>This product does not exist.</h1>
      )}
    </Container>
  </Wrapper>
);

export default ProductPresenter;
