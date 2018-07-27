import styled from "../../typed-components";

const RoundImage = styled.img`
  border-radius: 50%;
  border: 5px solid ${props => props.theme.darkBlueColor};
  max-width: 100%;
`;

interface IProps {
  src?: string;
  className?: string;
}

const RoundImageC: React.SFC<IProps> = ({ src, className }) => (
  <RoundImage src={src} className={className} />
);

export default RoundImageC;
