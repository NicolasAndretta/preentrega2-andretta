import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Brand</Link>
      <ul>
        <li><Link to="/category/wash">Wash</Link></li>
        <li><Link to="/category/detailing">Detailing</Link></li>
        <li><Link to="/category/protection">Protection</Link></li>
      </ul>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;