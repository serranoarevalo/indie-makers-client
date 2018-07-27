import Link from "next/link";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";

const Container = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  padding: 40px;
  ${props => props.theme.cardShadow};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled(RoundImage)`
  height: 80px;
  display: block;
  margin-bottom: 15px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Pitch = styled.p``;

const Badges = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

interface IProps {
  href: string;
}

const Product: React.SFC<IProps> = ({ href }) => (
  <Link href={href}>
    <a>
      <Container>
        <Icon src={"static/demo.jpg"} />
        <Title>Great Product</Title>
        <Pitch>The best website is gonna be here.</Pitch>
        <Badges>
          <Badge type={"counter"} text={"10/25"} />
          <Badge type={"help"} text={"Need help!"} />
        </Badges>
      </Container>
    </a>
  </Link>
);

export default Product;
