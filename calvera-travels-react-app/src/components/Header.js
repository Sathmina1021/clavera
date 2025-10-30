import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Info Bar - Only visible at top */}
            <div className="top-bar">
                <div className="top-bar-content">
                    <a href="mailto:inquiries@calveratravels.com" className="top-bar-item">
                        <span>Email:</span> inquiries@calveratravels.com
                    </a>
                    <a href="tel:+94771234567" className="top-bar-item">
                        📞 <span>Call Us</span>
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to="/" className="logo">
                        <div className="logo-img">
                            <img src="/images/logo.png" alt="Calvera Travels Logo" />
                        </div>
                        <div className="logo-text">
                            <h2>CALVERA</h2>
                            <span>TRAVELS</span>
                        </div>
                    </NavLink>

                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/AboutUs" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/Destination" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                DESTINATIONS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/Tours" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                TOURS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/Planyourtrip" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                PLAN YOUR TRIP
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/Blog" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                BLOG
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/Contact" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={toggleMenu}
                            >
                                CONTACT US
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav-actions">
                        <button className="icon-btn" aria-label="Search">
                            🔍
                        </button>
                        <div className="menu-toggle">
                            <div className="menu-toggle-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span>MENU</span>
                        </div>
                    </div>

                    <div 
                        className={`hamburger ${isOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
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