import React from 'react';

import Card from 'src/components/Card';
import List from './List';
import './screen.scss';

const Screen = () => (
  <div className="frame">
    <div className="border">
      <div className="screen">
        <List />
      </div>
    </div>
  </div>
);

export default Screen;
