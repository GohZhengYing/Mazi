import { useState } from 'react';

import styles from '../styles/sidebar.module.css';

export default function Sidebar({ onToggle, isCollapsed, setActiveTab }) {

  const handleToggle = () => {
    onToggle(!isCollapsed);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab in the parent
  };
  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <img src='../nav.svg' className = {`${styles.navButton} ${isCollapsed ? '' : styles.navButtonCollapsed}`} onClick={handleToggle} />
      <div className={`${styles.menu} ${isCollapsed ? styles.collapsedMenu : ''}`}>
        <ul>
          <li onClick={() => handleTabClick('chat')}><img src='../chat.svg' /></li>
          <li onClick={() => handleTabClick('contacts')}><img className= {styles.contacts} src='../contacts.svg' /></li>
          <li onClick={() => handleTabClick('community')}><img src='../community.svg' /></li>
        </ul>
        <img className= {styles.settings} src='../settings.svg' onClick={() => handleTabClick('settings')} />
      </div>
    </div>
  );
}
