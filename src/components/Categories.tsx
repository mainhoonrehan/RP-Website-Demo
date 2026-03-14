import React from 'react';
import { motion } from 'motion/react';
import { categories } from '../data';

export const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-black-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-400 font-semibold mb-2">Our Collections</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Explore Categories</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h4 className="text-2xl font-serif font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h4>
                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="mt-4 w-12 h-[2px] bg-gold-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
