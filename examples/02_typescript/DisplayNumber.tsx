import * as React from 'react';

import { useRenderProps, wrap } from '../../src/index';

import Counter from './Counter';

const DisplayNumber = wrap(() => {
  const [value] = useRenderProps(Counter);
  return (
    <div>
      Number:
      <span>{value}</span>
    </div>
  );
});

export default DisplayNumber;
