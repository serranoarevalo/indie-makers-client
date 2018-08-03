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

export default () => (
  <Wrapper>
    <Head>
      <title>Products | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab text={"All"} selected={true} />
      <Tab text={"Launched"} />
      <Tab text={"Need Help"} />
      <Tab text={"Featured"} />
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
