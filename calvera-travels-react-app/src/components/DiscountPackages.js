import React from 'react';

const DiscountPackages = () => {
    return (
        <section className="page-section">
            <div className="container">
                <h2 className="section-title">Discount Packages</h2>
                <div className="packages-grid">
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1520454974442-9a81e16331a8?w=400&h=250&fit=crop" alt="Island Hopping" />
                        <div className="package-content">
                            <h3>Tropical Island Hopping</h3>
                            <p>Hop between serene islands, snorkel in crystal-clear waters, and enjoy breathtaking sunsets.</p>
                            <div className="package-info">
                                <span className="price">$1500</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400&h=250&fit=crop" alt="Luxury Villa" />
                        <div className="package-content">
                            <h3>Luxury Overwater Villa</h3>
                            <p>Indulge in a private overwater villa with direct ocean access and world-class amenities.</p>
                            <div className="package-info">
                                <span className="price">$2500</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" alt="Mountain Trek" />
                        <div className="package-content">
                            <h3>Himalayan Mountain Trek</h3>
                            <p>Embark on a challenging trek through the majestic Himalayas, with stunning panoramic views.</p>
                            <div className="package-info">
                                <span className="price">$1800</span>
                                <a href="Tours.html" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="Tours.html" className="btn btn-secondary">View All Discount Packages</a>
                </div>
            </div>
        </section>
    );
};

export default DiscountPackages;
