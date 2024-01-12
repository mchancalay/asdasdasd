import React from 'react'
import { useState, useEffect } from 'react';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// <KeyboardArrowDownIcon sx={{ color: '#010527' }}></KeyboardArrowDownIcon>

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled && 'nav--scrolled'}`}>
      <h2 className='nav__title'>AI Financial</h2>
      <div className='nav__items'>
        <a href="#" className='nav__item'>Home</a>
        <a className='nav__drop-down'>
          <a href="#" className='nav__item'>Solutions</a>

        </a>
        <a href="#" className='nav__item'>Case Studies</a>
        <a href="#" className='nav__item'>FAQ</a>
      </div>
      <button class="button2">Contact</button>
    </nav>
  )
}

export default Navbar
