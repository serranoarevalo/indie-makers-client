import LazyLoad from "react-lazyload";
import styled from "../../typed-components";

const RoundImage = styled<any, any>("div")`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border: 1px solid ${props => props.theme.darkBlueColor};
  max-width: 100%;
  border-radius: 50%;
`;

interface IProps {
  src?: string;
  alt: string;
  className?: string;
}

const RoundImageC: React.SFC<IProps> = ({ src, className, alt }) => (
  <LazyLoad once height={"80px"}>
    <RoundImage src={src} alt={alt} className={className} />
  </LazyLoad>
);

export default RoundImageC;
