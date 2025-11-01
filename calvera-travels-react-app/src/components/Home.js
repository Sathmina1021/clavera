import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Hero from './Hero';
// import PopularTours from './PopularTours';     // <-- REMOVED (FIXES ERROR)
// import FeaturedTours from './FeaturedTours';   // <-- REMOVED (FIXES ERROR)
// import DiscountPackages from './DiscountPackages'; // <-- REMOVED (FIXES ERROR)

import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />  

            {/* =========== WELCOME SECTION =========== */}
            <Fade direction="up" triggerOnce>
                <section className="welcome-section"
                    style={{ '--welcome-background-image': `url(${process.env.PUBLIC_URL}/images/home%20page/welcomesetion/welcomeback.jpg)` }}
                >
                    {/* Animated Background Shapes */}
                    <div className="welcome-bg-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                    </div>

                    {/* Decorative Floating Circles */}
                    <div className="welcome-decorative-circle circle-top-right"></div>
                    <div className="welcome-decorative-circle circle-bottom-left"></div>
                    <div className="welcome-decorative-circle circle-center"></div>
                    
                    {/* Colorful Particles */}
                    <div className="color-particles">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                        <div className="particle particle-4"></div>
                        <div className="particle particle-5"></div>
                        <div className="particle particle-6"></div>
                    </div>
                    
                    <div className="container">
                        <div className="welcome-content">
                            {/* Welcome Icon with Glass Effect */}
                            <div className="welcome-icon-wrapper">
                                <div className="welcome-icon">
                                    <div className="icon-glow"></div>
                                    <i className="fas fa-compass"></i>
                                </div>
                            </div>
                            
                            {/* Main Heading - Centered */}
                            <h2 className="welcome-main-title">
                                Welcome to <span className="highlight">Calvera Travels</span>
                            </h2>
                            
                            {/* Subtitle - Below Main Title */}
                            <p className="welcome-subtitle">
                                <span className="subtitle-icon">✨</span>
                                Your journey begins here!
                                <span className="subtitle-icon">✨</span>
                            </p>

                            {/* Description - Flowing Text */}
                            <div className="welcome-description">
                                <div className="flow-text">
                                    <div className="text-glow-effect"></div>
                                    <p>
                                        At Calvera Travel, we believe every journey tells a story. From the ancient wonders 
                                        of Sri Lanka's Cultural Triangle to the golden beaches and misty highlands, we craft 
                                        unforgettable experiences that go beyond travel. Whether you dream of exploring iconic 
                                        landmarks, relaxing in hidden retreats, or discovering authentic local culture, our 
                                        dedicated team is here to guide you every step of the way.
                                    </p>
                                </div>
                            </div>

                            {/* Stats Section - Inline Flow with Colorful Cards */}
                            <div className="welcome-stats-flow">
                                <div className="stat-flow-item stat-gradient-1">
                                    <div className="stat-glow-bg"></div>
                                    <div className="stat-flow-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="stat-flow-content">
                                        <span className="stat-flow-number">1000+</span>
                                        <span className="stat-flow-label">Happy Travelers</span>
                                    </div>
                                </div>

                                <div className="stat-divider"></div>

                                <div className="stat-flow-item stat-gradient-2">
                                    <div className="stat-glow-bg"></div>
                                    <div className="stat-flow-icon">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div className="stat-flow-content">
                                        <span className="stat-flow-number">20+</span>
                                        <span className="stat-flow-label">Destinations</span>
                                    </div>
                                </div>

                                <div className="stat-divider"></div>

                                <div className="stat-flow-item stat-gradient-3">
                                    <div className="stat-glow-bg"></div>
                                    <div className="stat-flow-icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div className="stat-flow-content">
                                        <span className="stat-flow-number">10+</span>
                                        <span className="stat-flow-label">Years Experience</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button - Centered at Bottom */}
                            <div className="welcome-cta-center">
                                <Link to="/tours" className="btn-journey glass-button">
                                    <span className="btn-bg-gradient"></span>
                                    <span className="btn-bg-glow"></span>
                                    <span className="btn-content">
                                        <span className="btn-text">Start Your Journey</span>
                                        <span className="btn-icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </span>
                                    <span className="btn-ripple"></span>
                                    <span className="btn-shine"></span>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="trust-badges-colorful">
                                <div className="trust-badge badge-1">
                                    <i className="fas fa-certificate"></i>
                                    <span>Certified Agency</span>
                                </div>
                                <div className="trust-badge badge-2">
                                    <i className="fas fa-shield-check"></i>
                                    <span>Safe & Secure</span>
                                </div>
                                <div className="trust-badge badge-3">
                                    <i className="fas fa-heart"></i>
                                    <span>Customer First</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>

            {/* =========== SRI LANKA SECTION =========== */}
            <Fade direction="up" triggerOnce>
                <section 
                    className="sri-lanka-section"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${process.env.PUBLIC_URL}/images/home%20page/sri%20lanka%20section/sri%20lankaback.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="container">
                        <div className="sri-lanka-content">
                            <div className="section-badge">
                                <i className="fas fa-gem"></i>
                                <span>Pearl of the Indian Ocean</span>
                            </div>
                            <h2>Where Every Journey Feels Like Home</h2>
                            <h3>About Sri Lanka</h3>
                            <p>
                                Nestled in the heart of the Indian Ocean, Sri Lanka is a tropical paradise that 
                                captures hearts with its natural beauty and cultural charm. Known as the "Pearl of 
                                the Indian Ocean," this island offers a perfect blend of golden beaches, misty 
                                mountains, and ancient heritage. From the lush tea gardens of Nuwara Eliya to the 
                                wildlife adventures in Yala National Park, every corner of Sri Lanka tells a story 
                                waiting to be discovered.
                            </p>
                            <p>
                                Experience the colorful traditions, taste the spices that make Sri Lankan cuisine 
                                world-famous, and feel the genuine warmth of its people. Explore ancient cities like 
                                Anuradhapura and Polonnaruwa, surf the waves in Arugam Bay, or relax by the calm 
                                waters of Mirissa and Bentota. Whether you seek adventure, relaxation, or spiritual 
                                discovery, Sri Lanka promises unforgettable moments and lifelong memories.
                            </p>
                        </div>
                    </div>
                </section>
            </Fade>

            {/* =========== DISCOVER SECTION =========== */}
            <Fade direction="up" triggerOnce>
                <section 
                    className="discover-wonders-section"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL}/images/home%20page/discover/discoverback.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="container">
                        <div className="discover-wonders-content">
                            <div className="discover-header">
                                <i className="fas fa-location-arrow discover-icon"></i>
                                <h2>Discover the Wonders of Sri Lanka</h2>
                            </div>
                            <p>
                                Embark on an unforgettable journey through Sri Lanka with our handpicked destinations. 
                                Each spot on the map reveals a unique story — from golden beaches and ancient cities 
                                to lush mountains and cultural wonders. Let Calvera Travels guide you through the 
                                island's most beautiful and inspiring places.
                            </p>
                            <div className="map-placeholder">
                                <div className="map-frame">
                                    
                                </div>
                                <p className="map-caption">
                                    <i className="fas fa-map-pin"></i>
                                    Explore Our 20 Handpicked Destinations
                                </p>
                            </div>
                            <Link to="/destination" className="btn btn-primary mt-4">
                                <span>Explore All Destinations</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </Fade>

            {/* =========== WHY CHOOSE US SECTION =========== */}
        <Fade direction="up" triggerOnce>
    <section 
        className="why-choose-us-section"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.90)), url(${process.env.PUBLIC_URL}/images/home%20page/why%20chose/whyback.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
    >
        <div className="container">
            <div className="section-header">
                
                <h2 className="section-title">
                     <span className="brand-name">Why Choose Calvera Travels?</span> 
                </h2>
                <span className="section-subtitle">Your Trusted Travel Partner</span>
                <div className="title-underline"></div>
            </div>
            <div className="features-grid">
                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <h3>Personalized Journeys</h3>
                    <p>Meticulously crafted itineraries that transform your travel aspirations into unforgettable adventures.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <i className="fas fa-user-shield"></i>
                    </div>
                    <h3>Expert Guidance</h3>
                    <p>Round-the-clock support from seasoned travel professionals who care about every detail of your experience.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <i className="fas fa-gem"></i>
                    </div>
                    <h3>Authentic Discoveries</h3>
                    <p>Immerse yourself in genuine cultural experiences with curated local connections and hidden treasures.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon-wrapper">
                        <i className="fas fa-award"></i>
                    </div>
                    <h3>Premium Quality</h3>
                    <p>Uncompromising standards in safety, comfort, and service excellence throughout your entire journey.</p>
                </div>
            </div>
                </div>
                 </section>
        </Fade>
    
            {}

        </>
    );
};

export default Home;