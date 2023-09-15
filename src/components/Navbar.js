import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  
  return (
    <nav>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}  className='hamburger-icon'>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <div>
        <h1>Astoria Holistic Pets Spa</h1>
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li onClick={closeMenu}><Link to ="/">Home</Link></li>
        <li onClick={closeMenu}><Link to ="/about">About</Link></li>
        <li onClick={closeMenu}><Link to ="/contact">Contact</Link></li>
        <li onClick={closeMenu}><Link to ="/gallery">Gallery</Link></li>
        <li onClick={closeMenu}><Link to ="/services">Services</Link></li>
        <li onClick={closeMenu}><a href="https://grooming-spa-2275-27-street-astoria-11105.square.site/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { alert('You will be redirected to an external site for processing...'); }}
                >Book Now</a></li>
                  <button onClick={() => changeLanguage('en')}>EN</button>
                  <button onClick={() => changeLanguage('es')}>ES</button>
                   {/* Add buttons for any other languages you support */}
      </ul>
    </nav>
  );
};

export default Navbar;
