import * as React from 'react';

type Children<P, T> =
  ((arg1: T) => React.ReactNode) |
  ((...args: T[]) => React.ReactNode);

export const useRenderProps:
  <P extends {}, T>(c: React.ComponentType<{ children: Children<P, T> }>, p?: P) => T[];
export const wrap: <P extends {}>(c: React.SFC<P>) => React.SFC<P>;
