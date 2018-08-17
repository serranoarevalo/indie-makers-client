import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import routes from "../../routes";
import styled from "../../typed-components";

const Container = styled<{ fontSize: string }, "span">("span")`
  font-size: ${props => props.fontSize};
  display: block;
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

const Timestamp = styled.span`
  font-size: 12px;
  color: ${props => props.theme.greyColor};
  margin-left: 10px;
`;

interface IProps {
  text: string;
  isCompleted?: boolean;
  lineThrough?: boolean;
  productName: string;
  onProductPage?: boolean;
  fontSize?: string;
  className?: string;
}

const GoalText: React.SFC<IProps> = ({
  text,
  isCompleted = false,
  lineThrough,
  productName,
  onProductPage = false,
  fontSize = "14px",
  className
}) => (
  <Container className={className} fontSize={fontSize}>
    <Icon>{isCompleted ? "✅" : "◻️"}</Icon>
    <Text isCompleted={isCompleted} lineThrough={lineThrough}>
      {text}
    </Text>{" "}
    {!onProductPage && (
      <React.Fragment>
        on{" "}
        <Goal>
          <Link
            href={routes.productDetail(productName)}
            as={routes.asProductDetail(productName)}
          >
            <a>{productName}</a>
          </Link>
        </Goal>
      </React.Fragment>
    )}
    <Timestamp>25 minutes ago</Timestamp>
  </Container>
);

GoalText.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  lineThrough: PropTypes.bool,
  productName: PropTypes.string.isRequired
};

export default GoalText;
