import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">
                        <div className="logo-img">
                            <img src="images/logo.png" alt="Calvera Travels Logo" />
                        </div>
                        <div className="logo-text">
                            <h2>CALVERA</h2>
                            <span>TRAVELS</span>
                        </div>
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item"><Link to="/Home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/AboutUs" className="nav-link">ABOUTUS</Link></li>
                        <li className="nav-item"><Link to="/Destination" className="nav-link">DESTINATIONS</Link></li>
                        <li className="nav-item"><Link to="/Tours" className="nav-link">TOURS</Link></li>
                        <li className="nav-item"><Link to="/Planyourtrip" className="nav-link">PLAN YOUR TRIP</Link></li>
                        <li className="nav-item"><Link to="/Blog"className="nav-link">Blog</Link></li>
                        <li className="nav-item"><Link to="/Contact" className="nav-link">CONTACT</Link></li>
                    </ul>
                    <div className="hamburger">
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
