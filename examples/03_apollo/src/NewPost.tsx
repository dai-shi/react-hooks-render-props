import * as React from 'react';

import graphqlTag from 'graphql-tag';
import { Mutation, MutationFn, MutationResult } from 'react-apollo';

import { useRenderProps, wrap } from 'react-hooks-render-props';

type Props = {
  add: (text: string) => void;
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

const useApolloMutation = (props: {}): [MutationFn, MutationResult] => {
  // @ts-ignore: FIXME not assignable
  const results = useRenderProps<{}, MutationResult>(Mutation, props);
  return results;
};

const NewPost = wrap(() => {
  const [addPost] = useApolloMutation({ mutation: ADD_POST, refetchQueries: ['queryPosts'] });
  const add = (text: string) => {
    addPost({ variables: { text } });
  };
  return (
    <TextInput add={add} />
  );
});

export default NewPost;
