import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiMail, FiLogIn, FiMenu, FiX } from "react-icons/fi";
import biofactor_logo from "../assets/biofactor_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Improved Logo Container */}
              <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center p-2 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={biofactor_logo} 
                  alt="Biofactor Logo" 
                  className="h-full w-full object-contain" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='12' fill='%23105933'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='36' font-weight='bold' fill='white' text-anchor='middle' dy='.3em'%3EBF%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl lg:text-2xl font-bold text-green-900 tracking-tight">
                  Biofactor
                </h1>
                <p className="text-xs text-green-600 font-medium hidden sm:block">
                  Agricultural Solutions & Technology
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-medium transition-colors duration-200 group"
              >
                <FiHome size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-medium transition-colors duration-200 group"
              >
                <FiUser size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span>About</span>
              </Link>
              <Link 
                to="/biofactor-microbes" 
                className="text-sm text-green-700 hover:text-green-900 font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                Microbes
              </Link>
              <Link 
                to="/biofactor-minerals" 
                className="text-sm text-green-700 hover:text-green-900 font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                Minerals
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-medium transition-colors duration-200 group"
              >
                <FiMail size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span>Contact</span>
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FiX size={24} className="text-green-700" />
                ) : (
                  <FiMenu size={24} className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-green-100">
            <ul className="flex flex-col space-y-1">
              {[
                { to: "/", icon: <FiHome size={20} />, text: "Home" },
                { to: "/about", icon: <FiUser size={20} />, text: "About" },
                { to: "/biofactor-microbes", icon: null, text: "Microbes" },
                { to: "/biofactor-minerals", icon: null, text: "Minerals" },
                { to: "/contact", icon: <FiMail size={20} />, text: "Contact Us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 text-green-700 hover:text-green-900 hover:bg-green-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;