import React from "react";
import styled from "../../typed-components";

const Container = styled.div`
  position: relative;
  justify-self: flex-end;
`;

const Arrow = styled.span`
  font-size: 20px;
  position: relative;
  left: -20px;
`;

const SelectE = styled.select`
  appearance: none;
  padding: 5px 10px;
  background-color: white;
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.blackColor};
  position: relative;
`;

interface IProps {
  children?: any;
  onChange: any;
  value: string;
  name: string;
}

const Select: React.SFC<IProps> = ({ children, onChange, value, name }) => (
  <Container>
    <SelectE onChange={onChange} value={value} name={name}>
      {children}
    </SelectE>
    <Arrow>▾</Arrow>
  </Container>
);

export default Select;
