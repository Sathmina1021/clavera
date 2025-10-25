import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend or a mailing list service
        console.log('Email submitted:', email);
        setIsSubmitted(true);

        // Optional: Reset form after a few seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
        }, 5000);
    };

    return (
        <section className="page-section cta-section">
            <div className="cta-background"></div>
            <div className="container">
                <div className="cta-content text-center">
                    {isSubmitted ? (
                        <div className="cta-success">
                            <i className="fas fa-check-circle"></i>
                            <h2>Thank You!</h2>
                            <p>You're on the list! Keep an eye on your inbox for travel inspiration and exclusive deals.</p>
                        </div>
                    ) : (
                        <>
                            <h2>Get Inspired for Your Next Trip</h2>
                            <p>Subscribe to our newsletter for a weekly dose of travel tips, destination guides, and exclusive offers.</p>
                            <form className="cta-form" onSubmit={handleSubmit}>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your email address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-paper-plane"></i>
                                    Subscribe
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTA;
