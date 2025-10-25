import React, { useState } from 'react';
import './Destination.css';

const Destination = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [destinations, setDestinations] = useState([
    // Destination data
    // Asia destinations
    { id: 1, name: 'Anuradhapura, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/9rXVJc8/Anuradhapura-Front-Page.png', description: 'Step back in time amidst ancient stupas and sacred temples, the heart of Sri Lankan history.', showDescription: false },
    { id: 2, name: 'Negombo, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/pnp0x8f/Browns-Beach.png', description: 'Relax on golden beaches, explore vibrant fishing villages, and witness stunning sunsets.', showDescription: false },
    { id: 3, name: 'Colombo, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/yB1s1gX/Galleface-green.png', description: 'Experience the bustling capital with its colonial architecture, modern cafes, and rich cultural tapestry.', showDescription: false },
    { id: 4, name: 'Sigiriya, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/yQc3rW2/Full-anuradhapura.png', description: 'Ascend the majestic Lion Rock, a UNESCO World Heritage site with ancient frescoes and panoramic views.', showDescription: false },
    { id: 5, name: 'Galle, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/0G3p5TM/Negambo-front-page.png', description: 'Wander through the historic Galle Fort, a charming Dutch-colonial town with boutique shops and art galleries.', showDescription: false },
    { id: 6, name: 'Kandy, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/xX8m21j/Ruwanweliseya.png', description: 'Discover the cultural capital, home to the sacred Temple of the Tooth Relic and lush botanical gardens.', showDescription: false },
    { id: 7, name: 'Mirissa, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/wYkRkG7/3403161-removebg-preview.png', description: 'Enjoy whale watching, surfing, and vibrant beach life in this popular southern coastal town.', showDescription: false },
    { id: 8, name: 'Polonnaruwa, Sri Lanka', region: 'asia', image: 'https://i.ibb.co/2jM0VXT/man-avatar-vector-male-boy-face-person-user-portrai-icon-isolated-on-white-background-212372-2350-rem.png', description: 'Explore the well-preserved ruins of ancient kingdoms, including giant Buddha statues and intricate rock carvings.', showDescription: false },
    { id: 9, name: 'pasikuda, Sri Lanka', region: 'asia', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop', description: 'The Island of the Gods, known for its spiritual retreats, volcanic mountains, and coral reefs.', showDescription: false },
    { id: 10, name: 'Arugambay, Sri Lanka', region: 'asia', image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop', description: "Thailand's largest island, famous for its stunning beaches, vibrant nightlife, and diving spots.", showDescription: false },

    // Europe destinations
    { id: 11, name: 'kalpititiya, Sri Lanka', region: 'europe', image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=300&fit=crop', description: 'Picture-perfect sunsets, iconic white-washed villages, and stunning caldera views.', showDescription: false },
    { id: 12, name: 'nuwaraeliya, Sri Lanka', region: 'europe', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop', description: 'The Eternal City, steeped in history with ancient ruins, magnificent art, and delicious cuisine.', showDescription: false },
    { id: 13, name: 'Jaffna,Sri Lanka', region: 'europe', image: 'https://images.unsplash.com/photo-1502602898669-a387388247f3?w=400&h=300&fit=crop', description: 'The city of love and lights, featuring iconic landmarks, world-class museums, and charming cafes.', showDescription: false },
    { id: 14, name: 'Dambulla,Sri Lanka', region: 'europe', image: 'https://images.unsplash.com/photo-1506781961370-f6639972568b?w=400&h=300&fit=crop', description: 'A vibrant metropolis blending history with modernity, offering diverse culture and landmarks.', showDescription: false },

    // Africa destinations
    { id: 15, name: 'Sinharaja, Sri Lanka', region: 'africa', image: 'https://images.unsplash.com/photo-1547476900-c1116211211b?w=400&h=300&fit=crop', description: 'A breathtaking city nestled between Table Mountain and the Atlantic Ocean, known for its natural beauty.', showDescription: false },
    { id: 16, name: 'Kalpitiya, Sri Lanka', region: 'africa', image: 'https://images.unsplash.com/photo-1523805009341-2497615d8422?w=400&h=300&fit=crop', description: 'The Red City, filled with bustling souks, enchanting palaces, and a vibrant atmosphere.', showDescription: false },

    // Americas destinations
    { id: 17, name: 'Ella, Sri Lanka', region: 'americas', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', description: 'Samba, sun, and stunning landscapes, from Copacabana beach to Christ the Redeemer.', showDescription: false },
    { id: 18, name: 'Udawalawa, Sri Lanka', region: 'americas', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop', description: 'The city that never sleeps, offering iconic skyscrapers, Broadway shows, and diverse neighborhoods.', showDescription: false },
    { id: 19, name: 'Yala, Sri Lanaka', region: 'americas', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop', description: 'Pristine Caribbean beaches, ancient Mayan ruins, and vibrant nightlife.', showDescription: false },
    { id: 20, name: 'Trincomale, Sri Lanka', region: 'americas', image: 'https://images.unsplash.com/photo-1534292192623-8a5d7a68c511?w=400&h=300&fit=crop', description: 'The lost city of the Incas, a breathtaking ancient citadel set high in the Andes Mountains.', showDescription: false }
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
    ); // Close all descriptions when filter changes
  };

  const handleCardClick = (id) => {
    setDestinations(prevDestinations => 
      prevDestinations.map(dest => 
        dest.id === id ? { ...dest, showDescription: !dest.showDescription } : { ...dest, showDescription: false }
      )
    );
  };

  return (
    <div className="destination-page">
     
      {/* Hero Section */}
      <div className="page-hero">
        <div className="hero-content">
          <h1>Explore Our Destinations</h1>
          <p>From tropical paradises to ancient cities, your next adventure awaits.</p>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="page-section">
        <div className="container">
          <div className="filter-bar">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All
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