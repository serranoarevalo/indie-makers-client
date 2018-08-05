import Head from "next/head";
import styled from "../typed-components";
import routes from "../routes";
import Wrapper from "../components/wrapper";
import Card from "../components/card";
import SmallDetailCard from "../components/smallDetailCard";
import BigDetailCard from "../components/bigDetailCard";
import GoalText from "../components/goalText";

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

const Product = () => (
  <Wrapper>
    <Head>
      <title>Product Name | Indie Makers</title>
    </Head>
    <Container>
      <DetailsContainer>
        <BigDetailCard
          isLink={false}
          icon={"/static/demo.jpg"}
          title={"Best Product"}
          showSubtitle={true}
          toDoNumber={"10/30"}
          subtitle={"Gonna make millions with this"}
          hasAuthor={false}
          needsHelp={true}
        />
        <Divider />
        <SmallDetailCard
          icon={"/static/demo.jpg"}
          title={"Nicolás Serrano Arévalo"}
          subtitle={"@serranoarevalo"}
          streakNumber={50}
          isLink={true}
          link={routes.userDetail("@serranoarevalo")}
          linkAs={routes.asUserDetail("@serranoarevalo")}
          isCard={true}
        />
      </DetailsContainer>
      <Card>
        <ToDos>
          <ToDosColumn>
            <Header>
              <Title>Doing</Title>
            </Header>
            <GoalsContainer>
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={false}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
            </GoalsContainer>
            <GoalsFooter />
          </ToDosColumn>
          <ToDosColumn>
            <Header>
              <Title>Done</Title>
            </Header>
            <GoalsContainer>
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
                onProductPage={true}
              />
            </GoalsContainer>
            <GoalsFooter />
          </ToDosColumn>
        </ToDos>
      </Card>
    </Container>
  </Wrapper>
);

export default Product;
