import styled from "../../typed-components";

interface IProps {
  children: any;
}

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Wrapper: React.SFC<IProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default Wrapper;
