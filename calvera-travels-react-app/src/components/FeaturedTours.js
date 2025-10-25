import React from 'react';

const FeaturedTours = () => {
    return (
        <section className="page-section">
            <div className="container">
                <h2 className="section-title">Featured Tours</h2>
                <div className="packages-grid">
                    <div className="package-card">
                        <img src="images/Negambo front page.png" alt="Wildlife Safari" />
                        <div className="package-content">
                            <h3>Wildlife Safari & Nature Trails</h3>
                            <p>Encounter exotic wildlife in national parks and explore lush nature trails.</p>
                            <div className="package-info">
                                <span className="price">$1500</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="images/Ruwanweliseya.png" alt="Adventure Sports" />
                        <div className="package-content">
                            <h3>Adventure Sports & Thrills</h3>
                            <p>Get your adrenaline pumping with white-water rafting, surfing, and more!</p>
                            <div className="package-info">
                                <span className="price">$1350</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="images/Anuradhapura Front Page.png" alt="Wellness Retreat" />
                        <div className="package-content">
                            <h3>Wellness & Yoga Retreats</h3>
                            <p>Rejuvenate your mind, body, and soul with serene wellness programs.</p>
                            <div className="package-info">
                                <span className="price">$1050</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="Tours.html" className="btn btn-secondary">View All Featured Tours</a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
