import React from 'react';
import './PopularTours.css';

const PopularTours = () => {
    return (
        <div className="popular-tours-section">
            <div className="container">
                <h2 className="section-title text-center">Popular Tours</h2>
                <div className="tours-grid">
                    {/* Placeholder for a single tour item */}
                    <div className="tour-item">
                        <img src="https://i.ibb.co/KzC5C9Y/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Tour 1" />
                        <div className="tour-info">
                            <h3>Ancient Ruins of Polonnaruwa</h3>
                            <p>Explore the rich history of Sri Lanka's second ancient capital.</p>
                            <span className="price">$150</span>
                        </div>
                    </div>
                    <div className="tour-item">
                        <img src="https://i.ibb.co/KzC5C9Y/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Tour 2" />
                        <div className="tour-info">
                            <h3>Whale Watching in Mirissa</h3>
                            <p>Witness the majestic blue whales in their natural habitat.</p>
                            <span className="price">$100</span>
                        </div>
                    </div>
                    <div className="tour-item">
                        <img src="https://i.ibb.co/KzC5C9Y/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Tour 3" />
                        <div className="tour-info">
                            <h3>Sigiriya Rock Fortress</h3>
                            <p>Climb the iconic rock fortress for breathtaking views.</p>
                            <span className="price">$120</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularTours;