import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Destination.css";
import { DESTINATIONS } from "../data/destinationData";

function slugify(name = "") {
  return name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

export default function Destination() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);

  const regions = ["all", "asia", "europe", "africa", "americas"];

  const filtered = useMemo(() => {
    let pool = activeFilter === "all" 
      ? DESTINATIONS 
      : DESTINATIONS.filter(d => (d.region || "").toLowerCase() === activeFilter);

    if (search.trim()) {
      pool = pool.filter(d =>
        (d.name + " " + (d.tagline || "") + " " + (d.region || ""))
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return [...pool].sort((a, b) => {
      if (sortBy === "region") return (a.region || "").localeCompare(b.region || "");
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [activeFilter, search, sortBy]);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="destination-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="hero-overlay" />
        <div className="hero-particles" />
        <div className="hero-content">
          <span className="hero-badge">Discover the World</span>
          <h1>Explore Destinations</h1>
          <p>Discover breathtaking places, hidden gems, and unforgettable experiences</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{DESTINATIONS.length}</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">
                {DESTINATIONS.reduce((acc, d) => acc + (d.places?.length || 0), 0)}
              </span>
              <span className="stat-label">Places</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">{favorites.length}</span>
              <span className="stat-label">Favorites</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" />
      </div>

      {/* Main */}
      <section className="destinations-section">
        <div className="container">
          {/* Controls */}
          <div className="toolbar">
            <div className="filter-bar">
              {regions.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "all" ? "All Regions" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            <div className="search-sort">
              <div className="search-box">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                {search && (
                  <button className="clear-search" onClick={() => setSearch("")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                )}
              </div>
              <select
                className="sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="region">Sort by Region</option>
              </select>
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  title="Grid view"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                  </svg>
                </button>
                <button
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                  title="List view"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6"/>
                    <line x1="8" y1="12" x2="21" y2="12"/>
                    <line x1="8" y1="18" x2="21" y2="18"/>
                    <line x1="3" y1="6" x2="3.01" y2="6"/>
                    <line x1="3" y1="12" x2="3.01" y2="12"/>
                    <line x1="3" y1="18" x2="3.01" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>
              Showing <strong>{filtered.length}</strong> of{" "}
              <strong>{DESTINATIONS.length}</strong> destinations
            </p>
          </div>

          {/* Grid/List */}
          <div className={`destinations-${viewMode}`}>
            {filtered.map(destination => {
              const slug = destination.slug || slugify(destination.name);
              const imgSrc = destination.image || "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=70";
              const isFav = favorites.includes(destination.id);

              return (
                <Link
                  key={destination.id || slug}
                  to={`/Destination/${slug}`}
                  className="destination-card"
                >
                  <div className="card-image">
                    <img src={imgSrc} alt={destination.name} loading="lazy" />
                    <button
                      className={`fav-btn ${isFav ? "active" : ""}`}
                      onClick={e => toggleFavorite(e, destination.id)}
                      title={isFav ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                    {destination.places?.length > 0 && (
                      <div className="places-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {destination.places.length} places
                      </div>
                    )}
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3>{destination.name}</h3>
                      <span className="card-region">
                        {(destination.region || "unknown").toUpperCase()}
                      </span>
                    </div>
                    {destination.tagline && (
                      <p className="card-tagline">{destination.tagline}</p>
                    )}
                    <div className="card-footer">
                      <span className="rating">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        4.8
                      </span>
                      <span className="reviews">256 reviews</span>
                    </div>
                  </div>
                  <div className="card-overlay">
                    <span className="explore-btn">
                      Explore
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="empty-results">
              <svg className="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"/>
              </svg>
              <h3>No destinations found</h3>
              <p>Try adjusting your filters or search terms</p>
              <button
                className="filter-btn active"
                onClick={() => {
                  setActiveFilter("all");
                  setSearch("");
                  setSortBy("name");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Quick Links */}
          {filtered.length > 0 && (
            <div className="quick-links">
              <h3>Popular Regions</h3>
              <div className="region-pills">
                {regions.slice(1).map(region => {
                  const count = DESTINATIONS.filter(
                    d => d.region?.toLowerCase() === region
                  ).length;
                  return (
                    <button
                      key={region}
                      className="region-pill"
                      onClick={() => setActiveFilter(region)}
                    >
                      <span className="pill-name">
                        {region.charAt(0).toUpperCase() + region.slice(1)}
                      </span>
                      <span className="pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}