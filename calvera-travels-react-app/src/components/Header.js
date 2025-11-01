import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.jpg";

export default function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTopBar, setShowTopBar] = useState(true); 

import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.jpg";

export default function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTopBar, setShowTopBar] = useState(true); 

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDark(isDark);
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDark(isDark);
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const passed = y > 60;

      setScrolled(passed);
      setShowTopBar(!passed); 
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
    const onScroll = () => {
      const y = window.scrollY;
      const passed = y > 60;

      setScrolled(passed);
      setShowTopBar(!passed); 
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/" && location.pathname === "/Home");
  const isActive = (path) =>
    location.pathname === path ||
    (path === "/" && location.pathname === "/Home");

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      {/* === Top Bar (hidden while scrolled) === */}
      <div className={`hdr-top ${showTopBar ? "show" : "hide"}`}>
        <div className="hdr-top__inner">
          <div className="hdr-top__contact">
            <FaEnvelope />
            <a href="mailto:inquiries@calveratravels.com">
              inquiries@calveratravels.com
            </a>
            <span className="sep">|</span>
            <FaPhoneAlt />
            <a href="tel:+94112223344">Call Us</a>
          </div>
        </div>
      </div>
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      {/* === Top Bar (hidden while scrolled) === */}
      <div className={`hdr-top ${showTopBar ? "show" : "hide"}`}>
        <div className="hdr-top__inner">
          <div className="hdr-top__contact">
            <FaEnvelope />
            <a href="mailto:inquiries@calveratravels.com">
              inquiries@calveratravels.com
            </a>
            <span className="sep">|</span>
            <FaPhoneAlt />
            <a href="tel:+94112223344">Call Us</a>
          </div>
        </div>
      </div>

      {/* === Navigation === */}
      <nav className="hdr-nav">
        <div className="hdr-nav__inner">
          {/* Logo */}
          <div className="hdr-logo">
            <Link to="/">
              <img src={logo} alt="Calvera Travels" />
            </Link>
          </div>

          {/* Center Links */}
          <ul className="hdr-links">
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className={isActive("/AboutUs") ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Tours" className={isActive("/Tours") ? "active" : ""}>
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="/Destination"
                className={isActive("/Destination") ? "active" : ""}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/Planyourtrip"
                className={isActive("/Planyourtrip") ? "active" : ""}
              >
                Plan Your Trip
              </Link>
            </li>
            <li>
              <Link to="/blog" className={isActive("/blog") ? "active" : ""}>
                Blog
              </Link>
            </li>
          </ul>
      {/* === Navigation === */}
      <nav className="hdr-nav">
        <div className="hdr-nav__inner">
          {/* Logo */}
          <div className="hdr-logo">
            <Link to="/">
              <img src={logo} alt="Calvera Travels" />
            </Link>
          </div>

          {/* Center Links */}
          <ul className="hdr-links">
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className={isActive("/AboutUs") ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Tours" className={isActive("/Tours") ? "active" : ""}>
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="/Destination"
                className={isActive("/Destination") ? "active" : ""}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/Planyourtrip"
                className={isActive("/Planyourtrip") ? "active" : ""}
              >
                Plan Your Trip
              </Link>
            </li>
            <li>
              <Link to="/blog" className={isActive("/blog") ? "active" : ""}>
                Blog
              </Link>
            </li>
          </ul>

          {/* Right actions */}
          <div className="hdr-actions">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen((s) => !s)}
            >
              <FaSearch />
            </button>
            <button
              className="icon-btn"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
            <button
              className="icon-btn hdr-burger"
              aria-label="Menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Search box */}
        {searchOpen && (
          <form className="hdr-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search destinations, tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Go</button>
          </form>
        )}

        {/* Compact dropdown */}
        <div className={`hdr-mobile ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Tours" onClick={() => setMenuOpen(false)}>
                Tours
              </Link>
            </li>
            <li>
              <Link to="/Destination" onClick={() => setMenuOpen(false)}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/Planyourtrip" onClick={() => setMenuOpen(false)}>
                Plan Your Trip
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
          {/* Right actions */}
          <div className="hdr-actions">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen((s) => !s)}
            >
              <FaSearch />
            </button>
            <button
              className="icon-btn"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
            <button
              className="icon-btn hdr-burger"
              aria-label="Menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Search box */}
        {searchOpen && (
          <form className="hdr-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search destinations, tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Go</button>
          </form>
        )}

        {/* Compact dropdown */}
        <div className={`hdr-mobile ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Tours" onClick={() => setMenuOpen(false)}>
                Tours
              </Link>
            </li>
            <li>
              <Link to="/Destination" onClick={() => setMenuOpen(false)}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/Planyourtrip" onClick={() => setMenuOpen(false)}>
                Plan Your Trip
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
      </nav>
    </header>
  );
}
