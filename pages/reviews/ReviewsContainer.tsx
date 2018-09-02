import React from "react";
import { Query } from "react-apollo";
import ReviewsPresenter from "./ReviewPresenter";
import { GET_BLOG } from "./ReviewQueries.blog";
import { GRAPHQLCMS_URL } from "../../configs";

export default class extends React.Component {
  render() {
    return (
      <Query query={GET_BLOG} context={{ uri: GRAPHQLCMS_URL }}>
        {({ data, loading }) =>
          !loading ? <ReviewsPresenter data={data} /> : null
        }
      </Query>
    );
  }
}
