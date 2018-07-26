import styled from "../../typed-components";

const Container = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  padding: 40px;
  box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  border: 5px solid ${props => props.theme.darkBlueColor};
  border-radius: 40px;
  display: block;
  margin-bottom: 15px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Pitch = styled.p``;

const Product = () => (
  <Container>
    <Icon src={"static/demo.jpg"} />
    <Title>Great Product</Title>
    <Pitch>The best website</Pitch>
  </Container>
);

export default Product;
