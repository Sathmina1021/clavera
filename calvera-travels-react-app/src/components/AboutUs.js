import React, { useState, useEffect } from 'react';
import './About.css';

const AboutUs = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    '/images/AboutUs/AHEROback/aboutback.jpg',
    '/images/AboutUs/AHEROback/Aheroback2.jpg',
    '/images/AboutUs/AHEROback/Aheroback3.jpg'
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Travel Specialist',
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png'
    },
    {
      name: 'Sam Wilson',
      role: 'Head of Operations',
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png'
    }
  ];

  const values = [
    { 
      icon: 'fas fa-globe-asia', 
      title: 'Authenticity', 
      description: 'We provide genuine experiences that connect you with the local culture.',
      color: '#ff6b00'
    },
    { 
      icon: 'fas fa-heart', 
      title: 'Passion', 
      description: 'We are passionate about travel and dedicated to crafting your perfect journey.',
      color: '#e91e63'
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Quality & Safety', 
      description: 'Your safety and comfort are our top priorities. We ensure the highest standards.',
      color: '#00bcd4'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section with Rotating Backgrounds */}
      <div className="page-hero about-hero">
        {/* Background Images */}
        <div className="hero-backgrounds">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-background ${index === currentHeroImage ? 'active' : ''}`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>

        {/* Colorful Overlay */}
        <div className="hero-overlay-colorful"></div>

        {/* Animated Shapes */}
        <div className="hero-decorations">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
          <div className="hero-shape shape-4"></div>
        </div>

        {/* Floating Particles */}
        <div className="hero-particles">
          <div className="particle p-1"></div>
          <div className="particle p-2"></div>
          <div className="particle p-3"></div>
          <div className="particle p-4"></div>
          <div className="particle p-5"></div>
          <div className="particle p-6"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-users"></i>
            <span>Est. 2014</span>
          </div>
          <h1>
            <span className="hero-title-line">About</span>
            <span className="hero-title-highlight">Calvera Travels</span>
          </h1>
          <p className="hero-description">
            Crafting unforgettable journeys with passion and expertise.
          </p>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="stat-value">1000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="stat-value">20+</span>
              <span className="stat-label">Destinations</span>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === currentHeroImage ? 'active' : ''}`}
              onClick={() => setCurrentHeroImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-down-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to discover</span>
        </div>
      </div>

      {/* Welcome Section with Background */}
      <section 
        className="page-section welcome-section"
        style={{
          backgroundImage: `url('/images/AboutUs/Awelcomeback/Awelcomesec.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(245, 247, 250, 0.92)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-fancy">
            <span className="section-badge">
              <i className="fas fa-hand-sparkles"></i>
              Our Story
            </span>
            <h2 className="section-title">Welcome to Calvera Travel</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
             
            </div>
          </div>
          <div className="text-content glass-card">
            <p>Welcome to Calvera Travel, where every journey is crafted with passion, purpose, and a personal touch.</p>
            <p>We are a full-service travel company based in Sri Lanka, dedicated to curating unforgettable travel experiences across the island and beyond.</p>
            <p>At Calvera, travel isn't just about reaching a destination — it's about discovering new cultures, meeting people, and creating memories that last a lifetime.</p>
            <p>Whether you're looking for a relaxing beach escape, a cultural adventure, a wildlife expedition, or a luxury honeymoon, our team ensures every detail is handled with care — from your first inquiry to the moment you return home.</p>
          </div>
        </div>
      </section>

      {/* What We Do Section with Background */}
      <section 
        className="page-section what-we-do-section"
        style={{
          backgroundImage: `url('/images/AboutUs/Awhatwedoback/AWWDO.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        {/* Warm overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 236, 210, 0.90)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-fancy">
            <span className="section-badge badge-orange">
              <i className="fas fa-briefcase"></i>
              Our Services
            </span>
            <h2 className="section-title text-center">What We Do</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              
            </div>
          </div>
          <div className="what-we-do-content glass-card">
            <p>At Calvera, we specialize in custom-designed travel experiences that suit your style, budget, and purpose.</p>
            <h3>Our services include:</h3>
            <ul className="services-list">
              <li>
                <span className="list-icon">🗺️</span>
                <div>
                  <strong>Tailor-made Tours</strong>
                  <p>Personalized itineraries designed around your interests.</p>
                </div>
              </li>
              <li>
                <span className="list-icon">🏨</span>
                <div>
                  <strong>Hotel Bookings & Transport</strong>
                  <p>Comfortable stays and reliable transfers across Sri Lanka.</p>
                </div>
              </li>
              <li>
                <span className="list-icon">🏞️</span>
                <div>
                  <strong>Adventure & Nature Tours</strong>
                  <p>From misty hill-country treks to ocean safaris.</p>
                </div>
              </li>
              <li>
                <span className="list-icon">🏛️</span>
                <div>
                  <strong>Cultural & Heritage Trips</strong>
                  <p>Explore the rich traditions, temples, and festivals of our island.</p>
                </div>
              </li>
              <li>
                <span className="list-icon">💼</span>
                <div>
                  <strong>Corporate & Group Travel</strong>
                  <p>Seamless planning for meetings, incentives, and events.</p>
                </div>
              </li>
            </ul>
            <p>We combine local knowledge with global standards to bring you experiences that are authentic, safe, and unforgettable.</p>
          </div>
        </div>
      </section>

      {/* Our Promise Section with Background */}
      <section 
        className="page-section our-promise-section"
      >
        {/* Pink overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 154, 158, 0.88)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-fancy">
            <span className="section-badge badge-pink">
              <i className="fas fa-handshake"></i>
              Our Commitment
            </span>
            <h2 className="section-title text-center">Our Promise</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              
            </div>
          </div>
          <div className="promise-content glass-card">
            <p>to deliver journeys filled with trust, comfort, and inspiration.</p>
            <p>We believe every traveler deserves more than a tour; they deserve an experience that feels personal, meaningful, and perfectly planned.</p>
            <h3>We promise to:</h3>
            <ul className="promise-list">
              <li><i className="fas fa-check-circle"></i> Listen carefully to your needs and expectations.</li>
              <li><i className="fas fa-check-circle"></i> Provide transparent pricing and honest guidance.</li>
              <li><i className="fas fa-check-circle"></i> Ensure safety, comfort, and responsible travel practices.</li>
              <li><i className="fas fa-check-circle"></i> Be available 24/7 for support and assistance.</li>
            </ul>
            <p>you discover the soul of each place with confidence and care.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Calvera Travel Section with Background */}
      <section 
        className="page-section why-choose-us-section"
        style={{
          backgroundImage: `url('/images/AboutUs/Awhychose/AWCCT.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        {/* Blue overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(168, 237, 234, 0.90)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-fancy">
            <span className="section-badge badge-blue">
              <i className="fas fa-star"></i>
              Why Us
            </span>
            <h2 className="section-title text-center">Why Choose Calvera Travel</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
             
            </div>
          </div>
          <p className="text-center section-intro">We don't just take you places — we help you experience them in ways you'll never forget.</p>
          <div className="why-choose-grid">
            <div className="why-card card-1">
              <div className="why-icon"><i className="fas fa-user-tie"></i></div>
              <p>Professional, experienced travel planners</p>
            </div>
            <div className="why-card card-2">
              <div className="why-icon"><i className="fas fa-route"></i></div>
              <p>Personalized itineraries for every type of traveler</p>
            </div>
            <div className="why-card card-3">
              <div className="why-icon"><i className="fas fa-handshake"></i></div>
              <p>Strong partnerships with trusted hotels and tour operators</p>
            </div>
            <div className="why-card card-4">
              <div className="why-icon"><i className="fas fa-headset"></i></div>
              <p>24/7 traveler support and on-ground assistance</p>
            </div>
            <div className="why-card card-5">
              <div className="why-icon"><i className="fas fa-leaf"></i></div>
              <p>Commitment to sustainable and ethical tourism</p>
            </div>
            <div className="why-card card-6">
              <div className="why-icon"><i className="fas fa-comments"></i></div>
              <p>Transparent communication and flexible booking options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meaning of CALVERA Section */}
      <section className="page-section meaning-calvera-section">
        <div className="container">
          <div className="section-header-fancy">
            <span className="section-badge badge-purple">
              <i className="fas fa-book-open"></i>
              Brand Meaning
            </span>
            <h2 className="section-title text-center">Meaning of CALVERA</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              
            </div>
          </div>
          <div className="calvera-grid">
            <div className="calvera-card" style={{'--card-color': '#ff6b00'}}>
              <div className="letter-circle">C</div>
              <h3>Culture & Connection</h3>
              <p>celebrating heritage and traditions of Sri Lanka and the world.</p>
            </div>
            <div className="calvera-card" style={{'--card-color': '#e91e63'}}>
              <div className="letter-circle">A</div>
              <h3>Adventure</h3>
              <p>exploring new places with excitement and wonder.</p>
            </div>
            <div className="calvera-card" style={{'--card-color': '#9c27b0'}}>
              <div className="letter-circle">L</div>
              <h3>Luxury & Leisure</h3>
              <p>offering comfort and quality in every journey.</p>
            </div>
            <div className="calvera-card" style={{'--card-color': '#00bcd4'}}>
              <div className="letter-circle">V</div>
              <h3>Vision</h3>
              <p>shaping the future of tourism with creativity.</p>
            </div>
            <div className="calvera-card" style={{'--card-color': '#4caf50'}}>
              <div className="letter-circle">E</div>
              <h3>Experience</h3>
              <p>creating moments that last a lifetime.</p>
            </div>
            <div className="calvera-card" style={{'--card-color': '#ff9800'}}>
              <div className="letter-circle">R</div>
              <h3>Reliability</h3>
              <p>trusted service for travelers.</p>
            </div>
            <div className="calvera-card" style={{'--card-color': '#f44336'}}>
              <div className="letter-circle">A</div>
              <h3>Authenticity</h3>
              <p>genuine experiences rooted in real stories and traditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="page-section story-section">
        <div className="container">
          <div className="grid-container">
            <div className="text-content">
              <div className="section-header-fancy">
                <span className="section-badge badge-green">
                  <i className="fas fa-book"></i>
                  Our Journey
                </span>
                <h2 className="section-title">Our Story</h2>
              </div>
              <div className="story-text glass-card">
                <p>Founded on a love for exploration, Calvera Travels began as a small blog dedicated to sharing the hidden gems of Sri Lanka. Our passion for storytelling through travel quickly grew into a mission: to create seamless, authentic, and unforgettable travel experiences for everyone.</p>
                <p>Today, we are a full-service travel agency, but our core values remain. We believe travel is about more than just visiting new places; it's about creating lasting memories, forging new connections, and discovering the world in a meaningful way.</p>
              </div>
            </div>
            <div className="image-content">
              <div className="story-image-wrapper">
                <img src="C:\Users\User\Desktop\CTA\calvera-travels-react-app\public\images\AboutUs\ourstory\LOGO FINAL.png" alt="Our Story" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="page-section values-section">
        <div className="container">
          <div className="section-header-fancy">
            <span className="section-badge badge-teal">
              <i className="fas fa-gem"></i>
              What We Stand For
            </span>
            <h2 className="section-title text-center">Our Core Values</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
             
            </div>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{'--value-color': value.color}}>
                <div className="value-icon-wrapper">
                  <div className="value-icon">
                    <i className={value.icon}></i>
                  </div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="page-section team-section">
        <div className="container">
          <div className="section-header-fancy">
            <span className="section-badge badge-indigo">
              <i className="fas fa-users"></i>
              Our Team
            </span>
            <h2 className="section-title text-center">Meet Our Team</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
             
            </div>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href="#!"><i className="fab fa-linkedin"></i></a>
                      <a href="#!"><i className="fab fa-twitter"></i></a>
                      <a href="#!"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;