import React from "react";

interface IProps {
  onSubmit?: any;
  children?: any;
  className?: string;
  width?: string;
}

const Form: React.SFC<IProps> = ({
  onSubmit,
  children,
  className,
  width = "100%"
}) => (
  <form
    style={{ width }}
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
