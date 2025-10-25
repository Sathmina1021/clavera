import React from 'react';

const Hero = () => {
    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL}/images/Front Page Colombo.png)`,
    };

    return (
        <div className="page-hero" style={heroStyle}>
            <div className="hero-content">
                <h1>Discover The Islands<br />With Calvera Travels</h1>
                <p>Your adventure begins here. Let Calvera take you there.</p>
                <a href="Tours.html" className="btn btn-primary">Explore Tours</a>
            </div>
        </div>
    );
};

export default Hero;
