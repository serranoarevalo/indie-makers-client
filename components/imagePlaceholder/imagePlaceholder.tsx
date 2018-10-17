import React from "react";
import styled from "../../typed-components";

const Container = styled<{ size: number }, any>("div")`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border-radius: 50%;
  color: white;
  font-weight: 600;
  font-size: ${props => props.size / 2}px;
`;

interface IProps {
  letter: string;
  size?: number;
}

const ImagePlaceholder: React.SFC<IProps> = ({ letter, size }) => (
  <Container size={size}>{letter}</Container>
);

export default ImagePlaceholder;
