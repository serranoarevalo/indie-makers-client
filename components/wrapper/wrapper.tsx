import styled from "../../typed-components";

interface IProps {
  children: any;
  className?: string;
}

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.maxWidth}) {
    padding: 0px 25px;
    box-sizing: border-box;
  }
`;

const Wrapper: React.SFC<IProps> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Wrapper;
