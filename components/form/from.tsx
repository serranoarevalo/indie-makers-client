import React from "react";

interface IProps {
  onSubmit?: any;
  children?: any;
}

const Form: React.SFC<IProps> = ({ onSubmit, children }) => (
  <form
    onSubmit={event => {
      event.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);

export default Form;
