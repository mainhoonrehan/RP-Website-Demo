import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold-400 font-semibold mb-2">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Our Location</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-black-800 p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
              <h4 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Address</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Khagaul Rd, Fiya Colony, Maulana Azad Nagar,<br />
                      Phulwari Sharif, Patna, Bihar 801505
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Phone / WhatsApp</h5>
                    <a href="https://wa.me/919234576090" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                      +91 9234576090
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Opening Hours</h5>
                    <p className="text-gray-400 text-sm">
                      Monday - Sunday: 10:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black-800 p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
              <h4 className="text-2xl font-serif font-bold text-white mb-4">Need Help?</h4>
              <p className="text-gray-400 text-sm mb-6">
                Have questions about our fragrances or need recommendations? We're here to help you find your perfect scent.
              </p>
              <a
                href="https://wa.me/919234576090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-gold-400 rounded-lg hover:bg-gold-300 transition-colors w-full sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] lg:h-auto rounded-2xl overflow-hidden border border-white/5 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.118835824907!2d85.0768297!3d25.5676901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57b6f3b0f1a3%3A0x1b1b1b1b1b1b1b1b!2sKhagaul%20Rd%2C%20Fiya%20Colony%2C%20Maulana%20Azad%20Nagar%2C%20Phulwari%20Sharif%2C%20Patna%2C%20Bihar%20801505!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rahmani Perfumery Location"
              className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
