import {
  createElement,
  useState,
  useRef,
  useEffect,
} from 'react';

const wrappers = [];

export const useRenderProps = (WrapperComponent, wrapperProps) => {
  const [args, setArgs] = useState([]);
  const ref = useRef({});
  if (!ref.current.initialized) {
    wrappers.push({
      WrapperComponent,
      wrapperProps,
      setArgs,
    });
  }
  useEffect(() => {
    ref.current.initialized = true;
  }, []);
  return args;
};

export const wrap = FunctionComponent => (props) => {
  const element = FunctionComponent(props);
  const ref = useRef({ wrapper: wrappers.pop() });
  const {
    WrapperComponent,
    wrapperProps,
  } = ref.current.wrapper;
  return createElement(WrapperComponent, wrapperProps, (...args) => {
    if (!ref.current.processed) {
      ref.current.wrapper.setArgs(args);
      ref.current.processed = true;
    } else {
      ref.current.processed = false;
    }
    return element;
  });
};
