import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  warning?: boolean;
  icon?: any;
  text: any;
}

const Container = styled<{ warning?: boolean }, any>("div")`
  display: flex;
  align-items: center;
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
  & *:first-child {
    margin-right: 5px;
  }
`;

const Badge: React.SFC<IProps> = ({ icon, text, warning = false }) => (
  <Container warning={warning}>
    {icon}
    {text}
  </Container>
);

Badge.propTypes = {
  warning: PropTypes.bool,
  text: PropTypes.any,
  icon: PropTypes.any
};

export default Badge;
