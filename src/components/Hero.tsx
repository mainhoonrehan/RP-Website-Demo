import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Perfume Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Logo Display */}
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative w-48 h-48 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 bg-gold-400/10 blur-3xl rounded-full" />
              <img 
                src="/logo.png" 
                alt="Rahmani Perfumery Logo" 
                className="relative w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] brightness-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
              Discover Long Lasting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
                Luxury Fragrances
              </span>
            </h1>
            <p className="text-gold-400/80 font-serif italic text-lg md:text-xl tracking-[0.3em] uppercase">
              Fragrance that your soul desires
            </p>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed">
            Premium Indian, Arabic Attars & French Perfume Clones at Affordable Prices.
            Experience the essence of elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#best-sellers"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-gold-400 border border-transparent rounded-full overflow-hidden transition-all hover:bg-gold-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 w-full sm:w-auto"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop Now
            </a>
            
            <a
              href="https://wa.me/919234576090?text=Hi%20Rahmani%20Perfumery,%20I%20would%20like%20to%20order%20some%20perfumes."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-transparent border border-gold-400 rounded-full overflow-hidden transition-all hover:bg-gold-400/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
