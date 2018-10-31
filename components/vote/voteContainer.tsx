import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import VotePresenter from "./votePresenter";
import { voteVariables, vote } from "types/api";
import { VOTE } from "./VoteQueries";

interface IProps {
  productId: number;
  initialValue: number;
}

interface IState {
  value: number;
}

class VoteMutation extends Mutation<vote, voteVariables> {}

class VoteContainer extends React.Component<IProps, IState> {
  public vote: MutationFn<vote, voteVariables>;
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: props.initialValue
    };
  }
  render() {
    const { value } = this.state;
    const { productId } = this.props;
    return (
      <VoteMutation mutation={VOTE} variables={{ productId }}>
        {voteMutation => {
          this.vote = voteMutation;
          return <VotePresenter value={value} vote={this.handleVote} />;
        }}
      </VoteMutation>
    );
  }
  public handleVote = () => {
    const { initialValue } = this.props;
    const { value } = this.state;
    this.vote();
    if (initialValue === value) {
      this.setState({
        value: initialValue + 1
      });
    } else {
      this.setState({
        value: initialValue
      });
    }
  };
}

export default VoteContainer;
