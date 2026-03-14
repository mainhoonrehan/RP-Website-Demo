import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://lh3.googleusercontent.com/d/12Koh5ccFlUNCL9Z1bFQO9KxA75QHcpMh" 
                alt="Rahmani Perfumery Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <h3 className="hidden font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                Rahmani Perfumery
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Discover the finest collection of Indian Attars, Arabic Attars, and premium French Perfume Clones. Luxury fragrances crafted for elegance and longevity.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#categories" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">Categories</a></li>
              <li><a href="#best-sellers" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">Best Sellers</a></li>
              <li><a href="#about" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Rahmani Perfumery. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-xs hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
