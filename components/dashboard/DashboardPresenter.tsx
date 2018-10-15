import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "../../typed-components";
import Wrapper from "../wrapper";
import Input from "../input";
import Form from "../form/from";
import Select from "../select";
import GoalText from "../goalText";
import Section from "../section";
import Title from "../title";
import Button from "../button";
import routes from "../../routes";
import SmallDetailCard from "../smallDetailCard";
import { getDashboard } from "../../types/api";
import { Consumer } from "../../lib/context";

const Container = styled.div`
  margin: 50px 0px;

  padding: 15vh 0px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr minmax(340px, 1fr);
  grid-gap: 50px;
  & > *:last-child {
    margin-top: 87px;
  }
`;

const Column = styled.div``;

const HTitle = styled.h2`
  font-weight: 600;
  font-size: 38px;
`;

const Subtitle = styled.h3`
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const List = styled.div`
  background-color: white;
  ${props => props.theme.cardShadow};
  padding: 20px 40px;
  border-radius: ${props => props.theme.borderRadius};
`;

const AddContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

const Products = styled.div`
  display: grid;
  grid-gap: 30px;
`;

const Product = styled.option`
  color: ${props => props.theme.blackColor};
`;

const EGoalText = styled(GoalText)`
  margin-bottom: 15px;
`;

const Goals = styled.div``;

const FLink = styled.span`
  color: ${props => props.theme.greyColor};
  text-decoration: underline;
  margin-left: 10px;
`;

interface IProps {
  inputValue: string;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  productId: number;
  loading: boolean;
  data?: getDashboard;
  handleSubmit: () => void;
}

const getTime = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let time = "";
  if (currentHour < 12) {
    time = "morning";
  } else if (currentHour < 18) {
    time = "afternoon";
  } else {
    time = "evening";
  }
  return time;
};

const DashboardPresenter: React.SFC<IProps> = ({
  inputValue,
  handleInputChange,
  productId,
  data,
  handleSubmit
}) => (
  <Container>
    <Head>
      <title>Dashboard | Indie Makers</title>
    </Head>
    <Wrapper>
      <Grid>
        <Column>
          <HTitle>
            Good {getTime()}{" "}
            {data && data.Me && data.Me.user && data.Me.user.firstName}!
          </HTitle>
          <Subtitle>What are you gonna accomplish today?</Subtitle>
          <List>
            <Form onSubmit={handleSubmit}>
              <AddContainer>
                <Input
                  fontSize={"22px"}
                  type={"text"}
                  value={inputValue}
                  name={"newToDo"}
                  onChange={handleInputChange}
                  placeholder={"Type a goal and press 'Enter'"}
                />
                <Select
                  name={"productId"}
                  value={String(productId)}
                  onChange={handleInputChange}
                >
                  <Product value={"none"}>Add to</Product>
                  {data &&
                    data.GetAllProducts &&
                    data.GetAllProducts.products &&
                    data.GetAllProducts.products.map(
                      product =>
                        product && (
                          <Product value={product.id} key={product.id}>
                            {product.name}
                          </Product>
                        )
                    )}
                </Select>
              </AddContainer>
            </Form>
            <Goals>
              {data &&
                data.GetLatestGoals &&
                data.GetLatestGoals.goals &&
                data.GetLatestGoals.goals.map(
                  goal =>
                    goal && (
                      <EGoalText
                        key={goal.id}
                        isMine={true}
                        fontSize={"18px"}
                        productName={(goal.product && goal.product.name) || ""}
                        text={goal.text}
                        timeStamp={goal.createdAt}
                      />
                    )
                )}
            </Goals>
          </List>
        </Column>
        <Consumer>
          {({ userQuery }) => (
            <Section
              titleElements={[
                <Title key={1}>Your products </Title>,
                <Link href={routes.addProduct} key={2}>
                  <a>
                    <Button size={"xs"} text={"Add one"} />
                  </a>
                </Link>,
                <Link
                  href={routes.userDetail(
                    (userQuery &&
                      userQuery.Me &&
                      userQuery.Me.user &&
                      userQuery.Me.user.username) ||
                      ""
                  )}
                  as={routes.asUserDetail(
                    (userQuery &&
                      userQuery.Me &&
                      userQuery.Me.user &&
                      userQuery.Me.user.username) ||
                      ""
                  )}
                  key={3}
                >
                  <a>
                    <FLink>See all</FLink>
                  </a>
                </Link>
              ]}
            >
              <Products>
                {data &&
                  data.GetLatestProducts &&
                  data.GetLatestProducts.products &&
                  data.GetLatestProducts.products.map(
                    product =>
                      product && (
                        <SmallDetailCard
                          key={product.id}
                          icon={product.logo || "/static/demo.jpg"}
                          title={product.name}
                          subtitle={product.description}
                          isLink={true}
                          link={routes.productDetail(product.slug)}
                          linkAs={routes.asProductDetail(product.slug)}
                          isCard={true}
                          lightSubtitle={false}
                          toDoNumber={`${product.completedGoalCount}/${
                            product.goalCount
                          }`}
                        />
                      )
                  )}
              </Products>
            </Section>
          )}
        </Consumer>
      </Grid>
    </Wrapper>
  </Container>
);

export default DashboardPresenter;
