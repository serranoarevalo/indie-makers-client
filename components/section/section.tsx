import styled from "../../typed-components";

const Container = styled.div`
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  flex-wrap: wrap;
  & > *:first-child {
    margin-right: 10px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    & * {
      display: block;
      margin: 0 !important;
      margin-top: 5px !important;
    }
  }
`;

interface IProps {
  titleElements: any;
  children?: any;
}

const Section: React.SFC<IProps> = ({ titleElements, children }) => (
  <Container>
    {titleElements && <TitleContainer>{titleElements}</TitleContainer>}
    {children}
  </Container>
);

export default Section;
