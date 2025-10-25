import React, { useState } from 'react';
import './PlanYourTrip.css';

const PlanYourTrip = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDates: '',
    budget: '',
    travelers: '',
    tripType: '',
    interests: [],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trip types and interests options
  const tripTypes = [
    'Beach Vacation',
    'Cultural Tour',
    'Adventure Trip',
    'Honeymoon',
    'Family Holiday',
    'Business Travel',
    'Luxury Getaway',
    'Backpacking'
  ];

  const interestsList = [
    'Historical Sites',
    'Nature & Wildlife',
    'Food & Cuisine',
    'Shopping',
    'Adventure Sports',
    'Relaxation & Spa',
    'Photography',
    'Local Culture',
    'Nightlife',
    'Art & Museums'
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          interests: [...prev.interests, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission (optional)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        destination: '',
        travelDates: '',
        budget: '',
        travelers: '',
        tripType: '',
        interests: [],
        message: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="plan-trip-page">
      {/* Hero Section */}
      <div className="page-hero">
        <div className="hero-content">
          <h1>Plan Your Perfect Trip</h1>
          <p>Let us craft a unique journey tailored to your dreams.</p>
        </div>
      </div>

      {/* Planning Steps Section */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h3>Tell Us Your Dreams</h3>
              <p>Share your travel preferences, interests, and what you'd love to experience.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="fas fa-magic"></i>
              </div>
              <h3>We Create Your Plan</h3>
              <p>Our experts design a personalized itinerary based on your unique requirements.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>Start Your Journey</h3>
              <p>Pack your bags and embark on the adventure of a lifetime, worry-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Itinerary Form Section */}
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Get a Custom Itinerary</h2>
          <p className="section-subtitle">Fill out the form below and our travel experts will create your perfect trip</p>
          
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Thank You!</h3>
              <p>We've received your travel request. Our expert will contact you within 24 hours with your custom itinerary.</p>
              <button 
                className="btn btn-secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Plan Another Trip
              </button>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className_name="form-group">
                    <label htmlFor="destination">Dream Destination *</label>
                    <input 
                      type="text" 
                      id="destination"
                      name="destination" 
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="Where do you want to go?" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelDates">Travel Dates</label>
                    <input 
                      type="text" 
                      id="travelDates"
                      name="travelDates" 
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      placeholder="Approximate dates or duration" 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select 
                      id="budget"
                      name="budget" 
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Budget</option>
                      <option value="economy">Economy ($500 - $1,500)</option>
                      <option value="moderate">Moderate ($1,500 - $3,000)</option>
                      <option value="luxury">Luxury ($3,000 - $7,000)</option>
                      <option value="premium">Premium ($7,000+)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelers">Number of Travelers</label>
                    <select 
                      id="travelers"
                      name="travelers" 
                      value={formData.travelers}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Travelers</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-6">5-6 People</option>
                      <option value="7+">7+ People</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tripType">Trip Type</label>
                  <select 
                    id="tripType"
                    name="tripType" 
                    value={formData.tripType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Trip Type</option>
                    {tripTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Interests (Select all that apply)</label>
                  <div className="interests-grid">
                    {interestsList.map((interest, index) => (
                      <label key={index} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us about your dream trip *</label>
                  <textarea 
                    id="message"
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What experiences are you looking for? Any specific requirements or special requests?" 
                    rows="5"
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <i className="fas fa-paper-plane"></i>
                  Get My Custom Plan
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">We Handle Everything</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>Flight Booking</h3>
              <p>Best deals on international and domestic flights with flexible options.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-hotel"></i>
              </div>
              <h3>Hotel Reservations</h3>
              <p>Luxury resorts, boutique hotels, or budget stays - we've got you covered.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>Transportation</h3>
              <p>Airport transfers, rental cars, and private drivers for seamless travel.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-passport"></i>
              </div>
              <h3>Visa Assistance</h3>
              <p>Expert guidance and support for all your visa requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTrip;
