import * as React from 'react';

import graphqlTag from 'graphql-tag';
import { Mutation } from 'react-apollo';

type Props = {
  add: (text: string) => void,
};

const TextInput: React.SFC<Props> = ({ add }) => {
  const [text, setText] = React.useState('');
  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    add(text);
    setText('');
  };
  return (
    <form onSubmit={onSubmit}>
    <input
      placeholder="Enter text..."
      onChange={event => setText(event.target.value)}
      value={text}
    />
    </form>
  );
};

const ADD_POST = graphqlTag`
mutation addPost($text: String!) {
  addPost(text: $text)
}
`;

const NewPost = () => (
  <Mutation mutation={ADD_POST} refetchQueries={['queryPosts']}>
    {(addPost) => {
      const add = (text: string) => {
        addPost({ variables: { text } });
      };
      return (
        <TextInput add={add} />
      );
    }}
  </Mutation>
);

export default NewPost;
