import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Card from "../components/card";
import UserDetail from "../components/userDetail";
import ProductDetail from "../components/product";

const Container = styled.div`
  margin: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
`;

const ProductDetails = styled.div``;

const ToDos = styled.div``;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  margin: 25px 0;
`;

const Product = () => (
  <Wrapper>
    <Head>
      <title>Product Name | Indie Makers</title>
    </Head>
    <Container>
      <ProductDetails>
        <DetailsContainer>
          <ProductDetail href={"#"} />
          <Divider />
          <UserDetail
            avatarURL={"/static/demo.jpg"}
            name={"Nicolás Serrano Arévalo"}
            username={"@serranoarevalo"}
            streak={50}
          />
        </DetailsContainer>
      </ProductDetails>
      <Card>
        <ToDos>lsla</ToDos>
      </Card>
    </Container>
  </Wrapper>
);

export default Product;
