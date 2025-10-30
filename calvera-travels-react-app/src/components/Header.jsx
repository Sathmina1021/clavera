import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Home, Mail, PenSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Calvera Travels
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <Home className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link to="/packages" className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <Briefcase className="w-5 h-5 mr-2" />
            Packages
          </Link>
          <Link to="/blog" className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <PenSquare className="w-5 h-5 mr-2" />
            Blog
          </Link>
          <Link to="/contact" className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Link>
        </div>
        <button className="md:hidden text-gray-600 hover:text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
