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
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

interface IProps {
  tab?: "NEW" | "UPDATED" | "LAUNCHED" | "HELP" | "FEATURED";
  data?: filterProducts;
  page: number;
}

const ProductsPresenter: React.SFC<IProps> = ({
  tab = "UPDATED",
  page,
  data: { FilterProducts: { products = [], totalPages = 0 } = {} } = {}
}) => (
  <Wrapper>
    <Head>
      <title>Products | Indie Makers</title>
      <meta
        name="description"
        content={`See all the awesome products being built on Indie Makers`}
      />
    </Head>
    <Tabs>
      <Tab
        link={routes.products}
        text={"Updated"}
        selected={tab === "UPDATED"}
      />
      <Tab
        link={routes.productsFn(0, "LAUNCHED")}
        linkAs={routes.asProductsFn(0, "LAUNCHED")}
        text={"Launched"}
        selected={tab === "LAUNCHED"}
      />
      <Tab
        link={routes.productsFn(0, "HELP")}
        linkAs={routes.asProductsFn(0, "HELP")}
        text={"Need Help"}
        selected={tab === "HELP"}
      />
      <Tab
        link={routes.productsFn(0, "FEATURED")}
        linkAs={routes.asProductsFn(0, "FEATURED")}
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
                key={product.id}
                isLink={true}
                link={routes.productDetail(`${product.slug}`)}
                linkAs={routes.asProductDetail(`${product.slug}`)}
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
          hasNext={page < totalPages}
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

export default ProductsPresenter;
