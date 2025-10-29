import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    
    const backgroundImages = [
        '/images/home page/hero page background/heroback1 (1).jpg',
        '/images/home page/hero page background/heroback2.jpg',
        '/images/home page/hero page background/heroback3.JPG'
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Background image rotation
        useEffect(() => {
            const interval = setInterval(() => {
                setTimeout(() => {
                    setCurrentImageIndex((prevIndex) =>
                        (prevIndex + 1) % backgroundImages.length
                    );
                }, 500);
            }, 5000);
    
            return () => clearInterval(interval);
        }, [backgroundImages.length]);
    const handleDotClick = (index) => {
        if (index !== currentImageIndex) {
            setTimeout(() => {
                setCurrentImageIndex(index);
            }, 500);
        }
    };

    return (
        <div className={`page-hero ${scrolled ? 'scrolled' : ''}`}>
            {/* Background Images with Crossfade */}
            <div className="hero-backgrounds">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url("${image}")` }}
                    />
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="hero-overlay"></div>

            {/* Animated Particles/Decorations */}
            <div className="hero-decorations">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
            </div>

            {/* Hero Content */}
            <div className="hero-content">
                <div className="hero-badge">
                    <i className="fas fa-paper-plane"></i>
                    <span>Premium Travel Experience</span>
                </div>
                
                <h1 className="hero-title">
                    Discover The Islands<br />
                    <span className="highlight">With Calvera Travels</span>
                </h1>
                
                <p className="hero-subtitle">
                    Your adventure begins here. Let Calvera take you there.
                </p>

                <div className="hero-actions">
                    <Link to="/tours" className="btn btn-primary btn-hero">
                        <span>Explore Tours</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link to="/destination" className="btn btn-secondary btn-hero">
                        <span>View Destinations</span>
                        <i className="fas fa-map-marked-alt"></i>
                    </Link>
                </div>

                {/* Feature Pills */}
                <div className="hero-features">
                    <div className="feature-pill">
                        <i className="fas fa-shield-alt"></i>
                        <span>Safe Travel</span>
                    </div>
                    <div className="feature-pill">
                        <i className="fas fa-star"></i>
                        <span>Best Prices</span>
                    </div>
                    <div className="feature-pill">
                        <i className="fas fa-headset"></i>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
            
            {/* Image Indicators */}
            <div className="hero-indicators">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className="dot-progress"></span>
                    </button>
                ))}
            </div>

            {/* Side Navigation Arrows */}
            <button 
                className="hero-nav-arrow arrow-prev"
                onClick={() => handleDotClick((currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length)}
                aria-label="Previous slide"
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <button 
                className="hero-nav-arrow arrow-next"
                onClick={() => handleDotClick((currentImageIndex + 1) % backgroundImages.length)}
                aria-label="Next slide"
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Hero;