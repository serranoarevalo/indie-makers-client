import React from "react";
import Head from "next/head";
import Markdown from "react-markdown";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import { getReview } from "../../types/blog";

const Container = styled.div`
  padding-bottom: 200px;
`;

const Header = styled<{ bg: string }, "div">("div")`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.bg});
  background-size: 100%;
  background-position: center center;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const EWrapper = styled(Wrapper)`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 40px;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const TechCard = styled.div`
  background-color: white;
  ${props => props.theme.cardShadow};
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  position: relative;
  top: -50px;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 550px) {
    padding: 10px;
  }
`;

const Column = styled.div`
  text-align: center;
  &:nth-child(2) {
    border-left: 1px solid ${props => props.theme.darkBlueColor};
    border-right: 1px solid ${props => props.theme.darkBlueColor};
  }
`;

const ColumnTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ColumnText = styled.p`
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const QuestionAnswer = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Image = styled.img.attrs({
  alt: "Product Review"
})`
  width: 100%;
  margin: 25px 0px;
  border-radius: ${props => props.theme.borderRadius};
`;

interface IProps {
  data?: getReview;
}

const ReviewPresenter: React.SFC<IProps> = ({ data }) => {
  if (data && data.productReview) {
    const {
      productReview: {
        name,
        heroImage,
        intro,
        tech,
        timeToMarket,
        projectTypes,
        review
      }
    } = data;
    return (
      <Container>
        <Head>
          <title>{name} | Indie Makers</title>
        </Head>
        <Header bg={heroImage ? heroImage.url : ""}>
          <EWrapper>
            <Title>{name}</Title>
            <Subtitle>{intro}</Subtitle>
          </EWrapper>
        </Header>
        <EWrapper>
          <TechCard>
            <Column>
              <ColumnTitle>Built with</ColumnTitle>
              <ColumnText>
                {tech &&
                  tech.map((techName, index) => {
                    if (index === tech!.length - 1) {
                      return `${techName.name}`;
                    } else if (tech!.length > 1) {
                      return `${techName.name}, `;
                    }
                    return "";
                  })}
              </ColumnText>
            </Column>
            <Column>
              <ColumnTitle>Type</ColumnTitle>
              <ColumnText>
                {projectTypes &&
                  projectTypes.map((project, index) => {
                    if (index === projectTypes!.length - 1) {
                      return `${project.name}`;
                    } else if (projectTypes!.length > 1) {
                      return `${project.name}, `;
                    }
                    return "";
                  })}
              </ColumnText>
            </Column>
            <Column>
              <ColumnTitle>Time to Market</ColumnTitle>
              <ColumnText>{timeToMarket}</ColumnText>
            </Column>
          </TechCard>
        </EWrapper>
        <Content>
          <EWrapper>
            <Markdown
              source={review || ""}
              renderers={{
                heading: QuestionTitle,
                paragraph: QuestionAnswer,
                image: Image
              }}
              linkTarget={"_blank"}
            />
          </EWrapper>
        </Content>
      </Container>
    );
  }
  return null;
};

export default ReviewPresenter;
