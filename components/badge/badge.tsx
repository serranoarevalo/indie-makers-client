import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  warning?: boolean;
  text: string;
}

const Container = styled<{ warning?: boolean }, any>("div")`
  padding: 5px 7px;
  text-transform: uppercase;
  background-color: ${props => props.theme.darkBlueColor};
  margin-right: 10px;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 12px;
  font-weight: 600;
  &:last-child {
    margin-right: 0px;
  }
  }};
`;

const Badge: React.SFC<IProps> = ({ text, warning = false }) => (
  <Container warning={warning}>{text}</Container>
);

Badge.propTypes = {
  warning: PropTypes.boolean,
  text: PropTypes.string.isRequired
};

export default Badge;
