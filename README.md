react-hooks-render-props
========================

[![Build Status](https://travis-ci.com/dai-shi/react-hooks-render-props.svg?branch=master)](https://travis-ci.com/dai-shi/react-hooks-render-props)
[![npm version](https://badge.fury.io/js/react-hooks-render-props.svg)](https://badge.fury.io/js/react-hooks-render-props)

Hacky custom hook to emulate render props by Hooks API

Background
----------

React Hooks API is awesome.
Just wanted to hack a custom hook to emulate
render props (only function as a child).
This is an experimental library for fun.

Install
-------

```bash
npm install react-hooks-render-props
```

Usage
-----

```javascript
import React from 'react';
import { useRenderProps, wrap } from 'react-hooks-render-props';

const RandomNumber = ({ children }) => (
  <div>
    {children(Math.random())}
  </div>
);

const NumberWithRenderProps = () => (
  <RandomNumber>
    {value => <div>{value}</div>}
  </RandomNumber>
);

const NumberWithCustomHook = wrap(() => {
  const [value] = useRenderProps(RandomNumber);
  return (
    <div>{value}</div>
  );
});

const App = () => (
  <div>
    <NumberWithRenderProps />
    <NumberWIthCustomHook />
  </div>
);
```

Example
-------

The [examples](examples) folder contains a working example.
You can run it with

```bash
PORT=8080 npm run examples:minimal
```

and open <http://localhost:8080> in your web browser.

Limitations
-----------

Due to its hack implementation:

- It renders initially without any data.
- It may not detect the change of inputs to `useRenderProps`.
- And maybe some more.
