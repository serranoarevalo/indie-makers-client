import { lighten } from "polished";
import styled from "../../typed-components";

const Container = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid ${props => lighten(0.15, props.theme.greyColor)};
  &:last-child {
    border-bottom: 0;
  }
`;

const Goal = () => <Container>la</Container>;

export default Goal;
