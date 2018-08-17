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
  product: string;
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
  product
}) => (
  <Container>
    <Head>
      <title>Dashboard | Indie Makers</title>
    </Head>
    <Wrapper>
      <Grid>
        <Column>
          <HTitle>Good {getTime()} Nicolas!</HTitle>
          <Subtitle>What are you gonna accomplish today?</Subtitle>
          <List>
            <Form>
              <AddContainer>
                <Input
                  fontSize={"22px"}
                  type={"text"}
                  value={inputValue}
                  name={"newToDo"}
                  onChange={handleInputChange}
                  placeholder={"Type a goal"}
                />
                <Select
                  name={"product"}
                  value={product}
                  onChange={handleInputChange}
                >
                  <Product value={"none"}>Add to</Product>
                  <Product value={"indie"}>Indie Makers</Product>
                </Select>
              </AddContainer>
            </Form>
            <Goals>
              <EGoalText
                isMine={true}
                fontSize={"18px"}
                productName={"Indie Makers"}
                text={"Go to pakistani restaurant"}
              />
              <EGoalText
                isMine={true}
                fontSize={"18px"}
                productName={"Indie Makers"}
                text={"Go to pakistani restaurant"}
              />
            </Goals>
          </List>
        </Column>
        <Section
          titleElements={[
            <Title key={1}>Your products </Title>,
            <Link href={routes.addProduct} key={2}>
              <a>
                <Button size={"xs"} text={"Add one"} />
              </a>
            </Link>,
            <Link
              href={routes.userDetail("serranoarevalo")}
              as={routes.asUserDetail("serranoarevalo")}
              key={2}
            >
              <a>
                <FLink>See all</FLink>
              </a>
            </Link>
          ]}
        >
          <Products>
            <SmallDetailCard
              icon={"/static/demo.jpg"}
              title={"Best project ever"}
              subtitle={
                "Use this life changing product when you're on the toilet"
              }
              isLink={true}
              link={routes.productDetail("indie-makers")}
              linkAs={routes.asProductDetail("indie-makers")}
              isCard={true}
              lightSubtitle={false}
            />
            <SmallDetailCard
              icon={"/static/demo.jpg"}
              title={"Best project ever"}
              subtitle={
                "Use this life changing product when you're on the toilet"
              }
              isLink={true}
              link={routes.productDetail("indie-makers")}
              linkAs={routes.asProductDetail("indie-makers")}
              isCard={true}
              lightSubtitle={false}
            />
          </Products>
        </Section>
      </Grid>
    </Wrapper>
  </Container>
);

export default DashboardPresenter;
