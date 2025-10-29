import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="row">
          <div className="col-md-8">
            <div className="form-card">
              <h2>Get in Touch</h2>
              <p>
                Fill out the form below to send us a message and we will get back to you as soon as possible!
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    id="name" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    id="email" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-textarea" 
                    id="message" 
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="details-card">
              <h2>Contact Details</h2>
              <p>
                <strong>Address:</strong>
                123 Main Street, Colombo, Sri Lanka
              </p>
              <p>
                <strong>Phone:</strong>
                +94 11 234 5678
              </p>
              <p>
                <strong>WhatsApp:</strong>
                +94 77 123 4567
              </p>
              <p>
                <strong>Email:</strong>
                info@calveratravels.com
              </p>
              <p>
                <strong>Fax:</strong>
                +94 11 234 5679
              </p>
              <hr className="details-divider" />
              <h2>Follow Us</h2>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;