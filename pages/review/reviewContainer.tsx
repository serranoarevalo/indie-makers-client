import React from "react";
import ReviewPresenter from "./reviewPresenter";
import { Query } from "react-apollo";
import { GET_REVIEW } from "./reviewQueries.blog";
import { GRAPHQLCMS_URL } from "configs";
import { getReview, getReviewVariables } from "types/blog";

interface IProps {
  slug: string;
}

class GetReviewQuery extends Query<getReview, getReviewVariables> {}

export default class extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    const { slug } = query;
    return { slug };
  }
  render() {
    const { slug } = this.props;
    return (
      <GetReviewQuery
        query={GET_REVIEW}
        variables={{ slug }}
        context={{ uri: GRAPHQLCMS_URL, credentials: "same-origin" }}
      >
        {({ loading, data }) =>
          !loading ? <ReviewPresenter data={data} /> : null
        }
      </GetReviewQuery>
    );
  }
}
