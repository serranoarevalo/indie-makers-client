import styled from "../../typed-components";

const Container = styled.div`
  font-size: 20px;
  margin-left: 40px;
  color: ${props => props.theme.greyColor};
  cursor: pointer;
`;

const FakeLink = ({ children }) => <Container>{children}</Container>;

export default FakeLink;
