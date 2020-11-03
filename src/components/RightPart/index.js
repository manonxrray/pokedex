import React from 'react';

import Hinge from './Hinge';
import Research from 'src/components/Research';
import TypesBoard from 'src/components/TypesBoard';

import './rightpart.scss';

const RightPart = () => (
  <div className="rightpart">
    <Hinge />
    <div className="explore">
      <Research />
      <TypesBoard />
      <div className="buttons">
        <button type="button" className="female">
          F
        </button>
        <button type="button" className="male">
          M 
        </button>
        <button type="button" className="shiny">
          shiny
        </button>
        <button type="button" className="reset">
          reset
        </button>
      </div>
      
    </div>
  </div>
);

export default RightPart;
