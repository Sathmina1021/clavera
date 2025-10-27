import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to="/" className="logo">
                        <div className="logo-img">
                            <img src="images/logo.png" alt="Calvera Travels Logo" />
                        </div>
                        <div className="logo-text">
                            <h2>CALVERA</h2>
                            <span>TRAVELS</span>
                        </div>
                    </NavLink>
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li className="nav-item"><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>HOME</NavLink></li>
                        <li className="nav-item"><NavLink to="/AboutUs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>ABOUTUS</NavLink></li>
                        <li className="nav-item"><NavLink to="/Destination" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>DESTINATIONS</NavLink></li>
                        <li className="nav-item"><NavLink to="/Tours" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>TOURS</NavLink></li>
                        <li className="nav-item"><NavLink to="/Planyourtrip" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>PLAN YOUR TRIP</NavLink></li>
                        <li className="nav-item"><NavLink to="/Blog"className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>BLOG</NavLink></li>
                        <li className="nav-item"><NavLink to="/Contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>CONTACT US</NavLink></li>
                    </ul>
                    <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
