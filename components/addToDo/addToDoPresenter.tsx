import React from "react";
import Card from "../card";
import Input from "../input";
import Form from "../form";

interface IProps {
  text: string;
  handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

const AddToDoPresenter: React.SFC<IProps> = ({
  text,
  handleOnChange,
  handleSubmit
}) => (
  <Card>
    <Form onSubmit={handleSubmit}>
      <Input
        type={"text"}
        value={text}
        onChange={handleOnChange}
        placeholder={"Type a to do a press Enter"}
        required={false}
        name={"text"}
      />
    </Form>
  </Card>
);
export default AddToDoPresenter;
