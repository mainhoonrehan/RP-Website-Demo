import React from 'react';
import { motion } from 'motion/react';
import { shopImages } from '../data';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-black-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-400 font-semibold mb-2">Inside Our Shop</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">The Rahmani Experience</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shopImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-48 md:h-96'
              }`}
            >
              <img
                src={image}
                alt={`Shop Gallery ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold-400 font-serif italic text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  Rahmani Perfumery
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
