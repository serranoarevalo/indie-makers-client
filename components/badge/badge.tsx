import PropTypes from "prop-types";
import styled from "../../typed-components";

type badgeTypes = "counter" | "help";

interface IProps {
  type: badgeTypes;
  text: string;
}

const Container = styled<{ type: badgeTypes }, any>("div")`
  padding: 7px;
  text-transform: uppercase;
  background-color: ${props => props.theme.darkBlueColor};
  margin-right: 10px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: ${props =>
    props.type === "help" ? props.theme.redColor : "#2ecc71"};
  &:last-child {
    margin-right: 0px;
  }
`;

const Badge: React.SFC<IProps> = ({ text, type }) => (
  <Container type={type}>{text}</Container>
);

Badge.propTypes = {
  type: PropTypes.oneOf(["counter", "help"]),
  text: PropTypes.string.isRequired
};

export default Badge;
