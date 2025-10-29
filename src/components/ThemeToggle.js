import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-container">
      <label className="theme-switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider">
          <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;