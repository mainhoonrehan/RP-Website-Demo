import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-black-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-400 font-semibold mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">What Our Customers Say</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-black-900 border border-white/5 hover:border-gold-500/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-serif font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-500">Verified Buyer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
