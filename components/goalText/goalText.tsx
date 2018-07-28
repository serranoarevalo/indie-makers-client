import PropTypes from "prop-types";
import styled from "../../typed-components";

const Container = styled.div`
  display: flex;
  align-item: center;
`;

const Text = styled<
  {
    isCompleted: boolean;
    lineThrough: boolean;
  },
  any
>("span")`
  text-decoration: ${props =>
    props.isCompleted && props.lineThrough ? "line-through" : "inherit"};
  color: ${props => (props.isCompleted ? props.theme.greyColor : "black")};
`;

const Icon = styled.span`
  width: 25px;
  text-align: center;
  margin-right: 10px;
`;

interface IProps {
  text: string;
  isCompleted?: boolean;
  lineThrough?: boolean;
}

const GoalText: React.SFC<IProps> = ({
  text,
  isCompleted = false,
  lineThrough
}) => (
  <Container>
    <Icon>
      {isCompleted ? (
        <i className="em em-white_check_mark" />
      ) : (
        <i className="em em-white_medium_square" />
      )}
    </Icon>
    <Text isCompleted={isCompleted} lineThrough={lineThrough}>
      {text}
    </Text>
  </Container>
);

GoalText.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  lineThrough: PropTypes.bool
};

export default GoalText;
