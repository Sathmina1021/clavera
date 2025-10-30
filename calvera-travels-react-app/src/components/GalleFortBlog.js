import React, { useState } from 'react';
import { X, Clock, MapPin, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleFortBlog = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const blogPhotos = [
    {
      id: 1,
      url: '/images/blog/galle-fort-ramparts.jpg',
      title: 'Galle Fort Ramparts at Sunset',
      description: 'The iconic ramparts of Galle Fort during golden hour, showcasing the massive stone fortifications built by the Dutch East India Company.',
      location: 'Galle Fort Ramparts',
      date: 'October 2024',
      details: 'These impressive coral and granite ramparts were constructed between 1640-1796, stretching for 3km around the peninsula. They feature 14 bastions including the famous Flag Rock and Sun Bastion.'
    },
    {
      id: 2,
      url: '/images/blog/galle-lighthouse.jpg',
      title: 'Galle Lighthouse',
      description: 'The historic Galle Lighthouse stands tall at the southern end of the fort, a beacon for sailors since 1938.',
      location: 'Flag Rock Bastion',
      date: 'October 2024',
      details: 'Built by the British in 1938, this 26.5-meter lighthouse replaced an earlier structure. It remains operational and is one of the most photographed spots in the fort.'
    },
    {
      id: 3,
      url: '/images/blog/dutch-church.jpg',
      title: 'Dutch Reformed Church',
      description: 'The beautiful Groote Kerk, the oldest Protestant church in Sri Lanka, dating back to 1755.',
      location: 'Church Street, Galle Fort',
      date: 'October 2024',
      details: 'This church features a stunning interior with historic gravestones embedded in the floor, commemorating Dutch colonial officials and their families.'
    },
    {
      id: 4,
      url: '/images/blog/fort-streets.jpg',
      title: 'Colonial Streets',
      description: 'Narrow cobblestone lanes lined with colonial-era buildings, now home to boutique shops and cafes.',
      location: 'Pedlar Street, Galle Fort',
      date: 'October 2024',
      details: 'The street layout follows the original Dutch grid system. Many buildings feature characteristic verandas and courtyards adapted to the tropical climate.'
    },
    {
      id: 5,
      url: '/images/blog/unawatuna-beach.jpg',
      title: 'Unawatuna Beach',
      description: 'The crescent-shaped bay of Unawatuna, just minutes from Galle Fort, offers perfect swimming conditions.',
      location: 'Unawatuna',
      date: 'October 2024',
      details: 'Protected by a double reef, Unawatuna was named one of the best beaches in the world. The calm waters make it ideal for swimming and snorkeling.'
    },
    {
      id: 6,
      url: '/images/blog/fort-sunset.jpg',
      title: 'Sunset Gathering',
      description: 'Locals and tourists gather on Flag Rock every evening to witness the spectacular sunset over the Indian Ocean.',
      location: 'Flag Rock, Galle Fort',
      date: 'October 2024',
      details: 'This daily ritual is one of Galle\'s most beloved traditions. Flag Rock was historically used as a diving point and signal station.'
    }
  ];

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + blogPhotos.length) % blogPhotos.length;
    setCurrentImageIndex(newIndex);
    setSelectedPhoto(blogPhotos[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % blogPhotos.length;
    setCurrentImageIndex(newIndex);
    setSelectedPhoto(blogPhotos[newIndex]);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9d6b6' }}>
      {/* Blog Header */}
      <div className="border-b-4" style={{ backgroundColor: '#22404a', borderColor: '#ea8f32' }}>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 text-sm mb-4" style={{ color: '#c5bea1' }}>
            <MapPin className="w-4 h-4" style={{ color: '#ea8f32' }} />
            <span>Galle, Southern Province, Sri Lanka</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4" style={{ color: '#ea8f32' }} />
            <span>15 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#e9d6b6' }}>
            Guide to the Charming Galle Fort, Sri Lanka
          </h1>
          
          <p className="text-xl mb-6 leading-relaxed" style={{ color: '#c5bea1' }}>
            A UNESCO World Heritage Site where colonial history meets vibrant modern life on Sri Lanka's stunning southern coast
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full ring-2 overflow-hidden" style={{ ringColor: '#ea8f32' }}>
                <img 
                  src="/images/avatar.jpg" 
                  alt="Author" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#e9d6b6' }}>Travel Sri Lanka</p>
                <p className="text-sm" style={{ color: '#c5bea1' }}>October 30, 2024</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: '#ea8f32', color: '#22404a' }}>
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline font-semibold">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4" style={{ ringColor: '#ea8f32' }}>
          <img 
            src="/images/blog/galle-fort-hero.jpg" 
            alt="Galle Fort" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl mb-8 leading-relaxed" style={{ color: '#22404a' }}>
            The southern coast of Sri Lanka is home to countless beautiful beaches, but nothing quite compares to Galle Fort. This UNESCO World Heritage Site is more than just an old structure; it's a living, breathing piece of history that beautifully blends its colonial past with vibrant modern Sri Lankan life.
          </p>
          
          <p className="mb-8 text-lg" style={{ color: '#22404a' }}>
            Walking through the fortified walls is like stepping into another era—a must-see on any Sri Lanka itinerary.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#22404a' }}>
            🕰 The Layers of History: Portuguese, Dutch, and British Rule
          </h2>
          
          <p className="mb-6 text-lg" style={{ color: '#22404a' }}>
            The story of Galle Fort is a perfect microcosm of Sri Lanka's colonial past. Long before the Europeans arrived, Galle was known as Gimhathiththa—a thriving ancient port frequented by Arab, Chinese, and Roman traders as early as the 4th century.
          </p>

          <div className="border-l-4 p-6 my-8 rounded-r-xl shadow-lg" style={{ backgroundColor: '#22404a', borderColor: '#ea8f32' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#e9d6b6' }}>1. The Portuguese Era (1505–1640)</h3>
            <p className="leading-relaxed" style={{ color: '#c5bea1' }}>
              The modern fort's story began in 1505 when Portuguese sailors, led by Lourenço de Almeida, landed here. They built the initial, modest fortification named Santa Cruz, primarily consisting of earthen ramparts and palisades, solidifying Galle as a key strategic stop for their trade routes.
            </p>
          </div>

          <div className="border-l-4 p-6 my-8 rounded-r-xl shadow-lg" style={{ backgroundColor: '#ea8f32', borderColor: '#22404a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#22404a' }}>2. The Dutch Transformation (1640–1796)</h3>
            <p className="leading-relaxed" style={{ color: '#22404a' }}>
              The true architectural magnificence we see today is thanks to the Dutch East India Company (VOC). In 1640, the Dutch, in alliance with the King of Kandy, captured the fort. They completely rebuilt and massively expanded the defenses using coral and granite, creating the colossal, impregnable stone ramparts and 14 distinct bastions (like the Sun, Moon, and Star bastions) that fully encircle the peninsula. Galle became the primary Dutch port on the island, flourishing as a hub for cinnamon and spices.
            </p>
          </div>

          <div className="border-l-4 p-6 my-8 rounded-r-xl shadow-lg" style={{ backgroundColor: '#c5bea1', borderColor: '#ea8f32' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#22404a' }}>3. The British Legacy (1796 onwards)</h3>
            <p className="leading-relaxed" style={{ color: '#22404a' }}>
              The British peacefully took over in 1796. While they largely preserved the fortifications, they adapted the town for administrative purposes, adding buildings and features like the new main gate and the Galle Clock Tower. The resulting streetscape is a unique fusion—European town planning overlaid with South Asian architectural adaptations like wide verandas and internal courtyards.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#22404a' }}>
            The Magic of the Ramparts: Sunrise to Sunset
          </h2>
          
          <p className="mb-6 text-lg" style={{ color: '#22404a' }}>
            The massive Galle Fort Ramparts offer sweeping, panoramic views of the Indian Ocean, a stunning reminder of the Fort's strategic past.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-xl shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: '#ea8f32' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#22404a' }}>☀️ Sunrise Stroll</h3>
              <p className="leading-relaxed" style={{ color: '#22404a' }}>
                Start your morning by joining local residents for a peaceful walk or run. The air is cool, and the golden light against the stone is incredible.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: '#22404a' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#ea8f32' }}>🌅 Sunset Spectacle</h3>
              <p className="leading-relaxed" style={{ color: '#c5bea1' }}>
                This is the Fort's main event. Grab a spot near the Galle Lighthouse or the Flag Rock Bastion. Enjoy the communal atmosphere as the sun dips below the horizon.
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="my-12 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'white' }}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#22404a' }}>Photo Gallery</h2>
            <p className="mb-6 text-lg" style={{ color: '#22404a' }}>Click on any photo to view details and navigate through the gallery</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {blogPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => handlePhotoClick(photo, index)}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square ring-2 ring-transparent hover:ring-4 transition-all" 
                  style={{ '--hover-ring-color': '#ea8f32' }}
                  onMouseEnter={(e) => e.currentTarget.style.ringColor = '#ea8f32'}
                  onMouseLeave={(e) => e.currentTarget.style.ringColor = 'transparent'}
                >
                  <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
                    <span className="text-white font-semibold text-sm text-center">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#22404a' }}>
            Lost in the Lanes: The Fort's Inner Charm
          </h2>
          
          <p className="mb-6 text-lg" style={{ color: '#22404a' }}>
            Inside the Fort, you'll discover a labyrinth of narrow, cobbled streets lined with immaculately preserved colonial-era buildings. It's a photographer's paradise!
          </p>

          <div className="space-y-6 my-8">
            <div className="flex gap-4 p-6 rounded-xl shadow-md transition-transform hover:scale-105" style={{ backgroundColor: 'white' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-md" style={{ backgroundColor: '#ea8f32' }}>
                🛍️
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#22404a' }}>Boutique Shopping</h3>
                <p className="leading-relaxed" style={{ color: '#22404a' }}>
                  The streets are filled with independent art galleries, chic boutique hotels, and shops selling everything from Sri Lankan spices to the island's famous moonstone jewelry. Don't miss the shops inside the beautifully restored Dutch Hospital Shopping Precinct.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl shadow-md transition-transform hover:scale-105" style={{ backgroundColor: 'white' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-md" style={{ backgroundColor: '#22404a', color: '#ea8f32' }}>
                🏛️
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#22404a' }}>Historic Sites to Seek Out</h3>
                <p className="leading-relaxed" style={{ color: '#22404a' }}>
                  Be sure to visit the Dutch Reformed Church (Groote Kerk), the Galle Fort Clock Tower, and the National Maritime Museum to dive deeper into the city's seafaring past.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl shadow-md transition-transform hover:scale-105" style={{ backgroundColor: 'white' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-md" style={{ backgroundColor: '#ea8f32' }}>
                🍽️
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#22404a' }}>Foodie Finds</h3>
                <p className="leading-relaxed" style={{ color: '#22404a' }}>
                  From fresh seafood curries to international cuisine, the Fort's cafes and restaurants offer a delightful mix. Find a cozy spot for a refreshing King Coconut water or a cup of Ceylon tea.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#22404a' }}>
            Beyond the Fort Walls
          </h2>
          
          <p className="mb-6 text-lg" style={{ color: '#22404a' }}>
            While the Fort is the star, don't forget the beautiful beaches nearby:
          </p>

          <div className="p-8 rounded-2xl my-8 shadow-lg" style={{ background: 'linear-gradient(135deg, #22404a 0%, #ea8f32 100%)' }}>
            <div className="space-y-6">
              <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: 'rgba(233, 214, 182, 0.95)' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#22404a' }}>🏖️ Unawatuna Beach</h3>
                <p className="leading-relaxed" style={{ color: '#22404a' }}>
                  Just a short tuk-tuk ride away, Unawatuna is famous for its sheltered bay, perfect for swimming and sunbathing.
                </p>
              </div>
              <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: 'rgba(233, 214, 182, 0.95)' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#22404a' }}>🌴 Jungle Beach</h3>
                <p className="leading-relaxed" style={{ color: '#22404a' }}>
                  A smaller, more secluded cove near Unawatuna, offering a quiet escape.
                </p>
              </div>
            </div>
          </div>

          <div className="border-4 p-8 rounded-2xl my-12 shadow-2xl" style={{ backgroundColor: '#ea8f32', borderColor: '#22404a' }}>
            <p className="text-2xl text-center font-medium italic leading-relaxed" style={{ color: '#22404a' }}>
              Galle Fort is a place to slow down, wander aimlessly, and soak up the unique atmosphere. It's where history meets the ocean, creating a destination that you'll never forget.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t-2" style={{ borderColor: '#22404a' }}>
          {['Galle Fort', 'Sri Lanka', 'UNESCO World Heritage', 'Colonial History', 'Travel Guide', 'Southern Sri Lanka'].map(tag => (
            <span 
              key={tag} 
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-110 cursor-pointer shadow-md" 
              style={{ backgroundColor: '#22404a', color: '#ea8f32' }}
            >
              #{tag.replace(/ /g, '')}
            </span>
          ))}
        </div>
      </article>

      {/* Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 transition-transform hover:scale-110 z-10 p-2 rounded-full" 
            style={{ backgroundColor: '#ea8f32', color: '#22404a' }}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 transition-transform hover:scale-110 z-10 p-2 rounded-full" 
            style={{ backgroundColor: '#ea8f32', color: '#22404a' }}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 transition-transform hover:scale-110 z-10 p-2 rounded-full" 
            style={{ backgroundColor: '#ea8f32', color: '#22404a' }}
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl w-full max-h-full overflow-y-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#e9d6b6' }}>
              <div className="relative" style={{ height: '60vh', backgroundColor: '#22404a' }}>
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#22404a' }}>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" style={{ color: '#ea8f32' }} />
                    {selectedPhoto.location}
                  </span>
                  <span>•</span>
                  <span>{selectedPhoto.date}</span>
                  <span>•</span>
                  <span className="font-semibold" style={{ color: '#ea8f32' }}>{currentImageIndex + 1} / {blogPhotos.length}</span>
                </div>

                <h2 className="text-3xl font-bold mb-4" style={{ color: '#22404a' }}>
                  {selectedPhoto.title}
                </h2>

                <p className="text-xl mb-6 leading-relaxed" style={{ color: '#22404a' }}>
                  {selectedPhoto.description}
                </p>

                <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: 'white' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#22404a' }}>About this photo</h3>
                  <p className="leading-relaxed" style={{ color: '#22404a' }}>
                    {selectedPhoto.details}
                  </p>
                </div>

                <div className="mt-6 flex gap-4">
                  <button className="px-6 py-3 rounded-lg transition-all hover:scale-105 font-semibold shadow-lg" style={{ backgroundColor: '#ea8f32', color: '#22404a' }}>
                    Download Image
                  </button>
                  <button className="px-6 py-3 border-2 rounded-lg transition-all hover:scale-105 font-semibold" style={{ borderColor: '#22404a', color: '#22404a' }}>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleFortBlog;