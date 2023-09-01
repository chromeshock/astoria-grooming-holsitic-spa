import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <nav>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} className={'icon-button'}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <div>
        <h1>Astoria Holistic Pets Spa</h1>
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        <li><Link to ="/gallery">Gallery</Link></li>
        <li><Link to ="/services">Services</Link></li>
        <li><a href="https://grooming-spa-2275-27-street-astoria-11105.square.site/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { alert('You will be redirected to an external site for processing...'); }}
                >Book Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;