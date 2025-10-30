/**
 * Calvera Travels - Blog Components
 * 
 * This file contains two main components for a professional, multi-page blog:
 * 1. BlogListPage: The main blog page displaying a grid of all posts.
 * 2. BlogPostPage: The detail page for a single blog post.
 * 
 * It uses `react-router-dom` for navigation. Ensure you have it installed (`npm install react-router-dom`).
 * 
 * To integrate this into your app, you would set up routes in your main App.jsx like this:
 * 
 * import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 * import { BlogListPage, BlogPostPage } from './components/Blog';
 * // ... import other pages
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/blog" element={<BlogListPage />} />
 *         <Route path="/blog/:postId" element={<BlogPostPage />} />
 *         {/* ... other routes for your site */}
 *       </Routes>
 *     </Router>
 *   );
 * }
 */

import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, MapPin, ArrowLeft, Share2, BookOpen } from 'lucide-react';

// Import the custom CSS for the blog components
import './Blog.css';

// IMPORTANT: Replace these mock components with your actual imported components
// import Header from './Header';
// import Footer from './Footer';
// import CTA from './CTA';
// import Hero from './Hero';

// Mock Components (for demonstration - replace with your actual components)
const Header = () => <header className="bg-white shadow-md p-4 text-center font-bold text-xl">Calvera Travels</header>;
const Footer = () => <footer className="bg-gray-800 text-white p-8 text-center">Copyright © 2024 Calvera Travels</footer>;
const CTA = () => (
  <div className="bg-blue-600 text-white text-center p-12 my-16">
    <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
    <p className="mb-6">Explore our curated travel packages and start your journey today!</p>
    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">Explore Packages</button>
  </div>
);
const Hero = ({ title, subtitle }) => (
  <div className="bg-gray-900 text-white text-center p-20">
    <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
    <p className="text-xl text-gray-300">{subtitle}</p>
  </div>
);


