import styled from "../../typed-components";

interface IProps {
  children: any;
  marginBottom?: number;
  className?: string;
}

const Container = styled<{ marginBottom: number }, any>("h3")`
  color: ${props => props.theme.blackColor};
  font-weight: 600;
  font-size: 28px;
  margin-bottom: ${props => props.marginBottom}px;
`;

const Title: React.SFC<IProps> = ({
  children,
  marginBottom = 0,
  className
}) => (
  <Container marginBottom={marginBottom} className={className}>
    {children}
  </Container>
);

export default Title;
