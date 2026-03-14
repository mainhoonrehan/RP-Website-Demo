import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { whatsappReviews } from '../data';

export const WhatsAppReviews = () => {
  return (
    <section className="py-24 bg-black-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
            <h2 className="text-sm uppercase tracking-widest text-[#25D366] font-semibold">WhatsApp Wall of Love</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Real Feedback from Real People</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We take pride in our customer satisfaction. Here are some direct screenshots of reviews we receive on WhatsApp.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatsappReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[9/16] bg-white/5 border border-white/10 group-hover:border-[#25D366]/50 transition-all duration-500">
                <img
                  src={review.image}
                  alt={review.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-medium text-sm mb-2">{review.caption}</p>
                  <div className="flex items-center gap-2 text-[#25D366] text-xs font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4" />
                    Verified WhatsApp Review
                  </div>
                </div>
                
                {/* WhatsApp Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 transform group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/919234576090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us on WhatsApp
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