// Data for the blog posts
const blogPostsData = [
  {
    id: 1,
    url: '/images/blog/galle-fort-ramparts.jpg',
    heroUrl: '/images/blog/galle-fort-hero.jpg',
    title: 'Guide to the Charming Galle Fort, Sri Lanka',
    author: 'Travel Sri Lanka',
    date: 'October 30, 2024',
    readTime: '15 min',
    location: 'Galle, Southern Province',
    excerpt: 'A UNESCO World Heritage Site where colonial history meets vibrant modern life on Sri Lanka's stunning southern coast.',
    content: `
      <p>The southern coast of Sri Lanka is home to countless beautiful beaches, but nothing quite compares to Galle Fort. This UNESCO World Heritage Site is more than just an old structure; it’s a living, breathing piece of history that beautifully blends its colonial past with vibrant modern Sri Lankan life.</p>
      <p>Walking through the fortified walls is like stepping into another era—a must-see on any Sri Lanka itinerary.</p>
      <h2 class="text-3xl font-bold my-6">The Layers of History</h2>
      <p>The story of Galle Fort is a perfect microcosm of Sri Lanka’s colonial past. From the Portuguese and Dutch to the British, each era left its mark on this stunning fortification.</p>
      <p>1. <strong>The Portuguese Era (1505–1640):</strong> The modern fort's story began in 1505 when Portuguese sailors, led by Lourenço de Almeida, landed here. They built the initial, modest fortification named Santa Cruz, primarily consisting of earthen ramparts and palisades, solidifying Galle as a key strategic stop for their trade routes.</p>
      <p>2. <strong>The Dutch Transformation (1640–1796):</strong> The true architectural magnificence we see today is thanks to the Dutch East India Company (VOC). In 1640, the Dutch, in alliance with the King of Kandy, captured the fort. They completely rebuilt and massively expanded the defenses using coral and granite, creating the colossal, impregnable stone ramparts and 14 distinct bastions (like the Sun, Moon, and Star bastions) that fully encircle the peninsula. Galle became the primary Dutch port on the island, flourishing as a hub for cinnamon and spices.</p>
      <p>3. <strong>The British Legacy (1796 onwards):</strong> The British peacefully took over in 1796. While they largely preserved the fortifications, they adapted the town for administrative purposes, adding buildings and features like the new main gate and the Galle Clock Tower. The resulting streetscape is a unique fusion—European town planning overlaid with South Asian architectural adaptations like wide verandas and internal courtyards.</p>
      <h2 class="text-3xl font-bold my-6">The Magic of the Ramparts: Sunrise to Sunset</h2>
      <p>The massive Galle Fort Ramparts offer sweeping, panoramic views of the Indian Ocean, a stunning reminder of the Fort's strategic past.</p>
      <ul>
        <li><strong>Sunrise Stroll:</strong> Start your morning by joining local residents for a peaceful walk or run. The air is cool, and the golden light against the stone is incredible.</li>
        <li><strong>Sunset Spectacle:</strong> This is the Fort's main event. Grab a spot near the Galle Lighthouse or the Flag Rock Bastion. Enjoy the communal atmosphere as the sun dips below the horizon.</li>
      </ul>
      <h2 class="text-3xl font-bold my-6">Lost in the Lanes: The Fort's Inner Charm</h2>
      <p>Inside the Fort, you'll discover a labyrinth of narrow, cobbled streets lined with immaculately preserved colonial-era buildings. It's a photographer's paradise!</p>
      <ul>
        <li><strong>Boutique Shopping:</strong> The streets are filled with independent art galleries, chic boutique hotels, and shops selling everything from Sri Lankan spices to the island's famous moonstone jewelry. Don't miss the shops inside the beautifully restored Dutch Hospital Shopping Precinct.</li>
        <li><strong>Historic Sites to Seek Out:</strong> Be sure to visit the Dutch Reformed Church (Groote Kerk), the Galle Fort Clock Tower, and the National Maritime Museum to dive deeper into the city's seafaring past.</li>
        <li><strong>Foodie Finds:</strong> From fresh seafood curries to international cuisine, the Fort's cafes and restaurants offer a delightful mix. Find a cozy spot for a refreshing King Coconut water or a cup of Ceylon tea.</li>
      </ul>
      <h2 class="text-3xl font-bold my-6">Beyond the Fort Walls</h2>
      <p>While the Fort is the star, don't forget the beautiful beaches nearby:</p>
      <ul>
        <li><strong>Unawatuna Beach:</strong> Just a short tuk-tuk ride away, Unawatuna is famous for its sheltered bay, perfect for swimming and sunbathing.</li>
        <li><strong>Jungle Beach:</strong> A smaller, more secluded cove near Unawatuna, offering a quiet escape.</li>
      </ul>
      <p class="text-xl italic text-center mt-10">Galle Fort is a place to slow down, wander aimlessly, and soak up the unique atmosphere. It's where history meets the ocean, creating a destination that you'll never forget.</p>
    `
  },
  {
    id: 2,
    url: '/images/blog/dutch-church.jpg',
    heroUrl: '/images/blog/dutch-church.jpg',
    title: 'Dutch Reformed Church: A Historical Gem',
    author: 'History Buff',
    date: 'September 15, 2024',
    readTime: '8 min',
    location: 'Galle Fort',
    excerpt: 'Explore the architectural beauty and rich history of the Groote Kerk, the oldest Protestant church in Sri Lanka.',
    content: `
      <p>The Dutch Reformed Church, also known as Groote Kerk, is a significant landmark within Galle Fort. Built in 1755, it stands as a testament to the Dutch colonial era and is the oldest Protestant church on the island.</p>
      <p>Its interior is particularly striking, featuring a beautiful wooden pulpit and historic gravestones embedded in the floor. These gravestones commemorate Dutch colonial officials and their families, offering a poignant glimpse into the lives of those who once inhabited the fort.</p>
      <p>Visiting the church provides a serene experience and a deeper understanding of the cultural layers that make up Galle Fort's unique identity.</p>
    `
  },
  {
    id: 3,
    url: '/images/blog/fort-streets.jpg',
    heroUrl: '/images/blog/fort-streets.jpg',
    title: 'Wandering the Cobblestone Streets of Galle Fort',
    author: 'Urban Explorer',
    date: 'October 5, 2024',
    readTime: '10 min',
    location: 'Galle Fort',
    excerpt: 'A journey through the labyrinthine lanes of Galle Fort, where every corner tells a story of colonial charm and vibrant local life.',
    content: `
      <p>Stepping into Galle Fort is like entering a different world. The narrow, cobbled streets are lined with immaculately preserved colonial-era buildings, now housing a delightful mix of boutique shops, art galleries, cafes, and hotels.</p>
      <p>The street layout still follows the original Dutch grid system, making it easy to get lost (in a good way!) and discover hidden gems. Many buildings feature characteristic verandas and internal courtyards, architectural adaptations designed to suit the tropical climate.</p>
      <p>It's a photographer's paradise, with vibrant colors, intricate details, and a constant buzz of activity. Don't forget to look up and admire the unique blend of European and South Asian architectural styles.</p>
    `
  },
  {
    id: 4,
    url: '/images/blog/unawatuna-beach.jpg',
    heroUrl: '/images/blog/unawatuna-beach.jpg',
    title: 'Unawatuna Beach: A Tropical Paradise Near Galle',
    author: 'Beach Lover',
    date: 'September 20, 2024',
    readTime: '7 min',
    location: 'Unawatuna',
    excerpt: 'Just a stone's throw from Galle Fort, Unawatuna offers a perfect escape with its sheltered bay and pristine waters.',
    content: `
      <p>While Galle Fort is a historical marvel, the nearby Unawatuna Beach offers a quintessential Sri Lankan beach experience. Just a short tuk-tuk ride away, this crescent-shaped bay is famous for its calm, sheltered waters, making it ideal for swimming and sunbathing.</p>
      <p>Protected by a double reef, Unawatuna was once named one of the best beaches in the world. The vibrant coral reefs also make it a popular spot for snorkeling and diving, where you can explore a rich underwater world.</p>
      <p>The beach is lined with charming cafes, restaurants, and guesthouses, offering a relaxed atmosphere to unwind after exploring the fort.</p>
    `
  },
  {
    id: 5,
    url: '/images/blog/galle-lighthouse.jpg',
    heroUrl: '/images/blog/galle-lighthouse.jpg',
    title: 'The Iconic Galle Lighthouse',
    author: 'Travel Sri Lanka',
    date: 'October 28, 2024',
    readTime: '5 min',
    location: 'Galle Fort',
    excerpt: 'Discover the history and beauty of the oldest light station in Sri Lanka, a beacon for sailors since 1938.',
    content: '<p>The Galle Lighthouse is one of the most iconic and photographed landmarks in the fort. Standing at 26.5 meters tall, it offers breathtaking views and a glimpse into the maritime history of the island.</p>'
  },
];

