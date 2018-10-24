import Link from "next/link";
import styled from "../../typed-components";
import RoundImage from "../roundImage";
import routes from "../../routes";

const FImage = styled<{ src: string }, any>("div")`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  transition: transform 0.3s linear;
  height: 100%;
`;

const FContainer = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.cardShadow};
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  &:hover ${FImage} {
    transform: scale(1.1);
  }
`;

const Column = styled.div`
  overflow: hidden;
`;

const FText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
`;

const FTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Intro = styled.p``;

const Container = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.cardShadow};
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100%;
  grid-gap: 25px;
  height: 100%;
  align-items: center;
  justify-items: center;
  padding: 20px;
`;

const Icon = styled(RoundImage)`
  height: 60px;
`;

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IProps {
  featured?: boolean;
  slug: string;
  name: string;
  intro: string;
  logo?: string;
  featuredImage?: string;
}

const BlogPost: React.SFC<IProps> = ({
  featured = false,
  slug,
  name,
  intro,
  logo,
  featuredImage = ""
}) => (
  <Link prefetch href={routes.blogDetail(slug)} as={routes.asBlogDetail(slug)}>
    <a>
      {featured ? (
        <FContainer>
          <Column>
            <FImage src={featuredImage} />
          </Column>
          <FText>
            <FTitle>{name}</FTitle>
            <Intro>{intro}</Intro>
          </FText>
        </FContainer>
      ) : (
        <Container>
          <Icon src={logo} />
          <span>
            <Title>{name}</Title>
            <p>{intro}</p>
          </span>
        </Container>
      )}
    </a>
  </Link>
);

export default BlogPost;
