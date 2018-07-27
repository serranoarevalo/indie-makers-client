import styled from "../../typed-components";

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  align-items: flex-end;
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
