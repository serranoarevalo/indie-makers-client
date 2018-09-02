import React from "react";
import ReviewPresenter from "./reviewPresenter";
import { Query } from "react-apollo";
import { GET_REVIEW } from "./reviewQueries";
import { GRAPHQLCMS_URL } from "../../configs";

interface IProps {
  slug: string;
}

export default class extends React.Component<IProps> {
  static async getInitialProps({ query }) {
    const { slug } = query;
    return { slug };
  }
  render() {
    const { slug } = this.props;
    return (
      <Query
        query={GET_REVIEW}
        variables={{ slug }}
        context={{ uri: GRAPHQLCMS_URL }}
      >
        {({ loading, data }) => (
          <ReviewPresenter loading={loading} data={data} />
        )}
      </Query>
    );
  }
}
