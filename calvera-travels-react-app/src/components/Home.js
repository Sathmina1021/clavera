import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Hero from './Hero';
import PopularTours from './PopularTours';
import FeaturedTours from './FeaturedTours';
import DiscountPackages from './DiscountPackages';
import ActivitiesExperiences from './ActivitiesExperiences';
import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />

            <Fade direction="up" triggerOnce>
                <section className="welcome-section">
                    <div className="container">
                        <div className="welcome-content">
                            <h2>Welcome to Calvera Travels — your journey begins here!</h2>
                            <p>At Calvera Travel, we believe every journey tells a story. From the ancient wonders of Sri Lanka's Cultural Triangle to the golden beaches and misty highlands, we craft unforgettable experiences that go beyond travel – they inspire.</p>
                            <p>Whether you dream of exploring iconic landmarks, relaxing in hidden retreats, or discovering authentic local culture, our dedicated team is here to guide you every step of the way.</p>
                        </div>
                    </div>
                </section>
            </Fade>

            <Fade direction="up" triggerOnce>
                <section className="sri-lanka-section">
                    <div className="container">
                        <div className="sri-lanka-content">
                            <h2>Where Every Journey Feels Like Home</h2>
                            <h3>About Sri Lanka</h3>
                            <p>Nestled in the heart of the Indian Ocean, Sri Lanka is a tropical paradise that captures hearts with its natural beauty and cultural charm. Known as the “Pearl of the Indian Ocean,” this island offers a perfect blend of golden beaches, misty mountains, and ancient heritage. From the lush tea gardens of Nuwara Eliya to the wildlife adventures in Yala National Park, every corner of Sri Lanka tells a story waiting to be discovered.</p>
                            <p>Experience the colorful traditions, taste the spices that make Sri Lankan cuisine world-famous, and feel the genuine warmth of its people. Explore ancient cities like Anuradhapura and Polonnawura, surf the waves in Arugam Bay, or relax by the calm waters of Mirissa and Bentota. Whether you seek adventure, relaxation, or spiritual discovery, Sri Lanka promises unforgettable moments and lifelong memories.</p>
                        </div>
                    </div>
                </section>
            </Fade>

            <Fade direction="up" triggerOnce>
                <section className="discover-wonders-section">
                    <div className="container">
                        <div className="discover-wonders-content">
                            <h2>Discover the Wonders of Sri Lanka</h2>
                            <p>Embark on an unforgettable journey through Sri Lanka with our handpicked destinations. Each spot on the map reveals a unique story — from golden beaches and ancient cities to lush mountains and cultural wonders. Let Calvera Travels guide you through the island’s most beautiful and inspiring places.</p>
                            <div className="map-placeholder">
                                <img src="https://i.ibb.co/Qf10111/photo-1501785888041-af3ef285b470-ixlib-rb-4-0.jpg" alt="Map of Sri Lankan Destinations" />
                                <p className="map-caption">Map (Mark Our 20 Destinations)</p>
                            </div>
                            <Link to="/destination" className="btn btn-primary mt-4">
                                Explore All Destinations
                            </Link>
                        </div>
                    </div>
                </section>
            </Fade>

            <Fade direction="up" triggerOnce>
                <section className="why-choose-us-section">
                    <div className="container">
                        <h2 className="section-title text-center">Why Choose Calvera Travels?</h2>
                        <div className="features-grid">
                            <div className="feature-item">
                                <i className="fas fa-route"></i>
                                <h3>Tailored Itineraries</h3>
                                <p>Every trip is uniquely designed to match your dreams and preferences.</p>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-headset"></i>
                                <h3>24/7 Support</h3>
                                <p>Our dedicated team is always available to assist you, anytime, anywhere.</p>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-hand-holding-heart"></i>
                                <h3>Authentic Experiences</h3>
                                <p>Discover the true essence of each destination with local insights.</p>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <h3>Safety & Comfort</h3>
                                <p>Your peace of mind is our priority, ensuring a smooth and secure journey.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>

            <Fade direction="up" triggerOnce>
                <PopularTours />
            </Fade>
            <Fade direction="up" triggerOnce>
                <FeaturedTours />
            </Fade>
            <Fade direction="up" triggerOnce>
                <DiscountPackages />
            </Fade>
            <Fade direction="up" triggerOnce>
                <ActivitiesExperiences />
            </Fade>
        </>
    );
};

export default Home;