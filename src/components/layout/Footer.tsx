
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Link to="/" className="text-black font-bold text-xl">Poquillo</Link>
              <span className="ml-2 text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-sm">by Gaby Estrada</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-xs mx-auto md:mx-0">
              Helping women entrepreneurs build confidence and clarity in their business journey.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-pink-500 transition">Home</Link></li>
                <li><Link to="/who-we-serve" className="text-gray-600 hover:text-pink-500 transition">Who We Serve</Link></li>
                <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Services</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-pink-500 transition">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Quick Consultation</Link></li>
                <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Business Clarity Session</Link></li>
                <li><Link to="/programs" className="text-gray-600 hover:text-pink-500 transition">Strategy Session</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/poquillo1212/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/poquillo/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">LinkedIn</a></li>
                <li>
                  <a 
                    href="https://www.youtube.com/@poquillo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-pink-500 transition"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://poquillo.me/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-pink-500 transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Poquillo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
