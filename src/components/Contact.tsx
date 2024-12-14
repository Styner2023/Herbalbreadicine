import React from 'react';
import { Send, Phone, MapPin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            Contact Our Magical Kitchen
          </h2>
          <p className="text-gray-300 text-lg">
            Let's create something magical together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/contactpage.png" // Replace with the actual path to your image.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
                alt="Our Chef"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/10 p-3 rounded-full backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-gray-100">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/10 p-3 rounded-full backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-gray-100">magic@herbalbreadicine.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/10 p-3 rounded-full backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-gray-100">42 Mystic Lane, Enchanted Valley</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-lg space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-yellow-400 mb-2">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/5 text-gray-100 rounded-lg border border-yellow-400/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-yellow-400 mb-2">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/5 text-gray-100 rounded-lg border border-yellow-400/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-yellow-400 mb-2">Your Message</label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 text-gray-100 rounded-lg border border-yellow-400/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-yellow-400/50"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};