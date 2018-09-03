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
  page: number;
}

const ProductPresenter: React.SFC<IProps> = ({
  tab = "UPDATED",
  page,
  data: { FilterProducts: { products = [], totalPages = 0 } = {} } = {}
}) => (
  <Wrapper>
    <Head>
      <title>Products | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab
        link={routes.products}
        text={"Updated"}
        selected={tab === "UPDATED"}
      />
      <Tab
        link={routes.productsFn(page, "LAUNCHED")}
        linkAs={routes.asProductsFn(page, "LAUNCHED")}
        text={"Launched"}
        selected={tab === "LAUNCHED"}
      />
      <Tab
        link={routes.productsFn(page, "HELP")}
        linkAs={routes.asProductsFn(page, "HELP")}
        text={"Need Help"}
        selected={tab === "HELP"}
      />
      <Tab
        link={routes.productsFn(page, "FEATURED")}
        linkAs={routes.asProductsFn(page, "FEATURED")}
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
      {products &&
        products.length === 0 && (
          <h1 className={"thickText"}>There are no products to show now.</h1>
        )}
    </ProductGrid>
    {products &&
      products.length !== 0 && (
        <Pagination
          hasNext={page > totalPages}
          currentPage={`${page + 1}`}
          totalPages={`${totalPages + 1}`}
          previousLink={routes.productsFn(page - 1, tab)}
          nextLink={routes.productsFn(page + 1, tab)}
          asPreviousLink={routes.asProductsFn(page - 1, tab)}
          asNextLink={routes.asProductsFn(page + 1, tab)}
          hasPrevious={page !== 0}
        />
      )}
  </Wrapper>
);

export default ProductPresenter;
