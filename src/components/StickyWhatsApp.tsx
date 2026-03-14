import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const StickyWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919234576090"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-black/90 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 shadow-xl">
        Chat with us
        {/* Arrow */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-4 border-transparent border-l-black/90" />
      </span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
};
