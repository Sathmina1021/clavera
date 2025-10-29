import React from 'react';
import './FeaturedTours.css';

const FeaturedTours = () => {
    return (
        <div className="featured-tours-section">
            <div className="container">
                <h2 className="section-title text-center">Featured Tours</h2>
                <div className="tours-grid">
                    {/* Placeholder for a single tour item */}
                    <div className="tour-item">
                        <img src="https://i.ibb.co/KzC5C9Y/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Tour 1" />
                        <div className="tour-info">
                            <h3>Cultural Triangle Expedition</h3>
                            <p>A 7-day journey through the heart of Sri Lanka's history.</p>
                            <span className="price">$750</span>
                        </div>
                    </div>
                    <div className="tour-item">
                        <img src="https://i.ibb.co/KzC5C9Y/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Tour 2" />
                        <div className="tour-info">
                            <h3>Hill Country & Tea Plantations</h3>
                            <p>Discover the lush green landscapes of Nuwara Eliya and Ella.</p>
                            <span className="price">$550</span>
                        </div>
                    </div>
                    <div className="tour-item">
                        <img src="https://i.ibb.co/KzC5C9Y/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Tour 3" />
                        <div className="tour-info">
                            <h3>Southern Coast Adventure</h3>
                            <p>Relax on the golden beaches and explore the historic Galle Fort.</p>
                            <span className="price">$600</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTours;