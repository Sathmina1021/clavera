import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => {
                setEmail('');
                setSubmitted(false);
            }, 5000);
        }
    };

    return (
        <section className="cta-section">
            {/* Decorative Elements */}
            <div className="cta-decorative-circle circle-1"></div>
            <div className="cta-decorative-circle circle-2"></div>
            <div className="cta-decorative-circle circle-3"></div>
            
            <div className="cta-background"></div>
            
            <div className="cta-content">
                {!submitted ? (
                    <>
                        <div className="cta-info-badge">
                            <i className="fas fa-star"></i>
                            <span>Join 10,000+ Happy Travelers</span>
                        </div>
                        
                        <h2>
                            Start Your <span>Dream Journey</span> Today
                        </h2>
                        <p>
                            Subscribe to our newsletter and get exclusive travel deals, 
                            insider tips, and inspiration delivered straight to your inbox.
                        </p>
                        
                        <div className="cta-form-wrapper">
                            <form className="cta-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit">
                                    Get Started
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="cta-success">
                        <i className="fas fa-check-circle"></i>
                        <h3>Welcome Aboard!</h3>
                        <p>
                            Thank you for subscribing! Check your inbox for exclusive travel offers.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CTA;