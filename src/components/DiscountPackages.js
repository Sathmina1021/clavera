import React from 'react';
import './DiscountPackages.css';

const DiscountPackages = () => {
    return (
        <div className="discount-packages-section">
            <div className="container">
                <h2 className="section-title text-center">Discount Packages</h2>
                <div className="packages-grid">
                    {/* Placeholder for a single package item */}
                    <div className="package-item">
                        <div className="package-info">
                            <h3>Family Fun Package</h3>
                            <p>A 5-day tour with activities for all ages.</p>
                            <span className="discount">20% Off</span>
                            <span className="price">$999</span>
                        </div>
                    </div>
                    <div className="package-item">
                        <div className="package-info">
                            <h3>Honeymoon Special</h3>
                            <p>A romantic getaway with luxury accommodations.</p>
                            <span className="discount">15% Off</span>
                            <span className="price">$1299</span>
                        </div>
                    </div>
                    <div className="package-item">
                        <div className="package-info">
                            <h3>Adventure Seeker's Deal</h3>
                            <p>An action-packed tour with hiking, surfing, and more.</p>
                            <span className="discount">25% Off</span>
                            <span className="price">$899</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountPackages;