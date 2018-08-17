import styled from "../../typed-components";

const Container = styled.div`
  margin-bottom: 100px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  & > *:first-child {
    margin-right: 10px;
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
