import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Tab from "../components/tab";
import Product from "../components/product";

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
`;

export default () => (
  <Wrapper>
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
  </Wrapper>
);
