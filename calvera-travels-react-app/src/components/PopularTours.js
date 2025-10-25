import React from 'react';

const PopularTours = () => {
    return (
        <section className="page-section">
            <div className="container">
                <h2 className="section-title">Popular Tours</h2>
                <div className="packages-grid">
                    <div className="package-card">
                        <img src="images/Full anuradhapura.png" alt="Cultural Wonders" />
                        <div className="package-content">
                            <h3>Cultural Wonders of Sri Lanka</h3>
                            <p>Explore the ancient cities, temples, and historical sites of the Cultural Triangle. A journey through time.</p>
                            <div className="package-info">
                                <span className="price">$1200</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="images/Browns Beach .png" alt="Beach Paradise" />
                        <div className="package-content">
                            <h3>Sun-Kissed Beaches & Coastal Bliss</h3>
                            <p>Relax on the golden sands of Sri Lanka's most beautiful beaches. A perfect tropical getaway.</p>
                            <div className="package-info">
                                <span className="price">$950</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="images/Ganagaramaya.png" alt="Highland Adventure" />
                        <div className="package-content">
                            <h3>Misty Highlands & Tea Trails</h3>
                            <p>Discover the lush green tea plantations and misty mountains of the hill country. A refreshing escape.</p>
                            <div className="package-info">
                                <span className="price">$1100</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="Tours.html" className="btn btn-secondary">View All Tours</a>
                </div>
            </div>
        </section>
    );
};

export default PopularTours;
