import Link from "next/link";
import PropTypes from "prop-types";
import routes from "../../routes";
import styled from "../../typed-components";

const Container = styled.span``;

const Text = styled<
  {
    isCompleted: boolean;
    lineThrough: boolean;
  },
  any
>("span")`
  text-decoration: ${props =>
    props.isCompleted && props.lineThrough ? "line-through" : "inherit"};
  color: ${props => props.theme.blackColor};
`;

const Icon = styled.span`
  width: 25px;
  text-align: center;
  margin-right: 10px;
`;

const Goal = styled.span`
  font-weight: 600;
`;

interface IProps {
  text: string;
  isCompleted?: boolean;
  lineThrough?: boolean;
  goalName: string;
}

const GoalText: React.SFC<IProps> = ({
  text,
  isCompleted = false,
  lineThrough,
  goalName
}) => (
  <Container>
    <Icon>{isCompleted ? "✅" : "◻️"}</Icon>
    <Text isCompleted={isCompleted} lineThrough={lineThrough}>
      {text}
    </Text>{" "}
    on{" "}
    <Goal>
      <Link href={routes.productDetail(goalName)}>
        <a>{goalName}</a>
      </Link>
    </Goal>
  </Container>
);

GoalText.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  lineThrough: PropTypes.bool,
  goalName: PropTypes.string.isRequired
};

export default GoalText;
