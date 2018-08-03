import styled from "../../typed-components";

const Container = styled.header`
  display: flex;
  margin: 50px 0;
  & > div {
    margin-right: 20px;
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
