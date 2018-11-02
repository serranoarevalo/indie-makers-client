import styled from "../../typed-components";
import Button from "../../components/button";

interface IProps {
  value: number;
  vote: () => void;
  clapped: boolean;
}

const Container = styled<{ clapped: boolean }, any>(Button)`
  border: ${props => (props.clapped ? "2px solid #1abc9c" : "")};
`;

const VotePresenter: React.SFC<IProps> = ({ value, vote, clapped }) => (
  <Container clapped={clapped} onClick={vote} text={`👏🏻 ${value}`} />
);
export default VotePresenter;
