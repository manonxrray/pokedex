import React from 'react';

import Header from './Header';
import Screen from 'src/components/Screen';
import Cross from './Cross';
import Letters from './Letters';
import './leftpart.scss';

const LeftPart = () => (
  <div className="leftpart">
    <Header />
    <div className="pokedisplay">
      <Screen />
      <div className="commands">
        <Cross />
        <Letters />
      </div>
    </div>
  </div>
);

export default LeftPart;
