import React, { useState } from "react";
import Hero from "./Hero";
import "./Tours.css"; // Ensure this import is correct

// =======================================================================
// NEW COMPONENT: Confirmation Popup
// =======================================================================
const ConfirmationPopup = ({ onClose }) => {
  // NOTE: Inline styles are used here for specific element colors/fonts 
  // but the layout (positioning, size) is controlled by Tours.css
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div 
        className="popup-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '600px', border: '2px solid rgba(234, 143, 50, 0.4)' }}
      >
        <button className="popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="popup-body" style={{ textAlign: 'center', padding: '60px 40px' }}>
          <h2 style={{ color: '#ea8f32', fontSize: '2.2rem', marginBottom: '15px' }}>
            <i className="fas fa-envelope-open-text" style={{ marginRight: '10px' }}></i>
            Inquiry Sent Successfully!
          </h2>
          <p style={{ color: '#e9d6b6', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>
            Thank you for your interest in this Calvera tour package.
            <br />
            **A member of our team will contact you shortly via email** to finalize the details of your reservation.
          </p>
          <button onClick={onClose} className="btn-primary" style={{ width: 'auto', padding: '15px 40px' }}>
            <i className="fas fa-arrow-left"></i> Return to Tours
          </button>
        </div>
      </div>
    </div>
  );
};
// =======================================================================

const Tours = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  // STATE: To show the confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false); 

  // --- Hero Images ---
  const toursHeroImages = [
    "/images/Tours/tours hero back/tourshero (1).jpg",
    "/images/Tours/tours hero back/tourshero (2).jpg",
    "/images/Tours/tours hero back/tourshero (3).jpg",
  ];

  // --- Tour Packages Data ---
  const packages = [
    {
      id: "romantic-escape",
      title: "Calvera Romantic Escape",
      duration: "8 Days / 7 Nights",
      destinations: ["Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
      idealFor: "Honeymooners & Couples",
      price: "USD 1,820 per person",
      summary:
        "Embark on an unforgettable honeymoon through Sri Lanka's most romantic landscapes. From the ancient majesty of Sigiriya to the misty hills of Ella and the wild wonders of Yala, each day is filled with love, discovery, and relaxation by golden beaches.",
      highlights: [
        "Climb the legendary Sigiriya Rock Fortress",
        "Enjoy a Minneriya elephant safari",
        "Visit the Temple of the Tooth Relic in Kandy",
        "Ride the scenic train to Ella",
        "Experience a Yala National Park safari",
        "Unwind on golden beaches under tropical sunsets",
      ],
      theme: "romantic",
      image:
        "/images/Tours/Calvera pakage/Calvera Honeymoon/Calvera Hoooneymoon.jpg",
      hoverImage:
        "/images/Tours/Calvera pakage/Calvera Honeymoon/Calvera Hoooneymoon.jpg",
      imageAlt: "Romantic couple in Sri Lanka",
    },
    {
      id: "cultural-essence",
      title: "Calvera Cultural Essence",
      duration: "6 Days / 5 Nights",
      destinations: [
        "Kandy",
        "Sigiriya",
        "Anuradhapura",
        "Polonnaruwa",
        "Hiriwadunna",
        "Negombo",
      ],
      idealFor: "Culture Lovers & Explorers",
      price: "USD 930 per person",
      summary:
        "Step into the heart of Sri Lanka's cultural heritage. Explore sacred temples, ancient capitals, and traditional village life as you uncover the timeless beauty of this island's past and present.",
      highlights: [
        "Visit Temple of the Tooth Relic",
        "Climb Sigiriya Fortress",
        "Explore Anuradhapura & Polonnaruwa",
        "Village life in Hiriwadunna",
        "Relax by the beaches of Negombo",
      ],
      theme: "cultural",
      image: "/images/Tours/Calvera pakage/Calvera Cultuer/dance-6983578.jpg",
      imageAlt: "Cultural heritage of Sri Lanka",
    },
    {
      id: "wild-trails",
      title: "Calvera Wild Trails",
      duration: "8 Days / 7 Nights",
      destinations: ["Wilpattu", "Kandy", "Nuwara Eliya", "Yala", "Mirissa"],
      idealFor: "Nature Lovers, Wildlife Enthusiasts & Adventure Seekers",
      price: "USD 1,560 per person",
      summary:
        "Journey deep into the wild heart of Sri Lanka with this thrilling nature and wildlife adventure. From leopard safaris to whale watching, every moment immerses you in breathtaking natural beauty.",
      highlights: [
        "Safari in Wilpattu & Yala",
        "Trekking at Udawattekele, Moon Plains & Horton Plains",
        "Visit Temple of the Tooth Relic",
        "Whale watching in Mirissa",
        "Relax on golden beaches at sunset",
      ],
      theme: "adventure",
      image:
        "/images/Tours/Calvera pakage/Calvera Wild/henning-borgersen-Kr_RijTa0kg-unsplash.jpg",
      imageAlt: "Safari jeep exploring the wild",
    },
    {
      id: "coastal-bliss",
      title: "Calvera Coastal Bliss",
      duration: "6 Days / 5 Nights",
      destinations: ["Galle", "Mirissa (Optional)", "Colombo"],
      idealFor: "Couples, Families & Beach Lovers",
      price: "USD 860 per person",
      summary:
        "Escape to Sri Lanka's southern coast for pure relaxation. From Galle's golden beaches to Mirissa's whale watching and Colombo's modern charm, experience sunshine, serenity, and sea breezes.",
      highlights: [
        "Relax on beaches of Galle",
        "Enjoy sunset walks at Galle Fort",
        "Optional whale watching in Mirissa",
        "Luxury coastal resorts",
        "Explore vibrant Colombo",
      ],
      theme: "coastal",
      image:
        "/images/Tours/Calvera pakage/Calvera Coastal Bliss (Leisure & Beach Relaxation/costalbills1.jpg",
      imageAlt: "Beautiful coastal beach view",
    },
    {
      id: "signature-journey",
      title: "Calvera Signature Journey",
      duration: "10 Days / 9 Nights",
      destinations: [
        "Dambulla",
        "Sigiriya",
        "Kandy",
        "Nuwara Eliya",
        "Udawalawe",
        "Galle",
        "Colombo",
      ],
      idealFor: "Couples, Families & Explorers",
      price: "USD 1,760 per person",
      summary:
        "Discover Sri Lanka's perfect balance of culture, nature, and relaxation. Explore temples, tea plantations, safaris, and beaches — each crafted to create your personal signature experience.",
      highlights: [
        "Climb Sigiriya Fortress",
        "Visit Dambulla Cave Temple & Temple of the Tooth",
        "Tour tea plantations",
        "Safari in Udawalawe",
        "Explore Galle Fort",
        "Final night in Colombo",
      ],
      theme: "signature",
      image: "/images/Tours/Calvera pakage/Calvera Signature/Signature.jpg",
      hoverImage:
        "/images/Tours/Calvera pakage/Calvera Signature/Signature.jpg",
      imageAlt: "Traveler exploring Sri Lanka",
    },
  ];

  // --- Popup Handlers ---
  const openPopup = (pkg) => {
    setSelectedPackage(pkg);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPackage(null);
    document.body.style.overflow = "auto";
  };
  
  // HANDLER: Close the confirmation message
  const closeConfirmation = () => {
    setShowConfirmation(false);
    document.body.style.overflow = "auto";
  };

  // HANDLER: Simulate reservation/contact submission
  const handleReserve = (pkgId) => {
    // *** NOTE: In a real application, you would send this data to your backend API here ***
    console.log(`Reservation requested for package: ${pkgId}`);
    
    closePopup(); // Close the package details popup
    setShowConfirmation(true); // Show the thank you message
    document.body.style.overflow = "hidden"; // Keep body locked while confirmation is visible
  };
  

  // --- Package Details Popup Component ---
  const PackagePopup = ({ pkg, onClose }) => {
    if (!pkg) return null;

    return (
      <div className="popup-overlay" onClick={onClose}>
        <div
          className={`popup-content ${pkg.theme}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="popup-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>

          <div className="popup-header">
            <img src={pkg.image} alt={pkg.imageAlt} />
            <div className="popup-title">
              <h2>{pkg.title}</h2>
              <p>{pkg.duration}</p>
            </div>
          </div>

          <div className="popup-body">
            <ul className="popup-details">
              <li>
                <strong>Destinations:</strong> {pkg.destinations.join(" • ")}
              </li>
              <li>
                <strong>Ideal For:</strong> {pkg.idealFor}
              </li>
              <li>
                <strong>Starting From:</strong> {pkg.price}
              </li>
            </ul>

            <div className="popup-summary">
              <h3>Summary</h3>
              <p>{pkg.summary}</p>
            </div>

            <div className="popup-highlights">
              <h3>Highlights</h3>
              <ul>
                {pkg.highlights.map((h, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="popup-buttons">
              <button onClick={() => handleReserve(pkg.id)} className="btn-primary">
                <i className="fas fa-calendar-check"></i> Reserve Now
              </button>
              <button onClick={onClose} className="btn-secondary">
                <i className="fas fa-arrow-left"></i> Back to Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Main Render ---
  return (
    <div className="tours-page">
      <Hero
        images={toursHeroImages}
        title="Our Tours"
        highlightText="Unforgettable Experiences"
        subtitle="Handcrafted Journeys Across Sri Lanka"
        badge="Calvera Signature Collection"
        primaryButton={{
          text: "View Packages",
          link: "#packages",
          icon: "fa-gift",
        }}
        secondaryButton={{
          text: "Contact Us",
          link: "/contact",
          icon: "fa-phone",
        }}
        showFeatures
        showScrollIndicator
      />

      <section id="packages" className="packages-section">
        <div className="container">
          <h2 className="section-title">Our Tour Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.theme}`}>
                <div className="image-wrapper">
                  <img
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    className="card-image-main"
                  />
                  {pkg.hoverImage && (
                    <img
                      src={pkg.hoverImage}
                      alt={pkg.imageAlt}
                      className="card-image-hover"
                    />
                  )}
                  <span className="package-tag">
                    {pkg.title.split(" ")[1]}
                  </span>
                </div>
                <div className="package-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.summary.slice(0, 120)}...</p>
                  <p className="duration">
                    <i className="far fa-clock"></i> {pkg.duration}
                  </p>
                  <button className="btn-view" onClick={() => openPopup(pkg)}>
                    <i className="fas fa-eye"></i> View Summary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPopup && <PackagePopup pkg={selectedPackage} onClose={closePopup} />}
      {/* RENDERING: Display the confirmation message when submitted */}
      {showConfirmation && <ConfirmationPopup onClose={closeConfirmation} />}
    </div>
  );
};

export default Tours;