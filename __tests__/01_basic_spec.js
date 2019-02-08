/* eslint-env jest */

import React, { StrictMode } from 'react';
import { render, cleanup } from 'react-testing-library';

import { useRenderProps, wrap } from '../src/index';

describe('basic spec', () => {
  afterEach(cleanup);

  it('should have a function', () => {
    expect(useRenderProps).toBeDefined();
    expect(wrap).toBeDefined();
  });

  it('should create the same component', () => {
    const SetNumber = ({ children }) => (
      <div>
        {children(123)}
      </div>
    );
    let container1;
    let container2;
    {
      const Component = () => (
        <SetNumber>
          {value => <span>{value}</span>}
        </SetNumber>
      );
      const App = () => (
        <StrictMode>
          <Component />
        </StrictMode>
      );
      container1 = render(<App />).container;
    }
    {
      const Component = wrap(() => {
        const [value] = useRenderProps(SetNumber);
        return (
          <span>{value}</span>
        );
      });
      const App = () => (
        <StrictMode>
          <Component />
        </StrictMode>
      );
      container2 = render(<App />).container;
    }
    expect(container1.innerHTML).toEqual(container2.innerHTML);
    expect(container1).toMatchSnapshot();
    expect(container2).toMatchSnapshot();
  });
});
