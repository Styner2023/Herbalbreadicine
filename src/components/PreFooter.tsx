import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PreFooter = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
          alt="Organic bakery background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="w-12 h-12 text-yellow-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Ready to Experience Our <span className="text-yellow-400">Magic</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Let us bring our organic delights to your next celebration
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/menu">
            <button className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
              View Our Menu
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-lg hover:bg-yellow-400/10 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};