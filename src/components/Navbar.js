import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <nav>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        <li><Link to ="/gallery">Gallery</Link></li>
        <li><Link to ="/services">Services</Link></li>
        <a href="https://grooming-spa-2275-27-street-astoria-11105.square.site/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { alert('You will be redirected to an external site for processing...'); }}
                >Book Now</a>
      </ul>
    </nav>
  );
};

export default Navbar;