import styled from "../../typed-components";
import Title from "../title";
import Product from "../product";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const newProducts = () => (
  <Container>
    <Title marginBottom={50}>Products added recently</Title>
    <Grid>
      <Product />
      <Product />
      <Product />
    </Grid>
  </Container>
);

export default newProducts;
