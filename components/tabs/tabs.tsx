import styled from "../../typed-components";

const Container = styled.header`
  display: flex;
  margin: 50px 0;
  & > div {
    margin-right: 20px;
  }
`;

export default ({ children }) => <Container>{children}</Container>;
