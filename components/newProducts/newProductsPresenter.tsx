import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Button from "../button";
import FakeLink from "../fakeLink";
import BigDetailCard from "../bigDetailCard";
import Section from "../section";
import Title from "../title";
import { addedRecently } from "types/api";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const AddButton = styled(Button)`
  margin-left: 30px;
`;

interface IProps {
  data?: addedRecently;
}

const NewProductsPresenter: React.SFC<IProps> = ({ data }) => (
  <Section
    titleElements={[
      <Title key={1}>Products added recently</Title>,
      <Link key={3} href={routes.new}>
        <a>
          <AddButton accent={false} text={"Add yours now"} size={"xs"} />
        </a>
      </Link>,
      <Link key={2} href={routes.products}>
        <a>
          <FakeLink>See more</FakeLink>
        </a>
      </Link>
    ]}
  >
    <Grid>
      {data &&
        data.FilterProducts &&
        data.FilterProducts.products &&
        data.FilterProducts.products.map(
          product =>
            product && (
              <BigDetailCard
                key={product.id}
                isLink={true}
                link={routes.productDetail(`${product.id}`)}
                linkAs={routes.asProductDetail(`${product.id}`)}
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
    </Grid>
  </Section>
);

export default NewProductsPresenter;
