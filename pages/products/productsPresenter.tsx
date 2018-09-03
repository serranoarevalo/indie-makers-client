import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import BigDetailCard from "../../components/bigDetailCard";
import Pagination from "../../components/pagination";
import routes from "../../routes";
import { filterProducts } from "types/api";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 40px;
  margin-bottom: 60px;
`;

interface IProps {
  tab?: "NEW" | "UPDATED" | "LAUNCHED" | "HELP" | "FEATURED";
  data?: filterProducts;
}

const ProductPresenter: React.SFC<IProps> = ({
  tab = "NEW",
  data: { FilterProducts: { products = [] } = {} } = {}
}) => (
  <Wrapper>
    <Head>
      <title>Products | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab link={routes.products} text={"Updated"} selected={tab === "NEW"} />
      <Tab
        link={routes.productsLaunched}
        linkAs={routes.asProductsLaunched}
        text={"Launched"}
        selected={tab === "LAUNCHED"}
      />
      <Tab
        link={routes.productsHelp}
        linkAs={routes.asProductsHelp}
        text={"Need Help"}
        selected={tab === "HELP"}
      />
      <Tab
        link={routes.productsFeatured}
        linkAs={routes.asProductsFeatured}
        text={"Featured"}
        selected={tab === "FEATURED"}
      />
    </Tabs>
    <ProductGrid>
      {products &&
        products.map(
          product =>
            product && (
              <BigDetailCard
                isLink={true}
                link={routes.productDetail(product.name)}
                linkAs={routes.asProductDetail(product.name)}
                icon={product.logo || ""}
                authorAvatar={product.maker!.profilePhoto}
                title={product.name}
                showSubtitle={true}
                toDoNumber={`${product.completedGoalCount}/${
                  product.goalCount
                }`}
                subtitle={product.description}
                hasAuthor={true}
                needsHelp={product.needsHelp}
              />
            )
        )}
    </ProductGrid>
    <Pagination currentPage={0} totalPages={5} />
  </Wrapper>
);

export default ProductPresenter;
