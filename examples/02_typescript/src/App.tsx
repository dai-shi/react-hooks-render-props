import * as React from 'react';

import DisplayNumber from './DisplayNumber';

const App = () => (
  <React.StrictMode>
    <div>
      <h1>Counter</h1>
      <DisplayNumber />
      <DisplayNumber />
    </div>
  </React.StrictMode>
);

export default App;
