import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero"; // Import the reusable Hero component
import "./Tours.css";

const Tours = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Custom background images for Tours page
  const toursHeroImages = [
    "/images/Tours/tours hero back/tourshero (1).jpg",
    "/images/Tours/tours hero back/tourshero (2).jpg",
    "/images/Tours/tours hero back/tourshero (3).jpg",
  ];

  const featuredPackage = {
    id: "calvera-romantic-escape",
    title: "Calvera Romantic Escape",
    duration: "8 Days / 7 Nights",
    description:
      "Embark on an unforgettable honeymoon through Sri Lanka's most romantic landscapes. From the ancient majesty of Sigiriya and the cultural rhythms of Kandy to the misty hills of Ella and the wild wonders of Yala, every moment is filled with love and discovery.",
    priceValue: 1820,
    priceDisplay: "USD 1,820",
    price: "$1,820",
    destinations: ["Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
    idealFor: "Honeymooners & Couples",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Romantic couple enjoying sunset in Sri Lanka",
    highlights: [
      "Climb the legendary Sigiriya Rock Fortress",
      "Enjoy a thrilling Minneriya elephant safari",
      "Visit the sacred Temple of the Tooth Relic in Kandy",
      "Indulge in a romantic candlelight dinner",
      "Ride the scenic train through the misty hills of Ella",
      "Experience a wildlife safari in Yala National Park",
      "Unwind by the beach under tropical sunsets",
    ],
    specialNote:
      "Share a magical candlelight dinner in Kandy, surrounded by soft lights and mountain whispers, creating memories to treasure forever. End your journey with pure bliss as you relax together on golden beaches, listening to the gentle rhythm of the waves — a perfect finale to your island love story.",
    features: [
      "Romantic candlelight dinner",
      "Luxury accommodations",
      "Private transfers",
      "Couple experiences",
    ],
  };

  const tourPackages = [
    {
      id: "calvera-romantic-escape",
      title: "Calvera Romantic Escape",
      description: "Embark on an unforgettable honeymoon through Sri Lanka's most romantic landscapes.",
      price: "$1,820",
      duration: "8 Days / 7 Nights",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Romantic couple enjoying sunset in Sri Lanka",
      features: [
        "Romantic candlelight dinner",
        "Luxury accommodations",
        "Private transfers",
        "Couple experiences",
      ],
    },
    {
      id: "family-adventure",
      title: "Family Adventure",
      description: "Fun-filled journeys with activities for all ages.",
      price: "$4,599",
      duration: "10 Days / 9 Nights",
      image: "https://i.ibb.co/xX8m21j/Ruwanweliseya.png",
      imageAlt: "Family enjoying adventure activities",
      features: [
        "Family-friendly hotels",
        "Kid-friendly activities",
        "Educational tours",
        "Group discounts",
      ],
    },
    {
      id: "solo-explorer",
      title: "Solo Explorer",
      description:
        "Discover the world on your own terms with our curated solo trips.",
      price: "$1,899",
      duration: "7 Days / 6 Nights",
      image: "https://i.ibb.co/yB1s1gX/Galleface-green.png",
      imageAlt: "Solo traveler exploring scenic locations",
      features: [
        "Single accommodations",
        "Group activities",
        "Local guides",
        "Safety assurance",
      ],
    },
    {
      id: "cultural-heritage",
      title: "Cultural Heritage",
      description:
        "Immerse yourself in the rich history and traditions of ancient civilizations.",
      price: "$3,299",
      duration: "9 Days / 8 Nights",
      image: "https://i.ibb.co/9rXVJc8/Anuradhapura-Front-Page.png",
      imageAlt: "Ancient cultural heritage site",
      features: [
        "Historical sites",
        "Cultural shows",
        "Local cuisine",
        "Expert guides",
      ],
    },
    {
      id: "beach-paradise",
      title: "Beach Paradise",
      description:
        "Relax and unwind in the world's most stunning beach destinations.",
      price: "$2,799",
      duration: "7 Days / 6 Nights",
      image: "https://i.ibb.co/pnp0x8f/Browns-Beach.png",
      imageAlt: "Pristine beach paradise",
      features: [
        "Beachfront resorts",
        "Water activities",
        "Sunset cruises",
        "Spa packages",
      ],
    },
    {
      id: "adventure-seekers",
      title: "Adventure Seekers",
      description:
        "Thrilling experiences for adrenaline junkies and outdoor enthusiasts.",
      price: "$3,899",
      duration: "8 Days / 7 Nights",
      image: "https://i.ibb.co/yQc3rW2/Full-anuradhapura.png",
      imageAlt: "Adventure activities and wildlife",
      features: [
        "Adventure sports",
        "Mountain trekking",
        "Wildlife safaris",
        "Camping experiences",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-shield-alt",
      title: "Safe & Secure",
      description:
        "Your safety is our top priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      icon: "fas fa-star",
      title: "Quality Assured",
      description:
        "We partner with the best hotels and service providers to ensure premium experiences.",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Personalized Service",
      description:
        "Customize your tour to match your preferences and travel style perfectly.",
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance throughout your journey for peace of mind.",
    },
  ];

  const openPackagePopup = (tourPackage) => {
    setSelectedPackage(tourPackage);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePackagePopup = () => {
    setShowPopup(false);
    setSelectedPackage(null);
    document.body.style.overflow = "auto";
  };

  // Package Popup Component
  const PackagePopup = ({ package: pkg, onClose }) => {
    if (!pkg) return null;

    const isRomanticPackage = pkg.id === "calvera-romantic-escape";

    return (
      <div className="package-popup-overlay" onClick={onClose}>
        <div className="package-popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
            <i className="fas fa-times"></i>
          </button>
          
          {isRomanticPackage ? (
            // Enhanced Romantic Package Popup
            <>
              <div className="romantic-popup-header">
                <div className="romantic-badge-wrapper">
                  <div className="romantic-badge">
                    <i className="fas fa-heart" aria-hidden="true" />
                    <span>Romance Package</span>
                  </div>
                </div>
                <h2 className="romantic-popup-title">{featuredPackage.title}</h2>
                <p className="romantic-popup-subtitle">
                  {featuredPackage.duration} • {featuredPackage.idealFor}
                </p>
              </div>

              <div className="romantic-popup-body">
                <div className="romantic-hero-section">
                  <img
                    src={featuredPackage.image}
                    alt={featuredPackage.imageAlt}
                    className="romantic-hero-image"
                  />
                  <div className="romantic-price-overlay">
                    <div className="romantic-price-card">
                      <span className="romantic-price-label">Starting From</span>
                      <span className="romantic-price-value">{featuredPackage.priceDisplay}</span>
                      <span className="romantic-price-unit">per person</span>
                    </div>
                  </div>
                </div>

                <div className="romantic-content-grid">
                  <div className="romantic-destinations-card">
                    <h3 className="romantic-section-title">
                      <i className="fas fa-map-marked-alt" aria-hidden="true" />
                      Your Journey
                    </h3>
                    <div className="romantic-destinations-flow">
                      {featuredPackage.destinations.map((destination, index) => (
                        <div key={index} className="romantic-destination-item">
                          <div className="destination-number">{index + 1}</div>
                          <span className="destination-name">{destination}</span>
                          {index < featuredPackage.destinations.length - 1 && (
                            <i className="fas fa-arrow-right destination-arrow" aria-hidden="true" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="romantic-summary-card">
                    <h3 className="romantic-section-title">
                      <i className="fas fa-book-open" aria-hidden="true" />
                      Journey Summary
                    </h3>
                    <p className="romantic-summary-text">{featuredPackage.description}</p>
                  </div>

                  <div className="romantic-highlights-card">
                    <h3 className="romantic-section-title">
                      <i className="fas fa-star" aria-hidden="true" />
                      Experience Highlights
                    </h3>
                    <ul className="romantic-highlights-list">
                      {featuredPackage.highlights.map((highlight, index) => (
                        <li key={index} className="romantic-highlight-item">
                          <i className="fas fa-check-circle" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="romantic-special-card">
                    <div className="special-card-header">
                      <i className="fas fa-gem" aria-hidden="true" />
                      <h3>Special Romantic Moments</h3>
                    </div>
                    <p className="special-card-text">{featuredPackage.specialNote}</p>
                  </div>
                </div>

                <div className="romantic-popup-actions">
                  <Link to="/contact" className="btn-romantic-reserve">
                    <i className="fas fa-calendar-check" aria-hidden="true" />
                    <span>Reserve Your Romantic Escape</span>
                  </Link>
                  <button className="btn-romantic-back" onClick={onClose}>
                    <i className="fas fa-arrow-left" aria-hidden="true" />
                    <span>Back to Tours</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Standard Package Popup
            <>
              <div className="popup-header">
                <h2 className="popup-title">{pkg.title}</h2>
                <div className="popup-meta">
                  <span className="meta-item">
                    <i className="far fa-clock" aria-hidden="true" />
                    {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="popup-body">
                <div className="popup-image-section">
                  <img
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    className="popup-hero-image"
                  />
                </div>

                <div className="popup-details-section">
                  <div className="price-card-popup">
                    <span className="price-label">Starting From</span>
                    <span className="price-value">{pkg.price}</span>
                    <span className="price-unit">per person</span>
                  </div>

                  <div className="popup-description">
                    <h3>Journey Overview</h3>
                    <p>{pkg.description}</p>
                  </div>

                  {pkg.features && (
                    <div className="popup-features">
                      <h3>What's Included</h3>
                      <ul className="features-list-popup">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="feature-item-popup">
                            <i className="fas fa-check" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="popup-actions">
                    <Link to="/contact" className="btn btn-primary-popup">
                      <i className="fas fa-calendar-check" aria-hidden="true" />
                      Book Now
                    </Link>
                    <button className="btn btn-secondary-popup" onClick={onClose}>
                      <i className="fas fa-arrow-left" aria-hidden="true" />
                      Back to Tours
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="tours-page">
      {/* Hero Section - Using Reusable Hero Component */}
      <Hero 
        images={toursHeroImages}
        title="Our Tours"
        highlightText="Unforgettable Experiences"
        subtitle="Crafted just for you with love and care"
        badge="Premium Tour Packages"
        primaryButton={{ 
          text: "View Packages", 
          link: "#packages", 
          icon: "fa-gift" 
        }}
        secondaryButton={{ 
          text: "Contact Us", 
          link: "/contact", 
          icon: "fa-phone" 
        }}
        showFeatures={true}
        showScrollIndicator={true}
      />

      {/* Featured Package Section */}
      <section className="featured-package-section" aria-labelledby="featured-package-title">
        <div className="container">
          <div className="featured-badge">
            <i className="fas fa-heart" aria-hidden="true" />
            <span>Featured Romance Package</span>
          </div>

          <article className="featured-package-card">
            <header className="featured-package-header">
              <div className="package-title-wrapper">
                <h2 id="featured-package-title" className="package-main-title">
                  {featuredPackage.title}
                </h2>
                <div className="package-meta-info">
                  <span className="meta-item">
                    <i className="far fa-clock" aria-hidden="true" />
                    {featuredPackage.duration}
                  </span>
                  <span className="meta-item">
                    <i className="fas fa-heart" aria-hidden="true" />
                    {featuredPackage.idealFor}
                  </span>
                </div>
              </div>
              <div className="package-price-card">
                <span className="price-label">Starting From</span>
                <span className="price-value">{featuredPackage.priceDisplay}</span>
                <span className="price-unit">per person</span>
              </div>
            </header>

            <div className="featured-package-content">
              <div className="package-image-wrapper">
                <img
                  src={featuredPackage.image}
                  alt={featuredPackage.imageAlt}
                  className="package-hero-image"
                  loading="lazy"
                />
                <div className="destinations-info">
                  <h3 className="destinations-title">
                    <i className="fas fa-map-marked-alt" aria-hidden="true" />
                    Destinations
                  </h3>
                  <ul className="destinations-list">
                    {featuredPackage.destinations.map((destination, index) => (
                      <li key={index} className="destination-item">
                        {destination}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="package-details-wrapper">
                <div className="package-summary">
                  <h3 className="section-heading">Journey Summary</h3>
                  <p className="summary-text">{featuredPackage.description}</p>
                  
                  <div className="special-note-card">
                    <i className="fas fa-gem" aria-hidden="true" />
                    <p className="special-note-text">
                      {featuredPackage.specialNote}
                    </p>
                  </div>
                </div>

                <div className="package-highlights">
                  <h3 className="section-heading">
                    <i className="fas fa-star" aria-hidden="true" />
                    Experience Highlights
                  </h3>
                  <ul className="highlights-list">
                    {featuredPackage.highlights.map((highlight, index) => (
                      <li key={index} className="highlight-item">
                        <i className="fas fa-check-circle" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-actions">
                  <button 
                    className="btn btn-primary-romantic"
                    onClick={() => openPackagePopup(featuredPackage)}
                  >
                    <i className="fas fa-eye" aria-hidden="true" />
                    View Full Details
                  </button>
                  <Link to="/contact" className="btn btn-secondary-romantic">
                    <i className="fas fa-calendar-check" aria-hidden="true" />
                    Reserve Your Escape
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Other Packages Section */}
      <section id="packages" className="packages-section" aria-labelledby="other-packages-title">
        <div className="container">
          <h2 id="other-packages-title" className="section-title">
            More Tour Packages
          </h2>
          <p className="section-description">
            Explore our other carefully curated tour packages
          </p>

          <div className="packages-grid">
            {tourPackages.map((tour) => (
              <article key={tour.id} className="package-card">
                <div className="package-image-container">
                  <img
                    src={tour.image}
                    alt={tour.imageAlt}
                    className="package-image"
                    loading="lazy"
                  />
                  {tour.id === "calvera-romantic-escape" && (
                    <span className="package-badge romantic-badge">
                      <i className="fas fa-heart" />
                      Romantic
                    </span>
                  )}
                </div>

                <div className="package-content">
                  <h3 className="package-title">{tour.title}</h3>
                  <p className="package-description">{tour.description}</p>

                  <div className="package-meta">
                    <span className="package-duration">
                      <i className="far fa-clock" />
                      {tour.duration}
                    </span>
                  </div>

                  <div className="package-features">
                    <h4 className="features-title">What's Included:</h4>
                    <ul className="features-list">
                      {tour.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <i className="fas fa-check" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-footer">
                    <div className="package-pricing">
                      <span className="package-price">{tour.price}</span>
                      <span className="package-price-note">per person</span>
                    </div>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openPackagePopup(tour)}
                    >
                      <i className="fas fa-eye" aria-hidden="true" />
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section" aria-labelledby="why-choose-title">
        <div className="container">
          <h2 id="why-choose-title" className="section-title">
            Why Choose Our Tours?
          </h2>
          <div className="services-grid">
            {whyChooseUs.map((service, index) => (
              <article key={index} className="service-card">
                <i className={`${service.icon} service-icon`} aria-hidden="true" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-content">
            <h2 id="cta-title" className="cta-title">
              Ready to Start Your Adventure?
            </h2>
            <p className="cta-description">
              Contact us today to customize your perfect tour package
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-cta-primary">
                <i className="fas fa-phone" aria-hidden="true" />
                Contact Us
              </Link>
              <Link to="/plan-your-trip" className="btn btn-cta-secondary">
                <i className="fas fa-clipboard-list" aria-hidden="true" />
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Popup */}
      {showPopup && (
        <PackagePopup 
          package={selectedPackage} 
          onClose={closePackagePopup} 
        />
      )}
    </div>
  );
};

export default Tours;