import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({
  images = null,
  title = "Discover The Islands",
  subtitle = "Your adventure begins here. Let Calvera take you there.",
  highlightText = "With Calvera Travels",
  badge = "Premium Travel Experience",
  primaryButton = { text: "Explore Tours", link: "/tours", icon: "fa-arrow-right" },
  secondaryButton = { text: "View Destinations", link: "/destination", icon: "fa-map-marked-alt" },
  showFeatures = true,
  showScrollIndicator = true,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Default images
  const defaultImages = [
    "/images/home page/hero page background/heroback1 (1).jpg",
    "/images/home page/hero page background/heroback2.jpg",
    "/images/home page/hero page background/heroback3.JPG",
  ];

  const backgroundImages = images || defaultImages;

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleDotClick = (index) => {
    if (index !== currentImageIndex) {
      setCurrentImageIndex(index);
    }
  };

  return (
    <div className={`page-hero ${scrolled ? "scrolled" : ""}`}>
      {/* === Background Images === */}
      <div className="hero-backgrounds">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentImageIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* === Overlay === */}
      <div className="hero-overlay"></div>

      {/* === Floating Decorations === */}
      <div className="hero-decorations">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>

      {/* === Hero Content === */}
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-paper-plane"></i>
          <span>{badge}</span>
        </div>

        <h1 className="hero-title">
          {title} <br />
          <span className="highlight">{highlightText}</span>
        </h1>

        <p className="hero-subtitle">{subtitle}</p>

        {/* Buttons */}
        <div className="hero-actions">
          <Link to={primaryButton.link} className="btn btn-primary btn-hero">
            <span>{primaryButton.text}</span>
            <i className={`fas ${primaryButton.icon}`}></i>
          </Link>
          <Link to={secondaryButton.link} className="btn btn-secondary btn-hero">
            <span>{secondaryButton.text}</span>
            <i className={`fas ${secondaryButton.icon}`}></i>
          </Link>
        </div>

        {/* Features */}
        {showFeatures && (
          <div className="hero-features">
            <div className="feature-pill">
              <i className="fas fa-shield-alt"></i>
              <span>Safe Travel</span>
            </div>
            <div className="feature-pill">
              <i className="fas fa-star"></i>
              <span>Best Prices</span>
            </div>
            <div className="feature-pill">
              <i className="fas fa-headset"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        )}
      </div>

      {/* === Scroll Indicator === */}
      {showScrollIndicator && (
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      )}

      {/* === Slide Indicators === */}
      <div className="hero-indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="dot-progress"></span>
          </button>
        ))}
      </div>

      {/* === Navigation Arrows === */}
      <button
        className="hero-nav-arrow arrow-prev"
        onClick={() =>
          handleDotClick((currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length)
        }
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="hero-nav-arrow arrow-next"
        onClick={() => handleDotClick((currentImageIndex + 1) % backgroundImages.length)}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Hero;
