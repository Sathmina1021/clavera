import React, { useState, useEffect } from 'react';
import './Destination.css';

const Destination = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Background images for hero section
  const heroBackgrounds = [
    '/images/destination/Desti-hero/destherobak2.jpg',
    '/images/destination/Desti-hero/destiherobak4.jpg',
    '/images/destination/Desti-hero/destihreobak3.jpg',
    '/images/destination/Desti-hero/destihrobak.jpg'
  ];

  // Auto-rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  const [destinations, setDestinations] = useState([
    // Asia destinations
    { 
      id: 1, 
      name: 'Anuradhapura, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/9rXVJc8/Anuradhapura-Front-Page.png', 
      description: 'Step back in time amidst ancient stupas and sacred temples, the heart of Sri Lankan history.', 
      showDescription: false 
    },
    { 
      id: 2, 
      name: 'Negombo, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/pnp0x8f/Browns-Beach.png', 
      description: 'Relax on golden beaches, explore vibrant fishing villages, and witness stunning sunsets.', 
      showDescription: false 
    },
    { 
      id: 3, 
      name: 'Colombo, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/yB1s1gX/Galleface-green.png', 
      description: 'Experience the bustling capital with its colonial architecture, modern cafes, and rich cultural tapestry.', 
      showDescription: false 
    },
    { 
      id: 4, 
      name: 'Sigiriya, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/yQc3rW2/Full-anuradhapura.png', 
      description: 'Ascend the majestic Lion Rock, a UNESCO World Heritage site with ancient frescoes and panoramic views.', 
      showDescription: false 
    },
    { 
      id: 5, 
      name: 'Galle, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/0G3p5TM/Negambo-front-page.png', 
      description: 'Wander through the historic Galle Fort, a charming Dutch-colonial town with boutique shops and art galleries.', 
      showDescription: false 
    },
    { 
      id: 6, 
      name: 'Kandy, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/xX8m21j/Ruwanweliseya.png', 
      description: 'Discover the cultural capital, home to the sacred Temple of the Tooth Relic and lush botanical gardens.', 
      showDescription: false 
    },
    { 
      id: 7, 
      name: 'Mirissa, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/wYkRkG7/3403161-removebg-preview.png', 
      description: 'Enjoy whale watching, surfing, and vibrant beach life in this popular southern coastal town.', 
      showDescription: false 
    },
    { 
      id: 8, 
      name: 'Polonnaruwa, Sri Lanka', 
      region: 'asia', 
      image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png', 
      description: 'Explore the well-preserved ruins of ancient kingdoms, including giant Buddha statues and intricate rock carvings.', 
      showDescription: false 
    },
    { 
      id: 9, 
      name: 'Pasikuda, Sri Lanka', 
      region: 'asia', 
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop', 
      description: 'Pristine beaches with shallow, calm waters perfect for swimming and water sports.', 
      showDescription: false 
    },
    { 
      id: 10, 
      name: 'Arugam Bay, Sri Lanka', 
      region: 'asia', 
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop', 
      description: 'A world-renowned surfing destination with laid-back vibes and pristine beaches.', 
      showDescription: false 
    },

    // Europe destinations
    { 
      id: 11, 
      name: 'Kalpitiya, Sri Lanka', 
      region: 'europe', 
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=300&fit=crop', 
      description: 'A coastal paradise known for kite surfing, dolphin watching, and pristine beaches.', 
      showDescription: false 
    },
    { 
      id: 12, 
      name: 'Nuwara Eliya, Sri Lanka', 
      region: 'europe', 
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop', 
      description: 'The Little England of Sri Lanka, with colonial architecture, tea plantations, and cool climate.', 
      showDescription: false 
    },
    { 
      id: 13, 
      name: 'Jaffna, Sri Lanka', 
      region: 'europe', 
      image: 'https://images.unsplash.com/photo-1502602898669-a387388247f3?w=400&h=300&fit=crop', 
      description: 'Experience rich Tamil culture, historic sites, and unique northern Sri Lankan cuisine.', 
      showDescription: false 
    },
    { 
      id: 14, 
      name: 'Dambulla, Sri Lanka', 
      region: 'europe', 
      image: 'https://images.unsplash.com/photo-1506781961370-f6639972568b?w=400&h=300&fit=crop', 
      description: 'Home to the magnificent cave temples with ancient Buddhist murals and statues.', 
      showDescription: false 
    },

    // Africa destinations
    { 
      id: 15, 
      name: 'Sinharaja, Sri Lanka', 
      region: 'africa', 
      image: 'https://images.unsplash.com/photo-1547476900-c1116211211b?w=400&h=300&fit=crop', 
      description: 'A UNESCO World Heritage rainforest with incredible biodiversity and endemic species.', 
      showDescription: false 
    },
    { 
      id: 16, 
      name: 'Kalpitiya Peninsula, Sri Lanka', 
      region: 'africa', 
      image: 'https://images.unsplash.com/photo-1523805009341-2497615d8422?w=400&h=300&fit=crop', 
      description: 'A pristine coastal area perfect for water sports and dolphin watching adventures.', 
      showDescription: false 
    },

    // Americas destinations
    { 
      id: 17, 
      name: 'Ella, Sri Lanka', 
      region: 'americas', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 
      description: 'A charming hill country town with breathtaking views, waterfalls, and hiking trails.', 
      showDescription: false 
    },
    { 
      id: 18, 
      name: 'Udawalawe, Sri Lanka', 
      region: 'americas', 
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop', 
      description: 'Famous national park offering incredible elephant safaris and wildlife experiences.', 
      showDescription: false 
    },
    { 
      id: 19, 
      name: 'Yala, Sri Lanka', 
      region: 'americas', 
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop', 
      description: 'Sri Lanka\'s most visited national park, known for leopard sightings and diverse wildlife.', 
      showDescription: false 
    },
    { 
      id: 20, 
      name: 'Trincomalee, Sri Lanka', 
      region: 'americas', 
      image: 'https://images.unsplash.com/photo-1534292192623-8a5d7a68c511?w=400&h=300&fit=crop', 
      description: 'Beautiful harbor city with pristine beaches, hot springs, and whale watching opportunities.', 
      showDescription: false 
    }
  ]);

  // Filter destinations based on active filter
  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.region === activeFilter);

  // Filter button click handler
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setDestinations(prevDestinations => 
      prevDestinations.map(dest => ({ ...dest, showDescription: false }))
    );
  };

  // Card click handler to toggle description
  const handleCardClick = (id) => {
    setDestinations(prevDestinations => 
      prevDestinations.map(dest => 
        dest.id === id 
          ? { ...dest, showDescription: !dest.showDescription } 
          : { ...dest, showDescription: false }
      )
    );
  };

  return (
    <div className="destination-page">
     
      {/* Hero Section with Dynamic Background Slideshow */}
      <div 
        className="page-hero" 
        style={{
          backgroundImage: `url(${heroBackgrounds[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Explore Our Destinations</h1>
          <p>From tropical paradises to ancient cities, your next adventure awaits.</p>
          
          {/* Slideshow Navigation Indicators */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginTop: '30px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                style={{
                  width: currentBgIndex === index ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '20px',
                  border: '2px solid white',
                  backgroundColor: currentBgIndex === index ? 'white' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: currentBgIndex === index 
                    ? '0 0 20px rgba(255, 255, 255, 0.8)' 
                    : 'none'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="page-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Destinations
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'asia' ? 'active' : ''}`}
              onClick={() => handleFilterClick('asia')}
            >
              Asia
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'europe' ? 'active' : ''}`}
              onClick={() => handleFilterClick('europe')}
            >
              Europe
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'africa' ? 'active' : ''}`}
              onClick={() => handleFilterClick('africa')}
            >
              Africa
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'americas' ? 'active' : ''}`}
              onClick={() => handleFilterClick('americas')}
            >
              Americas
            </button>
          </div>

          {/* Destinations Grid */}
          <div className="destinations-grid">
            {filteredDestinations.map(destination => (
              <div 
                key={destination.id} 
                className={`destination-card ${destination.showDescription ? 'show-description' : ''}`} 
                data-region={destination.region}
                onClick={() => handleCardClick(destination.id)}
              >
                <img src={destination.image} alt={destination.name} />
                <div className="card-overlay">
                  <h3>{destination.name}</h3>
                </div>
                {destination.showDescription && (
                  <div className="destination-description">
                    <p>{destination.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;