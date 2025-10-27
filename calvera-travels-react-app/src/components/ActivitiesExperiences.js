import React from 'react';
import './ActivitiesExperiences.css';

const ActivitiesExperiences = () => {
    return (
        <div className="activities-experiences-section">
            <div className="container">
                <h2 className="section-title text-center">Activities & Experiences</h2>
                <div className="activities-grid">
                    <div className="activity-item">
                        <i className="fas fa-hiking"></i>
                        <h3>Hiking & Trekking</h3>
                    </div>
                    <div className="activity-item">
                        <i className="fas fa-water"></i>
                        <h3>Water Sports</h3>
                    </div>
                    <div className="activity-item">
                        <i className="fas fa-utensils"></i>
                        <h3>Culinary Tours</h3>
                    </div>
                    <div className="activity-item">
                        <i className="fas fa-spa"></i>
                        <h3>Spa & Wellness</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesExperiences;