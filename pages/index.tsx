import styled from "styled-components";
import "../globalStyles";

const Hello = styled.div`
  color: ${props => props.theme.blackColor};
`;

export default () => <Hello>home</Hello>;
