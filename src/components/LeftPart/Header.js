import React from 'react';

const Header = () => (
  <div className="header">
    <div className="left">
      <div className="radar">
        <div className="bluepart">
          <div className="light" />
        </div>
      </div>
      <div className="lights">
        <div className="red small" />
        <div className="yellow small" />
        <div className="green small" />
      </div>
    </div>
    <div className="right" />
  </div>
);

export default Header;