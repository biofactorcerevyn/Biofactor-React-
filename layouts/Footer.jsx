import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Navigation } from 'lucide-react';
import biofactor_logo from "../assets/biofactor_logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center p-2 shadow-lg">
                <img 
                  src={biofactor_logo} 
                  alt="Biofactor Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Biofactor</h3>
                <p className="text-green-300 text-sm font-medium mt-1">
                  Agricultural Solutions & Technology
                </p>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed">
              Transforming agriculture through innovative technology and sustainable solutions for a healthier planet.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-green-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-green-300 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/microbes" className="text-green-300 hover:text-white transition-colors duration-200">Microbes</Link></li>
              <li><Link to="/minerals" className="text-green-300 hover:text-white transition-colors duration-200">Minerals</Link></li>
              <li><Link to="/contact" className="text-green-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          
          {/* Address Section */}
          <div>
            <h4 className="font-bold text-lg mb-6">Address</h4>
            <div className="space-y-4 text-green-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <p>4 & 5 Floors, Sai Medha Infra,</p>
                  <p>Arca Satya Residency, Kousalya Colony,</p>
                  <p>Bachupally, Hyderabad,</p>
                  <p>Telangana 500090</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/biofactor/@17.554047,78.378157,5z?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                <Navigation className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </div>
          
          {/* Services & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-2 text-green-300 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Agriculture
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Aquaculture
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Livestock
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Poultry
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Bioremediation
              </li>
            </ul>
            
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-green-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">info@biofactor.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">+91 1800 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-green-800 mt-12 pt-8 text-center">
          <p className="text-green-400 text-sm">
            © {new Date().getFullYear()} Biofactor Agricultural Solutions. All rights reserved.
          </p>
          <p className="text-green-500 text-xs mt-2">
            Committed to sustainable agriculture and environmental stewardship
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;