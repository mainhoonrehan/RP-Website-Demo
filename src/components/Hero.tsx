import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/d/1Ulk0eTMFJ_XVvc3a2huxYwXA6tT3Ndx-"
          alt="Luxury Perfume Background"
          referrerPolicy="no-referrer"
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
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
            Discover Long Lasting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
              Luxury Fragrances
            </span>
          </h1>
          
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

    </section>
  );
};
