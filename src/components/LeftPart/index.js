import React from 'react';
import { CornerDownLeft } from 'react-feather';

import Header from './Header';
import Screen from 'src/components/Screen';
import Cross from './Cross';
import './leftpart.scss';

const LeftPart = () => (
  <div className="leftpart">
    <Header />
    <div className="pokedisplay">
      <Screen />
      <Cross />
      <button type="button">
        <CornerDownLeft />
      </button>
    </div>
  </div>
);

export default LeftPart;
