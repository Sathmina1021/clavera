import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
                        <div className="footer-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="logo">
                            <img src="images/logo.png" alt="Calvera Travels Logo" className="logo-img" />
                            <div className="logo-text">
                                <h2>CALVERA</h2>
                                <span>Travels</span>
                            </div>
                        </div>
                        <p className="tagline">"Jobs fill your pocket, but adventures fill your soul."</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h3>Explore</h3>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/AboutUs">About Us</Link></li>
                            <li><Link to="/Destination">Destinations</Link></li>
                            <li><Link to="/Tours">Tours</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section links">
                        <h3>Plan & Support</h3>
                        <ul>
                            <li><Link to="/Planyourtrip">Plan Your Trip</Link></li>
                            <li><Link to="/qa">Q&A</Link></li>
                            <li><Link to="/rules-and-regulation">Regulations</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-condition">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h3>Get in Touch</h3>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i><span>123 Travel Street, Colombo, Sri Lanka</span></li>
                            <li><i className="fas fa-phone"></i><span>+94 77 123 4567</span></li>
                            <li><i className="fas fa-envelope"></i><span>info@calveratravels.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Calvera Travels PVT. All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;