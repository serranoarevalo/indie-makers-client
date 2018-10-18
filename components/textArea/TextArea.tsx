import React from "react";
import styled from "../../typed-components";
import { lighten } from "polished";

const Container = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid ${props => lighten(0.1, props.theme.greyColor)};
  font-size: 16px;
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 300;
    font-size: 16px;
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
    border-bottom-color: ${props => props.theme.blackColor};
  }
`;

interface IProps {
  value: string;
  required: boolean;
  onChange: any;
  placeholder: string;
  name: string;
  maxLength?: number;
  minLength?: number;
  marginBottom?: any;
  id?: string;
}

const TextArea: React.SFC<IProps> = ({
  value,
  required,
  onChange,
  placeholder,
  name,
  maxLength,
  minLength,
  marginBottom,
  id
}) => (
  <Container
    name={name}
    value={value}
    required={required}
    onChange={onChange}
    placeholder={placeholder}
    maxLength={maxLength}
    minLength={minLength}
    style={{ marginBottom }}
    id={id}
  />
);

export default TextArea;
