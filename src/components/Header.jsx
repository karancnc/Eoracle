import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [headerActive, setHeaderActive] = useState(false);
  const [headerIsactive, setHeaderIsactive] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHeaderActive(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setHeaderIsactive(isScrollingDown);

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`d-flex ${headerActive ? 'active' : ''} ${headerIsactive ? 'isactive' : ''}`}>
      <Link to="/" className={`brand ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu} > Eoracle </Link>
      <div className={`right_col d-flex ${isMenuOpen ? 'active_menu' : ''}`}>
        <ul className='d-flex'>
          <li><Link to="/" className={` ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu} >Home</Link></li>
          <li><Link to="/Validators" className={` ${location.pathname === '/Validators' ? 'active' : ''}`} onClick={closeMenu} >Validators</Link></li>
          <li><Link to="/DataDapps" className={` ${location.pathname === '/DataDapps' ? 'active' : ''}`} onClick={closeMenu} >Data/ Dapps</Link></li>
          <li><Link to="/Docs" className={` ${location.pathname === '/Docs' ? 'active' : ''}`} onClick={closeMenu} >Docs</Link></li>
        </ul>
        <a href='#' className='wallet' onClick={closeMenu} >Connect Wallet</a>
      </div>
      <a href="#" className="toggle-mnu hidden-lg mobile_toggle" data-class={`${isMenuOpen ? 'on' : ''}`} onClick={handleMenuToggle}><span></span></a>
    </header>
  );
};

export default Header;
