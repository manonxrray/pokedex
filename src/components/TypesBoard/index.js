import React from 'react';

import fire from 'src/assets/types/fire.svg';
import water from 'src/assets/types/water.svg';
import grass from 'src/assets/types/grass.svg';
import poison from 'src/assets/types/poison.svg';
import bug from 'src/assets/types/bug.svg';
import flying from 'src/assets/types/flying.svg';
import ground from 'src/assets/types/ground.svg';
import rock from 'src/assets/types/rock.svg';
import ice from 'src/assets/types/ice.svg';
import steel from 'src/assets/types/steel.svg';
import electric from 'src/assets/types/electric.svg';
import fighting from 'src/assets/types/fighting.svg';
import ghost from 'src/assets/types/ghost.svg';
import dark from 'src/assets/types/dark.svg';
import psychic from 'src/assets/types/psychic.svg';
import fairy from 'src/assets/types/fairy.svg';
import dragon from 'src/assets/types/dragon.svg';
import normal from 'src/assets/types/normal.svg';

import './typesboard.scss';

const TypesBoard = () => (
  <div className="typesboard">
    <button type="button" className="fire">
      <img src={fire} alt="fire" />
    </button>
    <button type="button" className="water">
      <img src={water} alt="water" />
    </button>
    <button type="button" className="grass">
      <img src={grass} alt="grass" />
    </button>
    <button type="button" className="poison">
      <img src={poison} alt="poison" />
    </button>
    <button type="button" className="bug">
      <img src={bug} alt="bug" />
    </button>
    <button type="button" className="flying">
      <img src={flying} alt="flying" />
    </button>
    <button type="button" className="ground">
      <img src={ground} alt="ground" />
    </button>
    <button type="button" className="rock">
      <img src={rock} alt="rock" />
    </button>
    <button type="button" className="ice">
      <img src={ice} alt="ice" />
    </button>
    <button type="button" className="steel">
      <img src={steel} alt="steel" />
    </button>
    <button type="button" className="electric">
      <img src={electric} alt="electric" />
    </button>
    <button type="button" className="fighting">
      <img src={fighting} alt="fighting" />
    </button>
    <button type="button" className="ghost">
      <img src={ghost} alt="ghost" />
    </button>
    <button type="button" className="dark">
      <img src={dark} alt="dark" />
    </button>
    <button type="button" className="psychic">
      <img src={psychic} alt="psychic" />
    </button>
    <button type="button" className="fairy">
      <img src={fairy} alt="fairy" />
    </button>
    <button type="button" className="dragon">
      <img src={dragon} alt="dragon" />
    </button>
    <button type="button" className="normal">
      <img src={normal} alt="normal" />
    </button>
  </div>
);

export default TypesBoard;
