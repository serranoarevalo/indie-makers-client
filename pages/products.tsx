import React from "react";
import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Tabs from "../components/tabs";
import Tab from "../components/tab";
import BigDetailCard from "../components/bigDetailCard";
import Pagination from "../components/pagination";
import routes from "../routes";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 40px;
  margin-bottom: 60px;
`;

interface IProps {
  tab?: "launched" | "help" | "featured";
}

class Products extends React.Component<IProps> {
  static getInitialProps(props) {
    const { query } = props;
    const { tab } = query;
    return { tab };
  }
  render() {
    const { tab } = this.props;
    return (
      <Wrapper>
        <Head>
          <title>Products | Indie Makers</title>
        </Head>
        <Tabs>
          <Tab
            link={routes.products}
            text={"Updated"}
            selected={tab === undefined}
          />
          <Tab
            link={routes.productsLaunched}
            linkAs={routes.asProductsLaunched}
            text={"Launched"}
            selected={tab === "launched"}
          />
          <Tab
            link={routes.productsHelp}
            linkAs={routes.asProductsHelp}
            text={"Need Help"}
            selected={tab === "help"}
          />
          <Tab
            link={routes.productsFeatured}
            linkAs={routes.asProductsFeatured}
            text={"Featured"}
            selected={tab === "featured"}
          />
        </Tabs>
        <ProductGrid>
          <BigDetailCard
            isLink={true}
            link={routes.productDetail("something")}
            linkAs={routes.asProductDetail("something")}
            icon={"/static/demo.jpg"}
            authorAvatar={"/static/demo.jpg"}
            title={"Best Product"}
            showSubtitle={true}
            toDoNumber={"10/30"}
            subtitle={"Gonna make millions with this"}
            hasAuthor={true}
            needsHelp={true}
          />
        </ProductGrid>
        <Pagination currentPage={0} totalPages={5} />
      </Wrapper>
    );
  }
}

export default Products;
