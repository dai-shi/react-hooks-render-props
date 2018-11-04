import * as React from 'react';

type Children<T> = ((...args: T[]) => React.ReactNode);

export const useRenderProps:
  <P extends {}, T>(c: React.ComponentType<P & { children: Children<T> }>, p?: P) => T[];
export const wrap: <P extends {}>(c: React.SFC<P>) => React.SFC<P>;
