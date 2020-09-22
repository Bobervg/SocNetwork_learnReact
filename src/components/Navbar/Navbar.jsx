import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <div>
          <NavLink activeClassName={styles.activeLink} to='/Profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink activeClassName={styles.activeLink} to='/Dialogs'>Messages</NavLink>
        </div>
        <div>
          <NavLink activeClassName={styles.activeLink} to={'/News'}>News</NavLink>
        </div>
        <div>
          <NavLink activeClassName={styles.activeLink} to={'/Music'}>Music</NavLink>
        </div>
        <div>
          <NavLink activeClassName={styles.activeLink} to={'/Settings'}>Settings</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Navbar;