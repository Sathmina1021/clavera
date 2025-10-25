import React from 'react';

const ActivitiesExperiences = () => {
    return (
        <section className="page-section">
            <div className="container">
                <h2 className="section-title">Activities & Experiences</h2>
                <div className="packages-grid">
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1491466424936-e304919aFCd2?w=400&h=250&fit=crop" alt="Yoga Retreat" />
                        <div className="package-content">
                            <h3>Peaceful Yoga Retreat</h3>
                            <p>Find your inner peace with a yoga and meditation retreat nestled in a serene mountain valley.</p>
                            <div className="package-info">
                                <span className="price">$1300</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1531592937801-4ca1dc684484?w=400&h=250&fit=crop" alt="City Tour" />
                        <div className="package-content">
                            <h3>Vibrant City Exploration</h3>
                            <p>Discover the hidden gems of a bustling metropolis, from street food tours to rooftop bars.</p>
                            <div className="package-info">
                                <span className="price">$1100</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1529655683826-1c21ef24b5b3?w=400&h=250&fit=crop" alt="Museum Hopping" />
                        <div className="package-content">
                            <h3>Historical Museum Hopping</h3>
                            <p>Immerse yourself in art and history with guided tours of world-renowned museums and galleries.</p>
                            <div className="package-info">
                                <span className="price">$900</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="Tours.html" className="btn btn-secondary">View All Activities</a>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesExperiences;
