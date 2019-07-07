/* eslint-env browser */

import React, { StrictMode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useRenderProps, wrap } from 'react-hooks-render-props';

const RandomNumber = ({ name, children }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  }, []);
  return (
    <div style={{ color: 'darkgray', marginLeft: 100 }}>
      {children(`${Math.random()} for ${name}`)}
      <div>Count: {count}</div>
      {name === 'b' && <ShowNumber name="d" />}
    </div>
  );
};

const ShowNumber = wrap(({ name }) => {
  const value = useRenderProps(RandomNumber, { name });
  return (
    <div>
      <h1>Random</h1>
      <div>Name: {name}</div>
      <div>Value: {value}</div>
      {name === 'a' && <ShowNumber name="c" />}
    </div>
  );
});

const App = () => (
  <StrictMode>
    <div>
      <ShowNumber name="a" />
      <ShowNumber name="b" />
    </div>
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('app'));
