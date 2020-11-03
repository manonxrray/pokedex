import React from 'react';

import LeftPart from 'src/components/LeftPart';
import RightPart from 'src/components/RightPart';
import './app.scss';

const App = () => (
  <div className="app">
    <LeftPart />
    <RightPart />
  </div>
);

export default App;
