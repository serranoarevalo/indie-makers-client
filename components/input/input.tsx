import React from "react";
import { lighten } from "polished";
import styled from "../../typed-components";

const Container = styled<{ fontSize: string; width: string }, "input">("input")`
  font-size: ${props => props.fontSize};
  border: 0;
  border-bottom: 1px solid ${props => lighten(0.1, props.theme.greyColor)};
  transition: border-bottom-color 0.2s linear;
  padding: 5px 0px;
  width: ${props => props.width};
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 300;
  }
  &:focus {
    outline: none;
    border-bottom-color: ${props => props.theme.blackColor};
  }
`;

interface IProps {
  type: string;
  placeholder: string;
  onChange?: any;
  onBlur?: any;
  value: string;
  fontSize?: string;
  name: string;
  required?: boolean;
  className?: string;
  maxLength?: number;
  width?: string;
  autofocus?: boolean;
  id?: string;
}

const Input: React.SFC<IProps> = ({
  type,
  id,
  placeholder,
  onBlur,
  onChange,
  value,
  fontSize = "16px",
  name,
  required,
  className,
  maxLength,
  width = "100%",
  autofocus
}) => (
  <Container
    className={className}
    required={required}
    name={name}
    type={type}
    placeholder={placeholder}
    onBlur={onBlur}
    onChange={onChange}
    value={value}
    fontSize={fontSize}
    maxLength={maxLength}
    width={width}
    autoFocus={autofocus}
    id={id}
  />
);

export default Input;
