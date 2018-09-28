import { lighten } from "polished";
import styled from "../../typed-components";

type sizeType = "md" | "xs";

const Container = styled<
  {
    accent: boolean;
    fontSize: number;
    size?: sizeType;
    shadowColor: string;
  },
  any
>("span")`
  background-color: ${props =>
    props.accent ? props.theme.yellowColor : props.theme.lightBlueColor};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 700;
  font-family: "Karla", sans-serif;
  font-size: ${props => props.fontSize}px;
  cursor: pointer;

  box-shadow: ${props =>
    props.accent
      ? "0px 0px 30px 0px rgba(254,244,139, 1)"
      : `0px 0px 30px 0px ${props.shadowColor}`};
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${props =>
      lighten(
        0.05,
        props.accent ? props.theme.yellowColor : props.theme.lightBlueColor
      )};
  }
  ${props => {
    if (props.size === "md") {
      return "padding:15px;";
    } else if (props.size === "xs") {
      return "padding:7px;";
    }
    return;
  }};
`;

interface IProps {
  accent?: boolean;
  text: any;
  fontSize?: number;
  size?: sizeType;
  className?: string;
  shadowColor?: string;
  onClick?: (any) => void;
}

const Button: React.SFC<IProps> = ({
  accent = false,
  text,
  fontSize = 16,
  size = "md",
  className,
  shadowColor = "rgba(219,233,241,1)",
  onClick
}) => (
  <Container
    className={className}
    accent={accent}
    fontSize={fontSize}
    size={size}
    shadowColor={shadowColor}
    onClick={onClick}
  >
    {text}
  </Container>
);

export default Button;
