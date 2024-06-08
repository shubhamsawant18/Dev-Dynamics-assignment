// NavBar.tsx

import React from 'react';
import './NavBar.css';

interface NavBarProps {
  toggle: () => void;
  isDark: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggle, isDark }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-left">
          <button className="nav-button">Pie-Chart</button>
          <button className="nav-button">Ring-Chart</button>
          <button className="nav-button">Bar-Chart</button>
        </div>
        
        <button onClick={toggle} className="toggle-button">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
