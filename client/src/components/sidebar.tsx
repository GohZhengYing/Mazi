import { useState } from 'react';
import styles from '../styles/sidebar.module.css';

export default function Sidebar({ onToggle, isCollapsed }) {

  const handleToggle = () => {
    onToggle(!isCollapsed);
  };

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <img src='./nav.svg' className = {`${styles.navButton} ${isCollapsed ? '' : styles.navButtonCollapsed}`} onClick={handleToggle} />
      <div className={`${styles.menu} ${isCollapsed ? styles.collapsedMenu : ''}`}>
        <ul>
          <li><img src='./chat.svg' /></li>
          <li><img className= {styles.contacts} src='./contacts.svg' /></li>
          <li><img src='./community.svg' /></li>
        </ul>
        <img className= {styles.settings} src='./settings.svg' />
      </div>
    </div>
  );
}
