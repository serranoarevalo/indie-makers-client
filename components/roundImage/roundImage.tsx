import styled from "../../typed-components";

const RoundImage = styled<any, any>("img")`
  border-radius: 50%;
  border: 5px solid ${props => props.theme.darkBlueColor};
  max-width: 100%;
`;

export default RoundImage;
