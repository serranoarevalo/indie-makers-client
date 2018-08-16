import Link from "next/link";
import PropTypes from "prop-types";
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
  grid-gap: 15px;
  height: 100%;
  align-items: center;
  justify-items: center;
  padding: 0px 10px;
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
}

const BlogPost: React.SFC<IProps> = ({ featured = false, slug }) => (
  <Link href={routes.blogDetail(slug)} as={routes.asBlogDetail(slug)}>
    <a>
      {featured ? (
        <FContainer>
          <Column>
            <FImage src={"/static/appDemo.png"} />
          </Column>
          <FText>
            <FTitle>Alex's project</FTitle>
            <Intro>
              He did and app for his thing and now he's married, I personally
              think this should be longer so it looks awesome.
            </Intro>
          </FText>
        </FContainer>
      ) : (
        <Container>
          <Icon src="/static/demo.jpg" />
          <span>
            <Title>Alex's project</Title>
            <p>He did and app for his thing and now he's married</p>
          </span>
        </Container>
      )}
    </a>
  </Link>
);

BlogPost.propTypes = {
  featured: PropTypes.bool,
  slug: PropTypes.string.isRequired
};
export default BlogPost;
