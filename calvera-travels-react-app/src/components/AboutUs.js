import React from 'react';
import './About.css';

const AboutUs = () => {

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Travel Specialist',
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png'
    },
    {
      name: 'Sam Wilson',
      role: 'Head of Operations',
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png'
    }
  ];

  const values = [
    { 
      icon: 'fas fa-globe-asia', 
      title: 'Authenticity', 
      description: 'We provide genuine experiences that connect you with the local culture.' 
    },
    { 
      icon: 'fas fa-heart', 
      title: 'Passion', 
      description: 'We are passionate about travel and dedicated to crafting your perfect journey.' 
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Quality & Safety', 
      description: 'Your safety and comfort are our top priorities. We ensure the highest standards.' 
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="page-hero">
        <div className="hero-content">
          <h1>About Calvera Travels</h1>
          <p>Crafting unforgettable journeys with passion and expertise.</p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="page-section welcome-section">
        <div className="container">
          <div className="text-content">
            <h2 className="section-title">Welcome to Calvera Travel</h2>
            <p>Welcome to Calvera Travel, where every journey is crafted with passion, purpose, and a personal touch.</p>
            <p>We are a full-service travel company based in Sri Lanka, dedicated to curating unforgettable travel experiences across the island and beyond.</p>
            <p>At Calvera, travel isn’t just about reaching a destination — it’s about discovering new cultures, meeting people, and creating memories that last a lifetime.</p>
            <p>Whether you’re looking for a relaxing beach escape, a cultural adventure, a wildlife expedition, or a luxury honeymoon, our team ensures every detail is handled with care — from your first inquiry to the moment you return home.</p>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="page-section what-we-do-section">
        <div className="container">
          <h2 className="section-title text-center">What We Do</h2>
          <div className="what-we-do-content">
            <p>At Calvera, we specialize in custom-designed travel experiences that suit your style, budget, and purpose.</p>
            <h3>Our services include:</h3>
            <ul>
              <li><strong>Tailor-made Tours</strong> – Personalized itineraries designed around your interests.</li>
              <li><strong>Hotel Bookings & Transport</strong> – Comfortable stays and reliable transfers across Sri Lanka.</li>
              <li><strong>Adventure & Nature Tours</strong> – From misty hill-country treks to ocean safaris.</li>
              <li><strong>Cultural & Heritage Trips</strong> – Explore the rich traditions, temples, and festivals of our island.</li>
              <li><strong>Corporate & Group Travel</strong> – Seamless planning for meetings, incentives, and events.</li>
            </ul>
            <p>We combine local knowledge with global standards to bring you experiences that are authentic, safe, and unforgettable.</p>
          </div>
        </div>
      </section>
        {/* Our Promise Section */}
      <section className="page-section our-promise-section">
        <div className="container">
          <h2 className="section-title text-center">Our Promise</h2>
          <div className="promise-content">
            <p>to deliver journeys filled with trust, comfort, and inspiration.</p>
            <p>We believe every traveler deserves more than a tour; they deserve an experience that feels personal, meaningful, and perfectly planned.</p>
            <h3>We promise to:</h3>
            <ul>
              <li>Listen carefully to your needs and expectations.</li>
              <li>Provide transparent pricing and honest guidance.</li>
              <li>Ensure safety, comfort, and responsible travel practices.</li>
              <li>Be available 24/7 for support and assistance.</li>
            </ul>
            <p>you discover the soul of each place with confidence and care.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Calvera Travel Section */}
      <section className="page-section why-choose-us-section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Calvera Travel</h2>
          <p className="text-center">We don’t just take you places — we help you experience them in ways you’ll never forget.</p>
          <div className="why-choose-us-content">
            <ul>
              <li>Professional, experienced travel planners.</li>
              <li>Personalized itineraries for every type of traveler.</li>
              <li>Strong partnerships with trusted hotels and tour operators.</li>
              <li>24/7 traveler support and on-ground assistance.</li>
              <li>Commitment to sustainable and ethical tourism.</li>
              <li>Transparent communication and flexible booking options.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meaning of CALVERA Section */}
      <section className="page-section meaning-calvera-section">
        <div className="container">
          <h2 className="section-title text-center">Meaning of CALVERA</h2>
          <div className="calvera-meaning-content">
            <ul>
              <li><strong>C</strong> → Culture & Connection - celebrating heritage and traditions of Sri Lanka and the world.</li>
              <li><strong>A</strong> → Adventure - exploring new places with excitement and wonder.</li>
              <li><strong>L</strong> → Luxury & Leisure - offering comfort and quality in every journey.</li>
              <li><strong>V</strong> → Vision - shaping the future of tourism with creativity.</li>
              <li><strong>E</strong> → Experience - creating moments that last a lifetime.</li>
              <li><strong>R</strong> → Reliability - trusted service for travelers.</li>
              <li><strong>A</strong> → Authenticity - genuine experiences rooted in real stories and traditional.</li>
            </ul>
          </div>
        </div>
      </section>

    
      {/* Our Story Section */}
      <section className="page-section story-section">
        <div className="container">
          <div className="grid-container">
            <div className="text-content">
              <h2 className="section-title">Our Story</h2>
              <p>Founded on a love for exploration, Calvera Travels began as a small blog dedicated to sharing the hidden gems of Sri Lanka. Our passion for storytelling through travel quickly grew into a mission: to create seamless, authentic, and unforgettable travel experiences for everyone.</p>
              <p>Today, we are a full-service travel agency, but our core values remain. We believe travel is about more than just visiting new places; it's about creating lasting memories, forging new connections, and discovering the world in a meaningful way.</p>
            </div>
            <div className="image-content">
              <img src="https://i.ibb.co/yB1s1gX/Galleface-green.png" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="page-section values-section">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="page-section team-section">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;