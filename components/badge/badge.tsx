import styled from "../../typed-components";

interface IProps {
  icon?: any;
  text: any;
  bgColor?: string;
  title?: string;
}

const Container = styled<{ bgColor: any }, any>("div")`
  padding: 5px;
  text-transform: uppercase;
  background-color: ${props =>
    props.bgColor ? props.bgColor : props.theme.darkBlueColor};
  margin-right: 10px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 12px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  height: auto;
  &:last-child {
    margin-right: 0px;
  }
  & *:first-child {
    margin-right: 5px;
  }
  margin-bottom: 10px;
`;

const Badge: React.SFC<IProps> = ({
  title = "",
  icon,
  text = "ext",
  bgColor = null
}) => (
  <Container title={title} bgColor={bgColor}>
    {icon} {text}
  </Container>
);

export default Badge;
