import React from 'react';
import { Menu } from '../components/Menu';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Star } from 'lucide-react';

export const MenuPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
            <img
              src="/images/3.counter.png" // Replace with the actual path to your image.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80"
              alt="Artisanal bakery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Images */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
            alt="Fresh bread"
            className="absolute w-40 h-40 object-cover rounded-full left-[15%] top-[20%] animate-float"
          />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80"
            alt="Organic pastries"
            className="absolute w-48 h-48 object-cover rounded-full right-[20%] top-[30%] animate-float"
            style={{ animationDelay: '-2s' }}
          />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80"
            alt="Herbal drinks"
            className="absolute w-44 h-44 object-cover rounded-full left-[25%] bottom-[25%] animate-float"
            style={{ animationDelay: '-4s' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <Sparkles className="w-16 h-16 text-yellow-400 animate-bounce" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold text-white mb-8"
          >
            Our Magical <span className="text-yellow-400">Menu</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12"
          >
            Discover our enchanted selection of organic treats, crafted with love and natural ingredients
          </motion.p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-yellow-400" />,
                title: "100% Organic",
                description: "Only the finest natural ingredients"
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-400" />,
                title: "Artisanal Quality",
                description: "Handcrafted with expertise"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
                title: "Magical Touch",
                description: "Infused with healing herbs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
                className="glass-card p-6 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <Menu />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
};