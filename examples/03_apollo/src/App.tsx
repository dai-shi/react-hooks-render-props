import * as React from 'react';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { mockedLink } from './mock';
import NewPost from './NewPost';
import PostList from './PostList';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockedLink,
});

const App = () => (
  <ApolloProvider client={client}>
    <NewPost />
    <PostList />
  </ApolloProvider>
);

export default App;
