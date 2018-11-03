import * as React from 'react';

import graphqlTag from 'graphql-tag';
import { Query, QueryProps, QueryResult } from 'react-apollo';

import { useRenderProps, wrap } from '../../src/index';

const QUERY_POSTS = graphqlTag`
query queryPosts {
  posts {
    id
    text
  }
}
`;

type DataItem = {
  text: string,
  id: number,
};

type Data = {
  posts: DataItem[],
};

class QueryPosts extends Query<Data> {}

type Result = QueryResult<Data>;

const useApolloQuery = (query: string): Result => {
  const [result] = useRenderProps<{}, Result>(QueryPosts, { query });
  const fallbackResult = { loading: true }; // XXX this is dirty
  return result || fallbackResult;
};

const PostList: React.SFC = wrap(() => {
  const { loading, error, data } = useApolloQuery(QUERY_POSTS);
  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error}</span>;
  if (!data) return <span>No Data</span>;
  return (
    <ul>
      {data.posts.map(item => <li key={String(item.id)}>{item.text}</li>)}
    </ul>
  );
});

export default PostList;
