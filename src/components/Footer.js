import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
          <h1 className="footer-title">Thank you for checking out my portfolio!</h1>
          <div className="footer-content">
            <ul className="footer-links">
              {/* <li>
                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
              </li> */}
            </ul>
          </div>
        </footer>
      );
    };

export default Footer;
