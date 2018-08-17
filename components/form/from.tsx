import React from "react";

interface IProps {
  onSubmit?: any;
  children?: any;
  className?: string;
}

const Form: React.SFC<IProps> = ({ onSubmit, children, className }) => (
  <form
    className={className}
    onSubmit={event => {
      event.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);

export default Form;
