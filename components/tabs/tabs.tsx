import styled from "../../typed-components";

const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
  & > * {
    margin-right: 20px;
  }
  @media (max-width: 550px) {
    & > * {
      margin-bottom: 20px;
    }
  }
`;

interface IProps {
  className?: string;
  children: any;
}

const Tabs: React.SFC<IProps> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Tabs;