/**
 * ===================================================================
 * Blog List Page Component
 * ===================================================================
 * Displays a grid of all available blog posts.
 */
export const BlogListPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Hero title="Our Travel Blog" subtitle="Stories, guides, and inspiration from our adventures around the world." />
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPostsData.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
};

/**
 * BlogCard Component
 * A card for displaying a single blog post in a list.
 */
const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.id}`} className="block group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div className="relative">
      <img src={post.url} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <MapPin className="w-4 h-4 text-blue-500" />
        <span>{post.location}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
        <span className="font-semibold text-blue-600">Read More &rarr;</span>
      </div>
    </div>
  </Link>
);


/**
 * ===================================================================
 * Blog Post Page Component
 * ===================================================================
 * Displays the full content of a single blog post.
 */
export const BlogPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPostsData.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <BookOpen className="w-24 h-24 text-red-500 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Post Not Found</h1>
        <p className="text-gray-600 mb-6">We couldn't find the blog post you were looking for.</p>
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      
      <main>
        {/* Post Hero Image */}
        <div className="relative h-[50vh] bg-gray-800">
          <img src={post.heroUrl} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Post Meta and Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8 pb-8 border-b">
            <div className="flex items-center gap-4">
              <img src="/images/avatar.jpg" alt="Author" className="w-14 h-14 rounded-full" />
              <div>
                <p className="font-bold text-lg text-gray-900">{post.author}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-1">•</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};