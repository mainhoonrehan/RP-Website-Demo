import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Layers, MapPin } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-gold-400" />,
      title: 'Long Lasting Attars',
      description: 'Experience fragrances that stay with you from morning till night, crafted for longevity.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
      title: 'Affordable Luxury',
      description: 'Premium quality scents that don\'t break the bank. Luxury made accessible for everyone.',
    },
    {
      icon: <Layers className="w-8 h-8 text-gold-400" />,
      title: 'Large Collection',
      description: 'From traditional Indian mitti to modern French clones, find your signature scent.',
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-400" />,
      title: 'Trusted Local Shop',
      description: 'Proudly serving Patna with authentic fragrances and exceptional customer service.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-black-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-sm uppercase tracking-widest text-gold-400 font-semibold mb-4">Why Choose Us</h2>
          <div className="w-16 h-16 md:w-24 md:h-24 mb-4">
            <img 
              src="https://drive.google.com/uc?id=12Koh5ccFlUNCL9Z1bFQO9KxA75QHcpMh" 
              alt="Rahmani Perfumery Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">The Difference</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-black-900 border border-white/5 hover:border-gold-500/30 transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
