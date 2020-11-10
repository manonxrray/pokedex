import React from 'react';

import Card from 'src/components/Card';
import './screen.scss';

const Screen = () => (
  <div className="frame">
    <div className="border">
      <div className="screen">
        <Card />
      </div>
    </div>
  </div>
);

export default Screen;
