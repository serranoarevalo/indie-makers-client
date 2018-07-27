import PropTypes from "prop-types";
import styled from "../../typed-components";

interface IProps {
  children: any;
  marginBottom?: number;
}

const Container = styled<{ marginBottom: number }, any>("h3")`
  color: ${props => props.theme.blackColor};
  font-weight: 600;
  font-size: 28px;
  margin-bottom: ${props => props.marginBottom}px;
`;

const Title: React.SFC<IProps> = ({ children, marginBottom = 0 }) => (
  <Container marginBottom={marginBottom}>{children}</Container>
);

Title.propTypes = {
  marginBottom: PropTypes.number
};

export default Title;
