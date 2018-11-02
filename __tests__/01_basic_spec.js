/* eslint-env jest */

import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { useRenderProps, wrap } from '../src/index';

configure({ adapter: new Adapter() });

describe('basic spec', () => {
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
    let wrapper1;
    let wrapper2;
    (() => {
      const Component = () => (
        <SetNumber>
          {value => <span>{value}</span>}
        </SetNumber>
      );
      const App = () => (
        <Component />
      );
      wrapper1 = mount(<App />);
    })();
    (() => {
      const Component = wrap(() => {
        const [value] = useRenderProps(SetNumber);
        return (
          <span>{value}</span>
        );
      });
      const App = () => (
        <Component />
      );
      wrapper2 = mount(<App />);
    })();
    expect(wrapper2.html()).toEqual(wrapper1.html());
    expect(toJson(wrapper2)).toMatchSnapshot();
  });
});
