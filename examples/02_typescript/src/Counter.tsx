import * as React from 'react';

type Props = {
  children: (v: number) => React.ReactNode;
};

const Counter: React.SFC<Props> = ({ children }) => {
  const [value, update] = React.useState(0);
  return (
    <div>
      <span>Count:{value}</span>
      {children(value)}
      <button type="button" onClick={() => update(v => v + 1)}>+1</button>
      <button type="button" onClick={() => update(v => v - 1)}>-1</button>
    </div>
  );
};

export default Counter;
