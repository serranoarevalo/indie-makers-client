import styled from "../../typed-components";
import Product from "../product";
import Title from "../title";

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: flex-end;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const FakeLink = styled.h4`
  font-size: 20px;
  margin-left: 40px;
  color: ${props => props.theme.greyColor};
  cursor: pointer;
`;

const newProducts = () => (
  <Container>
    <TitleContainer>
      <Title>Products added recently</Title>
      <FakeLink>See all</FakeLink>
    </TitleContainer>
    <Grid>
      <Product />
      <Product />
      <Product />
    </Grid>
  </Container>
);

export default newProducts;
