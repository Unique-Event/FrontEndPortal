import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>

        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <img src = '/FOTOS/logoOficial.png' alt ="logo" id ="logo"></img>
            <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           {/* <li className='nav-item'>
             <Link to='/users' className='nav-links-mobile' onClick={closeMobileMenu}>
               Entrar
             </Link>
             {button && <Button buttonStyle='btn--outline'> Entrar </Button>}
           </li> */}
           <li>
            <Link to='/registration' className='nav-links-mobile' onClick={closeMobileMenu}>
               Cadastrar
            </Link>
           </li>
         </ul>
          {button && <Button buttonStyle='btn--outline'>Cadastrar</Button>}
      </nav>
    </>
  );
}
 export default Navbar;