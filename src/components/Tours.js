import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Tours.css";

const Tours = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  // Background images array
  const backgroundImages = [
    // eslint-disable-next-line no-useless-escape
    "/images/Tours/tours hero back/tourshero (1).jpg",
    // eslint-disable-next-line no-useless-escape
    "/images/Tours/tours hero back/tourshero (2).jpg",
    // eslint-disable-next-line no-useless-escape
    "/images/Tours/tours hero back/tourshero (3).jpg",
  ];

  // Auto-rotate backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const tourPackages = [
    {
      id: 1,
      title: "Honeymoon Special",
      description:
        "Experience romance and luxury in the most beautiful destinations.",
      price: "$2999",
      image: "https://i.ibb.co/0G3p5TM/Negambo-front-page.png",
      features: [
        "Luxury accommodations",
        "Private transfers",
        "Romantic dinners",
        "Spa treatments",
      ],
    },
    {
      id: 2,
      title: "Family Adventure",
      description: "Fun-filled journeys with activities for all ages.",
      price: "$4599",
      image: "https://i.ibb.co/xX8m21j/Ruwanweliseya.png",
      features: [
        "Family-friendly hotels",
        "Kid-friendly activities",
        "Educational tours",
        "Group discounts",
      ],
    },
    {
      id: 3,
      title: "Solo Explorer",
      description:
        "Discover the world on your own terms with our curated solo trips.",
      price: "$1899",
      image: "https://i.ibb.co/yB1s1gX/Galleface-green.png",
      features: [
        "Single accommodations",
        "Group activities",
        "Local guides",
        "Safety assurance",
      ],
    },
    {
      id: 4,
      title: "Cultural Heritage",
      description:
        "Immerse yourself in the rich history and traditions of ancient civilizations.",
      price: "$3299",
      image: "https://i.ibb.co/9rXVJc8/Anuradhapura-Front-Page.png",
      features: [
        "Historical sites",
        "Cultural shows",
        "Local cuisine",
        "Expert guides",
      ],
    },
    {
      id: 5,
      title: "Beach Paradise",
      description:
        "Relax and unwind in the world's most stunning beach destinations.",
      price: "$2799",
      image: "https://i.ibb.co/pnp0x8f/Browns-Beach.png",
      features: [
        "Beachfront resorts",
        "Water activities",
        "Sunset cruises",
        "Spa packages",
      ],
    },
    {
      id: 6,
      title: "Adventure Seekers",
      description:
        "Thrilling experiences for adrenaline junkies and outdoor enthusiasts.",
      price: "$3899",
      image: "https://i.ibb.co/yQc3rW2/Full-anuradhapura.png",
      features: [
        "Adventure sports",
        "Mountain trekking",
        "Wildlife safaris",
        "Camping experiences",
      ],
    },
  ];

  return (
    <div className="tours-page">
      {/* ==================== HERO SECTION ==================== */}
      <div className="hero-slider">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentBackground ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Our Tours</h1>
          <p>Unforgettable experiences crafted just for you.</p>
        </div>

        {/* Background indicators */}
        <div className="background-indicators">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentBackground ? "active" : ""
              }`}
              onClick={() => setCurrentBackground(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* ==================== TOUR PACKAGES ==================== */}
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Tour Packages</h2>
          <p className="section-subtitle">
            Choose from our carefully curated tour packages designed to create
            lasting memories
          </p>

          <div className="packages-grid">
            {tourPackages.map((tour) => (
              <div key={tour.id} className="package-card">
                <div className="package-image">
                  <img src={tour.image} alt={tour.title} />
                  <div className="package-badge">Popular</div>
                </div>
                <div className="package-content">
                  <h3>{tour.title}</h3>
                  <p>{tour.description}</p>
                  <div className="package-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {tour.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-info">
                    <div className="price-section">
                      <span className="price">{tour.price}</span>
                      <span className="price-note">per person</span>
                    </div>
                    <Link to="/contact" className="btn btn-primary">
                      <i className="fas fa-calendar-check"></i>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Tours?</h2>
          <div className="services-grid">
            <div className="service-item">
              <i className="fas fa-shield-alt service-icon"></i>
              <h3>Safe & Secure</h3>
              <p>
                Your safety is our top priority with comprehensive travel
                insurance and 24/7 support.
              </p>
            </div>
            <div className="service-item">
              <i className="fas fa-star service-icon"></i>
              <h3>Quality Assured</h3>
              <p>
                We partner with the best hotels and service providers to ensure
                premium experiences.
              </p>
            </div>
            <div className="service-item">
              <i className="fas fa-hand-holding-heart service-icon"></i>
              <h3>Personalized Service</h3>
              <p>
                Customize your tour to match your preferences and travel style
                perfectly.
              </p>
            </div>
            <div className="service-item">
              <i className="fas fa-headset service-icon"></i>
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock assistance throughout your journey for peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Contact us today to customize your perfect tour package</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                <i className="fas fa-phone"></i> Contact Us
              </Link>
              <Link to="/plan-your-trip" className="btn btn-secondary btn-large">
                <i className="fas fa-clipboard-list"></i> Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
