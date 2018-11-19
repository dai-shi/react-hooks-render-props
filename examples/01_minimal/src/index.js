/* eslint-env browser */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useRenderProps, wrap } from 'react-hooks-render-props';

const RandomNumber = ({ name, children }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setCounter(c => c + 1);
    }, 1000);
  }, []);
  return (
    <div style={{ color: 'darkgray', marginLeft: 100 }}>
      {children(`${Math.random()} for ${name}`)}
      <div>
        counter:
        {counter}
      </div>
      {name === 'b' && <ShowNumber name="d" />}
    </div>
  );
};

const ShowNumber = wrap(({ name }) => {
  const value = useRenderProps(RandomNumber, { name });
  return (
    <div>
      <h1>Random</h1>
      <div>
        name:
        {name}
      </div>
      <div>
        value:
        {value}
      </div>
      {name === 'a' && <ShowNumber name="c" />}
    </div>
  );
});

const App = () => (
  <div>
    <ShowNumber name="a" />
    <ShowNumber name="b" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
