import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar';


const Navbar = (props) => {
  return (
    <div>
      <div className={styles.navbar}>
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
          <img srv='https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png'></img>
          <NavLink activeClassName={styles.activeLink} to={'/Settings'}>Settings</NavLink>
        </div>
      </div>
      <div>
        <FriendsBar bestFriendsData={props.sidebarData.bestFriendsData} />
      </div>
    </div>
  )
}
export default Navbar;