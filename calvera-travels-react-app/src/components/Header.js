import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// 1. Import the custom theme hook
import { useTheme } from "../context/ThemeContext"; 

// Mock data for search suggestions across ALL pages (Destinations, Tours, Blogs, etc.)
const GLOBAL_SEARCH_DATA = [
  // Destinations
  "Sri Lanka - Coastal Routes",
  "Maldives - Luxury Water Villas",
  "Thailand - Bangkok Nightlife",
  "Vietnam - Ha Long Bay Cruises",
  "Nepal - Everest Base Camp Trek",
  "India - Golden Triangle",
  "Indonesia - Bali Relaxation",
  "Japan - Cherry Blossom Tour",
  // Tours
  "Adventure Tour Package 2025",
  "Family Holiday Deals",
  "Honeymoon Packages Asia",
  "Budget Backpacking Tours",
  // Blogs
  "Guide to Visa Requirements",
  "Best time to visit Sri Lanka",
  "Top 5 Eco-Tourism Sites",
  "Packing checklist for Asia",
  // Other Pages/Keywords
  "About Us - Our Story",
  "Plan Your Trip - Contact Form",
  "Testimonials & Reviews",
  "Careers at Calvera Travels",
];

// =======================================================
// SVG Icons (Integrated for use in Header & Modal)
// =======================================================
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const SunIcon = () => (
    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" /><path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" /><path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
      </g>
    </svg>
);

const MoonIcon = () => (
    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </g>
    </svg>
);


// =======================================================
// SearchModal Component
// =======================================================
const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle suggestion filtering (mock global search)
  useEffect(() => {
    if (query.length > 1) {
      const filtered = GLOBAL_SEARCH_DATA.filter((dest) =>
        dest.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Handle keydown for escape key to close modal
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log(`Global search triggered for: ${query}`);
      alert(`Global search triggered for: ${query}`);
      onClose();
      setQuery("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    inputRef.current.focus();
    // In a real scenario, you might trigger search/navigation here
  };

  return (
    <div className={`search-modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
        <div
            ref={modalRef}
            className={`search-modal-content ${isOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()} // Keep modal open on content click
        >
            <button className="search-modal-close-btn" onClick={onClose} aria-label="Close search modal">
                <CloseIcon />
            </button>
            <form className="search-form-in-modal" onSubmit={handleSearchSubmit}>
                <div className="input-group">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search here..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" aria-label="Perform search">
                        Search <SearchIcon />
                    </button>
                </div>
            </form>

            {suggestions.length > 0 && (
            <ul className="suggestions-list">
                {suggestions.map((item, index) => (
                <li key={index} onClick={() => handleSuggestionClick(item)}>
                    <span className="suggestion-icon">→</span> {item}
                </li>
                ))}
            </ul>
            )}

            {query.length > 1 && suggestions.length === 0 && (
                <div className="no-results">
                    No results found for **"{query}"**. Try a different keyword.
                </div>
            )}
        </div>
    </div>
  );
};

// =======================================================
// Header Component (FIXED)
// =======================================================
const Header = () => {
  // 2. Use the context hook instead of local theme state and useEffects
  const { theme, toggleTheme } = useTheme(); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // State for Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // === Scroll Detection for Top Bar Hide & Header Shrink ===
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
      setHideTopBar(currentScroll > lastScrollY && currentScroll > 100);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* === Header (Contains both Top Bar and Navbar) === */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        
        {/* === Top Bar (This element's vertical space will collapse) === */}
        <div className={`top-bar ${hideTopBar ? "hide" : ""}`}>
          <div className="top-bar-content">
            <a href="mailto:info@calveratravels.com" className="top-bar-item">
              info@calveratravels.com
            </a>
            <a href="tel:+94771234567" className="top-bar-item">
              Call Us: +94 77 123 4567
            </a>
          </div>
        </div>

        <nav className="navbar">
          <div className="nav-container">
            {/* === Logo === */}
            <NavLink to="/" className="logo">
              {/* Note: Ensure the logo image path is correct */}
              <img
                src="/images/logo.png" 
                alt="Calvera Travels Logo"
                className="logo-image"
              />
              <div className="logo-text">
                <h2>CALVERA</h2>
                <span>TRAVELS</span>
              </div>
            </NavLink>

            {/* === Nav Links === */}
            <ul className="nav-links">
              <li><NavLink to="/" end>HOME</NavLink></li>
              <li><NavLink to="/AboutUs">ABOUT US</NavLink></li>
              <li><NavLink to="/Destination">DESTINATIONS</NavLink></li>
              <li><NavLink to="/Tours">TOURS</NavLink></li>
              <li><NavLink to="/Planyourtrip">PLAN YOUR TRIP</NavLink></li>
              <li><NavLink to="/Blog">BLOGS</NavLink></li>
            </ul>

            {/* === Action Icons (Search, Theme Toggle, Menu) === */}
            <div className="header-actions">
                {/* Search Icon Button */}
                <button 
                    className="icon-btn search-icon-btn" 
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Open search modal"
                >
                    <SearchIcon />
                </button>

                {/* Theme Toggle */}
                <label className="theme-switch icon-btn" aria-label="Toggle theme">
                    <input
                        type="checkbox"
                        // 3. Use theme state from context
                        checked={theme === "dark"} 
                        // 4. Use toggleTheme function from context
                        onChange={toggleTheme} 
                    />
                    {/* Sun Icon */}
                    <SunIcon />
                    {/* Moon Icon */}
                    <MoonIcon />
                </label>

                {/* === Menu Icon === */}
                <button
                    className={`menu-icon icon-btn ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    tabIndex={0}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
          </div>
        </nav>

        {/* === Dropdown Menu (for mobile/hamburger) === */}
        <div className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
            <NavLink to="/Contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <div className="dropdown-divider"></div>
            <NavLink to="/Gallery" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/FAQ" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </NavLink>
            <NavLink to="/Testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </NavLink>
            <NavLink to="/Careers" onClick={() => setIsMenuOpen(false)}>
              Careers
            </NavLink>
            <NavLink to="/Privacy" onClick={() => setIsMenuOpen(false)}>
              Privacy Policy
            </NavLink>
        </div>
      </header>

      {/* Search Modal RENDER */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Header;