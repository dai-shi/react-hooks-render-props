import * as React from 'react';

declare module 'react' {
  type SetStateAction<S> = S | ((prevState: S) => S);
  type Dispatch<A> = (value: A) => void;
  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  function useEffect(
    create: () => void | (() => void),
    inputs?: ReadonlyArray<unknown>,
  ): void;
}
