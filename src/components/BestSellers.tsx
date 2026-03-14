import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Eye } from 'lucide-react';
import { products } from '../data';
import { useCart } from '../store';

export const BestSellers = () => {
  const { addToCart } = useCart();

  return (
    <section id="best-sellers" className="py-24 bg-black-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-400 font-semibold mb-2">Top Picks</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Best Selling Perfumes</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black-800 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-300 shadow-lg hover:shadow-gold-500/10"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="p-3 bg-gold-400 text-black rounded-full hover:bg-gold-300 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-xl">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold-500/30">
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">{product.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                    {product.name}
                  </h4>
                  <span className="text-lg font-bold text-gold-400">₹{product.price}</span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3 px-4 bg-transparent border border-gold-500/50 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-black transition-colors duration-300 font-medium tracking-wide flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
