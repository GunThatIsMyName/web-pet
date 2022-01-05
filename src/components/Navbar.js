import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/game">game</Link>
      <Link to="/show">show</Link>
    </div>
  );
}

export default Navbar;
