import React, { useEffect, useState } from 'react';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [headerIsactive, setHeaderIsactive] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHeaderActive(true);
    }, 7000);

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
      <a link="#" target="_blank" className='brand'> Eoracle </a>
      <div className={`right_col d-flex ${isMenuOpen ? 'active_menu' : ''}`}>
        <ul className='d-flex'>
          <li><a link="#" className='active' target="_blank" >Home</a></li>
          <li><a link="#" target="_blank" >Validators</a></li>
          <li><a link="#" target="_blank" >Data/ Dapps</a></li>
          <li><a link="#" target="_blank" >Docs</a></li>
        </ul>
        <a link='#' className='wallet'>Connect Wallet</a>
      </div>
      <a href="#" className="toggle-mnu hidden-lg mobile_toggle" data-class= {`${isMenuOpen ? 'on' : ''}`} onClick={handleMenuToggle}><span></span></a>
    </header>
  );
};

export default Header;
