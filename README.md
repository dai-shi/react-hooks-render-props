# react-hooks-render-props

[![Build Status](https://travis-ci.com/dai-shi/react-hooks-render-props.svg?branch=master)](https://travis-ci.com/dai-shi/react-hooks-render-props)
[![npm version](https://badge.fury.io/js/react-hooks-render-props.svg)](https://badge.fury.io/js/react-hooks-render-props)
[![bundle size](https://badgen.net/bundlephobia/minzip/react-hooks-render-props)](https://bundlephobia.com/result?p=react-hooks-render-props)

Hacky custom hook to emulate render props with Hooks API

## Introduction

React Hooks API is awesome.
Some of the libraries may not provide hooks API,
but just render props (function as a child) API.

To use such libraries, this is to provide a
hacky custom hook to emulate render props (function as a child).

This is not for production.
It's only tested against a few small examples.

## Install

```bash
npm install react-hooks-render-props
```

## Usage

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
    <NumberWithCustomHook />
  </div>
);
```

## Examples

The [examples](examples) folder contains working examples.
You can run one of them with

```bash
PORT=8080 npm run examples:minimal
```

and open <http://localhost:8080> in your web browser.

You can also try them in codesandbox.io:
[01](https://codesandbox.io/s/github/dai-shi/react-hooks-render-props/tree/master/examples/01_minimal)
[02](https://codesandbox.io/s/github/dai-shi/react-hooks-render-props/tree/master/examples/02_typescript)
[03](https://codesandbox.io/s/github/dai-shi/react-hooks-render-props/tree/master/examples/03_apollo)

## Limitations

Due to its hacky implementation:

- It renders initially without any data.
- It may not detect the change of inputs to `useRenderProps`.
- And maybe some more.
