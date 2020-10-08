import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://w7.pngwing.com/pngs/813/735/png-transparent-bird-of-prey-logo-beak-desktop-bird-animals-computer-logo.png"></img>
      <div className={styles.loginbar}>
        {props.isLogged ?
        <div>
          <div>
          {props.id}
          </div>
          <div>
            {props.email}
          </div>
          <div>
          {props.login}
          </div>
          </div> 
              : <NavLink to='/login'>Login</NavLink>}
              </div>
    </header>

  )
}
export default Header;