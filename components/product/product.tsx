import Link from "next/link";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";

const Container = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  padding: 40px 20px;
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
`;

const Footer = styled.footer`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Maker = styled(RoundImage)`
  height: 30px;
  width: 30px;
  border: 0;
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
        <Footer>
          <Badges>
            <Badge text={"10/25"} icon={"✅"} />
            <Badge text={"Need help!"} icon={"⚠️"} />
          </Badges>
          <Maker src={"static/demo.jpg"} />
        </Footer>
      </Container>
    </a>
  </Link>
);

export default Product;
