import {
  createElement,
  useEffect,
  useRef,
  useState,
} from 'react';

let sharedObject = null;

export const useRenderProps = (WrapperComponent, wrapperProps) => {
  const [args, setArgs] = useState([]);
  const updateFlag = useRef(true);
  sharedObject = {
    setArgs,
    updateFlag,
    WrapperComponent,
    wrapperProps,
  };
  useEffect(() => {
    updateFlag.current = !updateFlag.current;
  });
  return args;
};

export const wrap = FunctionComponent => (props) => {
  sharedObject = null;
  const element = FunctionComponent(props);
  const {
    setArgs,
    updateFlag,
    WrapperComponent,
    wrapperProps,
  } = sharedObject || {};
  if (!WrapperComponent) return element;
  return createElement(WrapperComponent, wrapperProps, (...args) => {
    if (updateFlag.current) {
      setArgs(args);
    }
    return element;
  });
};
