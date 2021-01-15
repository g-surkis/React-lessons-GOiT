import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      Menu
      <Link to="/">Home</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/product">Product</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/animation">Animation</Link>
    </div>
  );
}

export default Menu;
