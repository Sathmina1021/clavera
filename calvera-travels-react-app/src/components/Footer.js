import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logo">
                            <div className="logo-img">
                                <img src="images/logo.png" alt="Calvera Travels Logo" />
                            </div>
                            <div className="logo-text">
                                <h2>CALVERA</h2>
                                <span>TRAVELS</span>
                            </div>
                        </div>
                        <p>Creating unforgettable travel experiences since 2013.</p>
                        <div className="social-icons">
                            <a href="/"><i className="fab fa-facebook"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/AboutUs">About Us</Link></li>
                            <li><Link to="/Destination">Destinations</Link></li>
                            <li><Link to="/Tours">Tours</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/Planyourtrip">Plan your Trip</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/rules-and-regulation">Rules and regulation</Link></li>
                            <li><Link to="/qa">Q and A</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-condition">Terms and Condition</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                        <p><i className="fas fa-envelope"></i> info@calveratravels.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> 123 Travel Street, Colombo, Sri Lanka</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Calvera Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;