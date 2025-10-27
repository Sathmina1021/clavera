import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const backgroundImages = [
        '/images/hero page background/heroback1.png',
        '/images/hero page background/heroback2.png',
        '/images/hero page background/heroback3.png'
    ];

    useEffect(() => {
        // Change background every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const heroStyle = {
        backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
        transition: 'background-image 1s ease-in-out'
    };

    return (
        <div className="page-hero" style={heroStyle}>
            <div className="hero-content">
                <h1>Discover The Islands<br />With Calvera Travels</h1>
                <p>Your adventure begins here. Let Calvera take you there.</p>
                <Link to="/Tours" className="btn btn-primary">Explore Tours</Link>
            </div>
            
            {/* Optional: Add indicator dots */}
            <div className="hero-indicators">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;