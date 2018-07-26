import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  accent: boolean;
  text: string;
  fontSize?: number;
}

const Container = styled<{ accent: boolean; fontSize: number }, any>("span")`
  background-color: ${props =>
    props.accent ? props.theme.yellowColor : props.theme.darkBlueColor};
  padding: 15px;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 700;
  font-family: "Karla", sans-serif;
  font-size: ${props => props.fontSize}px;
  cursor: pointer;
  box-shadow: ${props =>
    props.accent
      ? "0px 0px 30px 0px rgba(254,244,139, 0.5)"
      : "0px 0px 30px 0px rgba(0, 0, 0, 0.1)"};
`;

const Button: React.SFC<IProps> = ({ accent, text, fontSize = 16 }) => (
  <Container accent={accent} fontSize={fontSize}>
    {text}
  </Container>
);

Button.propTypes = {
  accent: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired
};

export default Button;
