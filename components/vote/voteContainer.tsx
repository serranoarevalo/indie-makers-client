import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import VotePresenter from "./votePresenter";
import { voteVariables, vote } from "types/api";
import { VOTE } from "./VoteQueries";
import { GET_PRODUCT } from "../../pages/product/productQuery";

interface IProps {
  productId: number;
  initialValue: number;
  productSlug: string;
  clapped: boolean;
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
    const { productId, productSlug, clapped } = this.props;
    return (
      <VoteMutation
        mutation={VOTE}
        variables={{ productId }}
        refetchQueries={[
          { query: GET_PRODUCT, variables: { slug: productSlug } }
        ]}
      >
        {voteMutation => {
          this.vote = voteMutation;
          return (
            <VotePresenter
              value={value}
              vote={this.handleVote}
              clapped={clapped}
            />
          );
        }}
      </VoteMutation>
    );
  }
  public handleVote = () => {
    const { initialValue, clapped } = this.props;
    const { value } = this.state;
    this.vote();
    if (value === initialValue) {
      if (!clapped) {
        this.setState({
          value: initialValue + 1
        });
      } else {
        this.setState({
          value: initialValue - 1
        });
      }
    } else {
      if (value === initialValue - 1) {
        this.setState(prev => {
          return {
            value: prev.value + 1
          };
        });
      } else if (value === initialValue + 1) {
        this.setState(prev => {
          return {
            value: prev.value - 1
          };
        });
      }
    }
  };
}

export default VoteContainer;
