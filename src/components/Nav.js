import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
