import Button from "../../components/button";

interface IProps {
  value: number;
  vote: () => void;
}

const VotePresenter: React.SFC<IProps> = ({ value, vote }) => (
  <Button onClick={vote} text={`👏🏻 ${value}`} />
);
export default VotePresenter;
