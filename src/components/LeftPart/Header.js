import React from 'react';

const Header = () => (
  <div className="header">
    <div className="radar">
      <div className="bluePart">
        <div className="light" />
      </div>
    </div>
    <div className="lights">
      <div className="red" />
      <div className="yellow" />
      <div className="green" />
    </div>
  </div>
);

export default Header;