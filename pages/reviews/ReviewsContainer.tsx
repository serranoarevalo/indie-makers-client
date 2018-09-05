import React from "react";
import { Query } from "react-apollo";
import ReviewsPresenter from "./ReviewPresenter";
import { GET_BLOG } from "./ReviewQueries.blog";
import { GRAPHQLCMS_URL } from "configs";
import { getBlog } from "types/blog";

class GetBlogQuery extends Query<getBlog> {}

export default class extends React.Component {
  render() {
    return (
      <GetBlogQuery query={GET_BLOG} context={{ uri: GRAPHQLCMS_URL }}>
        {({ data, loading }) =>
          !loading ? <ReviewsPresenter data={data} /> : null
        }
      </GetBlogQuery>
    );
  }
}
