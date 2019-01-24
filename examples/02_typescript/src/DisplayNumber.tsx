import * as React from 'react';

import { useRenderProps, wrap } from 'react-hooks-render-props';

import Counter from './Counter';

const DisplayNumber = wrap(() => {
  const [value] = useRenderProps<{}, number>(Counter);
  return <div>Number:{value}</div>;
});

export default DisplayNumber;
