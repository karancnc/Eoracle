import React from 'react';

const Header = () => {
  return (
   <header className='d-flex'>
        <a href="#" target="_blank"  className='brand'> Eoracle </a>
      <div className='right_col d-flex'>
            <ul className='d-flex'>
                <li><a href="#" className='active' target="_blank" >Home</a></li>
                <li><a href="#" target="_blank" >Validators</a></li>
                <li><a href="#" target="_blank" >Data/ Dapps</a></li>
                <li><a href="#" target="_blank" >Docs</a></li>                
            </ul>
            <a href='#' className='wallet'>Connect Wallet</a>
      </div>
   </header>
  );
};

export default Header;