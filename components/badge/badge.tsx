import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  icon?: any;
  text: any;
  bgColor?: string;
}

const Container = styled<{ bgColor: any }, any>("div")`
  padding: 5px 7px;
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
  &:last-child {
    margin-right: 0px;
  }
  & *:first-child {
    margin-right: 5px;
  }
`;

const Badge: React.SFC<IProps> = ({ icon, text, bgColor = null }) => (
  <Container bgColor={bgColor}>
    {icon} {text}
  </Container>
);

Badge.propTypes = {
  bgColor: PropTypes.any,
  text: PropTypes.any,
  icon: PropTypes.any
};

export default Badge;
