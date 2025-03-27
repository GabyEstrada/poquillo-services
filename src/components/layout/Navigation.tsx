
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  currentPage: 'home' | 'who-we-serve' | 'programs' | 'about';
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <Link to="/" className="text-black font-bold text-2xl">Poquillo</Link>
          <span className="ml-2 text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-sm">by Gaby Estrada</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'home' ? 'font-bold border-b-2 border-pink-500' : ''}`}>Home</Link>
          <Link to="/who-we-serve" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'who-we-serve' ? 'font-bold border-b-2 border-pink-500' : ''}`}>Who We Serve</Link>
          <Link to="/programs" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'programs' ? 'font-bold border-b-2 border-pink-500' : ''}`}>Services</Link>
          <Link to="/about" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'about' ? 'font-bold border-b-2 border-pink-500' : ''}`}>About</Link>
          <a 
            href="https://calendly.com/poquillo/30-min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition"
          >
            Work With Me
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link to="/" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'home' ? 'font-bold' : ''}`}>Home</Link>
            <Link to="/who-we-serve" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'who-we-serve' ? 'font-bold' : ''}`}>Who We Serve</Link>
            <Link to="/programs" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'programs' ? 'font-bold' : ''}`}>Services</Link>
            <Link to="/about" className={`text-gray-900 hover:text-pink-500 transition ${currentPage === 'about' ? 'font-bold' : ''}`}>About</Link>
            <a 
              href="https://calendly.com/poquillo/30-min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition"
            >
              Work With Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
