import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  children: any;
  className?: string;
  padding?: string;
}

const Container = styled<{ padding: string }, any>("div")`
  background-color: white;
  ${props => props.theme.cardShadow};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.padding};
  width: 100%;
`;

const Card: React.SFC<IProps> = ({ children, className, padding = "20px" }) => (
  <Container className={className} padding={padding}>
    {children}
  </Container>
);

Card.propTypes = {
  className: PropTypes.string,
  padding: PropTypes.string
};

export default Card;
