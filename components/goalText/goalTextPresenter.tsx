import React from "react";
import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import timeAgo from "../../lib/timeAgo";
import Input from "../input";
import Form from "../form";

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

const Icon = styled<any, any>("span")`
  width: 25px;
  text-align: center;
  margin-right: 10px;
  cursor: ${props => (props.isMine ? "pointer" : "default")};
`;

const Goal = styled.span`
  font-weight: 600;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: ${props => props.theme.greyColor};
  margin-left: 10px;
`;

const EditBtn = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

const FormContainer = styled.span`
  & form {
    display: inline;
  }
`;

interface IProps {
  text: string;
  isCompleted?: boolean;
  lineThrough?: boolean;
  productName?: string;
  onProductPage?: boolean;
  fontSize?: string;
  className?: string;
  isMine?: boolean;
  timeStamp?: string;
  productSlug?: string;
  toggleCompleted: any;
  deleteGoal: () => void;
  isEditing: boolean;
  editingText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleEditing: () => void;
  onSubmit: () => void;
}

const GoalText: React.SFC<IProps> = ({
  text,
  isCompleted = false,
  lineThrough,
  productName = "",
  onProductPage = false,
  fontSize = "14px",
  className,
  isMine = false,
  timeStamp,
  productSlug,
  toggleCompleted,
  deleteGoal,
  isEditing,
  editingText,
  handleInputChange,
  toggleEditing,
  onSubmit
}) => (
  <Container className={className} fontSize={fontSize}>
    <Icon onClick={toggleCompleted} isMine={isMine}>
      {isCompleted ? "✅" : "◻️"}
    </Icon>
    {isEditing ? (
      <FormContainer>
        <Form onSubmit={onSubmit} width={"80%"}>
          <Input
            value={editingText}
            onChange={handleInputChange}
            type={"text"}
            placeholder={"Edit your To Do"}
            name={"text"}
            width={"50%"}
            autofocus={true}
          />
        </Form>
      </FormContainer>
    ) : (
      <Text isCompleted={isCompleted} lineThrough={lineThrough}>
        {editingText ? editingText : text}
      </Text>
    )}{" "}
    {!onProductPage && (
      <React.Fragment>
        on{" "}
        <Goal>
          <Link
            prefetch
            href={routes.productDetail(`${productSlug}`)}
            as={routes.asProductDetail(`${productSlug}`)}
          >
            <a>{productName}</a>
          </Link>
        </Goal>
      </React.Fragment>
    )}
    <Timestamp>{timeAgo.format(Date.parse(timeStamp || ""))}</Timestamp>
    {isEditing ? (
      isMine && (
        <>
          {isMine && (
            <EditBtn title={"Save"} onClick={onSubmit}>
              ✅
            </EditBtn>
          )}
          {isMine && (
            <EditBtn title={"Cancel"} onClick={toggleEditing}>
              ❌
            </EditBtn>
          )}
        </>
      )
    ) : (
      <>
        {isMine && (
          <EditBtn onClick={toggleEditing} title={"Edit"}>
            ✏️
          </EditBtn>
        )}
        {isMine && (
          <EditBtn onClick={deleteGoal} title={"Delete"}>
            🗑
          </EditBtn>
        )}
      </>
    )}
  </Container>
);

export default GoalText;
