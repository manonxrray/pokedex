import React from 'react';
import { Search } from 'react-feather';

import './research.scss';

const Research = () => (
  <div className="research">
    <form>
      <input type="text" placeholder="What Pokemon are you looking for ?" />
      <button type="submit" className="submit">
        <Search className="glass" />
      </button>
    </form>
  </div>
);

export default Research;
