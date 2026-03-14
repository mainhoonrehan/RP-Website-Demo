import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { useCart } from '../store';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-gold-500/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/12Koh5ccFlUNCL9Z1bFQO9KxA75QHcpMh" 
              alt="Rahmani Perfumery Logo" 
              className="h-10 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span className="hidden font-serif text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
              Rahmani Perfumery
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://wa.me/919234576090"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9234576090</span>
            </a>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-300 hover:text-gold-400 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transform translate-x-1/4 -translate-y-1/4">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919234576090"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-4 text-base font-medium text-gold-400 hover:bg-white/5 rounded-md"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9234576090</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
