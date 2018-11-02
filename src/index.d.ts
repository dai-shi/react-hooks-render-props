import * as React from 'react';

// tslint:disable-next-line:no-any
export const useRenderProps: <P extends {}>(c: React.ComponentType<P>, p?: P) => any[];
export const wrap: <P extends {}>(c: React.SFC<P>) => React.SFC<P>;
