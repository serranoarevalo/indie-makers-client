import styled from "../../typed-components";

const RoundImage = styled.img`
  border-radius: 50%;
  border: 1px solid ${props => props.theme.darkBlueColor};
  max-width: 100%;
`;

interface IProps {
  src?: string;
  alt: string;
  className?: string;
}

const RoundImageC: React.SFC<IProps> = ({ src, className, alt }) => (
  <RoundImage src={src} alt={alt} className={className} />
);

export default RoundImageC;
