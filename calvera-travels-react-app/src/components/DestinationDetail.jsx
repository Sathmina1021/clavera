import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./DestinationDetail.css";
import { DESTINATIONS } from "../data/destinationData";

export default function DestinationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const destination = DESTINATIONS.find(d => d.slug === slug) ||
    DESTINATIONS.find(d => (d.name || "").toLowerCase().replace(/\s+/g, "-") === slug);

  useEffect(() => {
    if (!destination) navigate("/Destination", { replace: true });
  }, [destination, navigate]);

  if (!destination) return null;

  const bgImage = destination.image || "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&auto=format&fit=crop&q=70";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: destination.tagline || destination.description,
        url: window.location.href,
      });
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div className="destination-page">
      {/* Breadcrumbs */}
      <nav className="crumbs container">
        <Link to="/" className="crumb">Home</Link>
        <span className="crumb-sep">›</span>
        <Link to="/Destination" className="crumb">Destinations</Link>
        <span className="crumb-sep">›</span>
        <span className="crumb current">{destination.name}</span>
      </nav>

      {/* Luxe Hero */}
      <header className="luxe-hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="luxe-veil" />
        <div className="luxe-noise" />
        <div className="luxe-rimlight" />
        
        <div className="detail-hero__content container">
          <div className="hero-top-actions">
            <Link to="/Destination" className="btn-back">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              <span>Back to Destinations</span>
            </Link>
            <div className="hero-actions">
              <button
                className={`action-icon ${isFavorite ? "active" : ""}`}
                onClick={() => setIsFavorite(!isFavorite)}
                title={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <div className="share-wrapper">
                <button className="action-icon" onClick={handleShare} title="Share">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
                {showShareMenu && (
                  <div className="share-menu">
                    <button onClick={() => alert("Copy link")}>Copy Link</button>
                    <button onClick={() => alert("Share to Facebook")}>Facebook</button>
                    <button onClick={() => alert("Share to Twitter")}>Twitter</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="badge-row">
            <span className="detail-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {(destination.region || "Unknown").toUpperCase()}
            </span>
            <span className="detail-badge soft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Top Rated
            </span>
            {destination.places?.length > 0 && (
              <span className="detail-badge soft">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"/>
                </svg>
                {destination.places.length} Places
              </span>
            )}
          </div>

          <h1 className="luxe-title">
            {destination.name}
            <span className="luxe-underline" />
          </h1>
          <p className="detail-subtitle">
            {destination.tagline || "A captivating blend of culture, history, and breathtaking beauty."}
          </p>

          <div className="hero-cta">
            <a href="#gallery" className="cta primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              View Gallery
            </a>
            <a href="#places" className="cta ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Explore Places
            </a>
            <a href="#about" className="cta ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="detail-main container">
        {/* Quick Info */}
        <div className="info-cards fancy">
          <div className="info-card">
            <svg className="info-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <h3>Region</h3>
            <p>{destination.region || "—"}</p>
          </div>
          <div className="info-card">
            <svg className="info-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <h3>Rating</h3>
            <p>4.8 / 5.0</p>
          </div>
          <div className="info-card">
            <svg className="info-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <h3>Photos</h3>
            <p>{destination.images?.length || 1} Images</p>
          </div>
          <div className="info-card">
            <svg className="info-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <h3>Must Visit</h3>
            <p>Top Choice</p>
          </div>
        </div>

        {/* Gallery */}
        <DestinationCarousel id="gallery" destination={destination} />

        {/* Highlights */}
        <section className="highlights">
          <article className="highlight">
            <svg className="highlight-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
            <h3>Scenic Views</h3>
            <p>Breathtaking landscapes and natural wonders await</p>
          </article>
          <article className="highlight">
            <svg className="highlight-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <h3>Rich Heritage</h3>
            <p>Ancient temples and historical landmarks</p>
          </article>
          <article className="highlight">
            <svg className="highlight-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
              <line x1="6" y1="1" x2="6" y2="4"/>
              <line x1="10" y1="1" x2="10" y2="4"/>
              <line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
            <h3>Local Cuisine</h3>
            <p>Authentic flavors and culinary delights</p>
          </article>
          <article className="highlight">
            <svg className="highlight-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
            <h3>Culture & Arts</h3>
            <p>Vibrant traditions and local craftsmanship</p>
          </article>
        </section>

        {/* Tabbed Content */}
        <section className="tabbed-content">
          <div className="tabs-nav">
            <button
              className={`tab-nav-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              Overview
            </button>
            <button
              className={`tab-nav-btn ${activeTab === "besttime" ? "active" : ""}`}
              onClick={() => setActiveTab("besttime")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Best Time
            </button>
            <button
              className={`tab-nav-btn ${activeTab === "tips" ? "active" : ""}`}
              onClick={() => setActiveTab("tips")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Travel Tips
            </button>
          </div>

          <div className="tab-panels">
            {activeTab === "overview" && (
              <div id="about" className="tab-panel">
                <h2>About {destination.name}</h2>
                <p className="desc">{destination.description}</p>
                <ul className="about-points">
                  <li>Rich cultural heritage and vibrant local life</li>
                  <li>Scenic routes and photo-worthy locations</li>
                  <li>Year-round festivals and immersive experiences</li>
                  <li>Easy accessibility and tourist-friendly infrastructure</li>
                </ul>
              </div>
            )}

            {activeTab === "besttime" && (
              <div className="tab-panel">
                <h2>Best Time to Visit</h2>
                <div className="season-cards">
                  <div className="season-card recommended">
                    <svg className="season-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                      <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    <h3>Spring (Mar - May)</h3>
                    <p className="season-tag">Recommended</p>
                    <p>Perfect weather, blooming flowers, and ideal for photography</p>
                  </div>
                  <div className="season-card">
                    <svg className="season-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                    <h3>Summer (Jun - Aug)</h3>
                    <p className="season-tag">Popular</p>
                    <p>Peak season with warm weather and vibrant festivals</p>
                  </div>
                  <div className="season-card recommended">
                    <svg className="season-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4h6l3 7v8a2 2 0 0 1-2 2h-2"/>
                      <circle cx="7" cy="19" r="2"/>
                      <path d="M3 6v13a2 2 0 0 0 2 2h2"/>
                    </svg>
                    <h3>Autumn (Sep - Nov)</h3>
                    <p className="season-tag">Recommended</p>
                    <p>Pleasant temperatures, fewer crowds, golden landscapes</p>
                  </div>
                  <div className="season-card">
                    <svg className="season-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
                      <line x1="8" y1="16" x2="8.01" y2="16"/>
                      <line x1="8" y1="20" x2="8.01" y2="20"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                      <line x1="12" y1="22" x2="12.01" y2="22"/>
                      <line x1="16" y1="16" x2="16.01" y2="16"/>
                      <line x1="16" y1="20" x2="16.01" y2="20"/>
                    </svg>
                    <h3>Winter (Dec - Feb)</h3>
                    <p className="season-tag">Off-season</p>
                    <p>Cooler weather, lower prices, authentic local experience</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tips" && (
              <div className="tab-panel">
                <h2>Essential Travel Tips</h2>
                <div className="tips-grid">
                  <div className="tip-card">
                    <span className="tip-number">1</span>
                    <h4>Pack Smart</h4>
                    <p>Comfortable walking shoes, light layers, and a refillable water bottle</p>
                  </div>
                  <div className="tip-card">
                    <span className="tip-number">2</span>
                    <h4>Respect Culture</h4>
                    <p>Dress modestly at religious sites and learn basic local phrases</p>
                  </div>
                  <div className="tip-card">
                    <span className="tip-number">3</span>
                    <h4>Book Ahead</h4>
                    <p>Reserve popular attractions and accommodations in advance</p>
                  </div>
                  <div className="tip-card">
                    <span className="tip-number">4</span>
                    <h4>Golden Hours</h4>
                    <p>Best lighting: 6-7 AM and 5-6 PM for stunning photographs</p>
                  </div>
                  <div className="tip-card">
                    <span className="tip-number">5</span>
                    <h4>Stay Connected</h4>
                    <p>Get a local SIM or eSIM for navigation and translations</p>
                  </div>
                  <div className="tip-card">
                    <span className="tip-number">6</span>
                    <h4>Try Local Food</h4>
                    <p>Visit authentic restaurants and street food vendors for real flavors</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Places (if available) */}
        {destination.places?.length > 0 && (
          <section id="places" className="places-section">
            <div className="section-head">
              <h2>Must-Visit Places in {destination.name}</h2>
              <p className="section-subtitle">
                Discover the iconic landmarks and hidden gems
              </p>
            </div>

            <div className="places-list-modern">
              {destination.places.map((p, index) => (
                <div
                  key={p.id || index}
                  className={`place-box creative ${index % 2 ? "reverse" : ""}`}
                >
                  <div className="place-box-image">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="img-gradient" />
                    <span className="place-tag">#{index + 1}</span>
                  </div>
                  <div className="place-box-content">
                    <h3>{p.title}</h3>
                    {p.short && <p className="short">{p.short}</p>}
                    {p.details && <p className="details">{p.details}</p>}
                    <div className="place-meta">
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        Great for photos
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        2-3 hours
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        4.9/5
                      </span>
                    </div>
                    <div className="place-btns">
                      <button className="place-btn primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        Get Directions
                      </button>
                      <button className="place-btn secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <FAQSection />

        {/* CTA Footer */}
        <footer className="luxe-cta">
          <div className="luxe-cta-inner container">
            <div className="luxe-cta-copy">
              <h2>Ready to Plan Your Trip?</h2>
              <p>Create your perfect itinerary and start your adventure</p>
            </div>
            <div className="luxe-cta-actions">
              <Link to="/Planyourtrip" className="cta primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Plan Your Trip
              </Link>
              <Link to="/Destination" className="cta ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Browse More
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* Carousel Component */
function DestinationCarousel({ id, destination }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const images = useMemo(() => {
    const fallbacks = [
    ];
    const base = destination.images?.length ? destination.images : [destination.image];
    return Array.from(new Set([...base, ...fallbacks]));
  }, [destination]);

  useEffect(() => {
    start();
    return stop;
  }, [images.length]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => setIndex(i => (i + 1) % images.length), 5000);
  };

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <section id={id} className="detail-carousel-section">
      <div className="section-header">
        <h2>Photo Gallery</h2>
        <div className="carousel-counter">
          <span className="current">{index + 1}</span>
          <span className="divider">/</span>
          <span className="total">{images.length}</span>
        </div>
      </div>

      <div className="detail-carousel" onMouseEnter={stop} onMouseLeave={start}>
        {images.map((src, i) => (
          <div key={i} className={`carousel-slide-wrapper ${i === index ? "active" : ""}`}>
            <img src={src} alt={`${destination.name} ${i + 1}`} className="carousel-slide" loading="lazy" />
          </div>
        ))}

        <button className="carousel-nav prev" onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button className="carousel-nav next" onClick={() => setIndex(i => (i + 1) % images.length)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <div className="carousel-progress">
          <div className="progress-bar" style={{ width: `${((index + 1) / images.length) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}

/* FAQ Component */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "Is it family-friendly?", a: "Yes! Perfect for all ages with plenty of activities and safe areas." },
    { q: "What about connectivity?", a: "Excellent Wi-Fi and mobile coverage. eSIMs recommended for tourists." },
    { q: "Do I need a visa?", a: "Depends on your nationality. Check with your local embassy." },
    { q: "Best way to get around?", a: "Public transport, taxis, and rental cars are all reliable options." },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} className={`faq-item ${openIndex === idx ? "open" : ""}`}>
          <button className="faq-head" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}>
            <span>{faq.q}</span>
            <span className="faq-toggle">{openIndex === idx ? "−" : "+"}</span>
          </button>
          <div className="faq-body">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
}