import React from 'react';

import './card.scss';

const Card = () => (
  <div className="card">
    <div className="image">
      {/* an image will be displayed here */}
    </div>
    <div className="identity">
      <div className="name">
        <h2>Nom du Pokémon</h2>
      </div>
      <div className="types">
        <div className="type">
          <h4>ice</h4>
        </div>
        <div className="type">
          <h4>fighting</h4>
        </div>
      </div> 
    </div>
  </div>
);

export default Card;
