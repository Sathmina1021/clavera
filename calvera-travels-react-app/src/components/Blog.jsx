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

// Assuming you have these layout components
// import Header from './Header';
// import Footer from './Footer';
// import CTA from './CTA';
// import Hero from './Hero';

// Mock Components if they don't exist, for layout demonstration
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
    `
  },
  {
    id: 2,
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
  // Add more blog posts here...
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
