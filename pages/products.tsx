import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Tab from "../components/tab";
import Product from "../components/product";
import Pagination from "../components/pagination";

const Header = styled.header`
  display: flex;
  margin: 50px 0;
  & > div {
    margin-right: 20px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 40px;
  margin-bottom: 60px;
`;

export default () => (
  <Wrapper>
    <Head>
      <title>Products | Indie Makers</title>
    </Head>
    <Header>
      <Tab text={"All"} selected={true} />
      <Tab text={"Launched"} />
      <Tab text={"Need Help"} />
    </Header>
    <ProductGrid>
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
      <Product href={"#"} />
    </ProductGrid>
    <Pagination currentPage={0} totalPages={5} />
  </Wrapper>
);
