import React from 'react';
import { Link } from 'react-router-dom';
 // Import the image
import './BlogListPage.css';

export const BlogListPage = () => {
  return (
    <div className="blog-list-page">


      {/* Single Blog Photo */}
      <main className="blog-grid-container">
        <div className="blog-grid">
          <Link to="/gallefort" className="blog-card">
            <div className="card-image-wrapper">
              <img
                src="/images/blog/gallefortblog.jpg"
                alt="Galle Fort Blog"
                className="gallefortblog-image"
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3>Guide to the Charming Galle Fort, Sri Lanka</h3>
              <p>Click to explore this beautiful UNESCO World Heritage Site.</p>
            </div>
          </Link>
          <Link to="/unawatuna" className="blog-card">
            <div className="card-image-wrapper">
              <img
                src="/images/blog/unawatuna-beach.jpg"
                alt="Unawatuna Beach Blog"
                className="gallefortblog-image"
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3>Unawatuna: A Paradise Beach on the South Coast</h3>
              <p>Discover the golden sands and turquoise waters of Unawatuna.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};