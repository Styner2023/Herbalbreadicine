// src/pages/AboutPage.tsx

import { motion } from 'framer-motion';
import { Leaf, Heart, Star, Award, Sparkles } from 'lucide-react';
import { ChefCards } from '../components/ChefCards';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="/images/11.counter.png" // Replace with the actual path to your image
            alt="Organic bakery"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-yellow-400 mb-6">Our Story</h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              A journey of healing through organic baking and ancient wisdom
            </p>
          </motion.div>
        </div>

        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
            alt="Organic ingredients"
            className="absolute w-32 h-32 object-cover rounded-full left-[15%] top-[20%] animate-float"
          />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80"
            alt="Fresh bread"
            className="absolute w-40 h-40 object-cover rounded-full right-[20%] top-[30%] animate-float"
            style={{ animationDelay: '-2s' }}
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&q=80"
              alt="Bakery process"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To create wholesome, healing foods that nourish both body and soul, while honoring
              ancient wisdom and supporting sustainable organic farming practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-yellow-400" />,
                title: "Organic Ingredients",
                description: "Sourcing only the finest organic ingredients from local farmers"
              },
              {
                icon: <Heart className="w-8 h-8 text-yellow-400" />,
                title: "Healing Recipes",
                description: "Blending traditional herbal wisdom with modern baking"
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-400" />,
                title: "Sustainable Practices",
                description: "Committed to environmental stewardship in everything we do"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-6 rounded-lg text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Founder Story */}
      <section className="py-24 bg-black relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
              alt="Bakery background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/2.jacob.png" // Replace with the actual path to your image
                alt="Jacob work at work"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-yellow-400">Meet Jacob</h2>
              <p className="text-gray-300">
                Jacob's journey began with a simple belief: that food should be both healing and delicious.
                Drawing from ancient wisdom and modern organic farming practices, he founded Herbalbreadicine
                to create a unique fusion of traditional baking and herbal medicine.
              </p>
              <p className="text-gray-300">
                With over two decades of experience in organic farming and herbalism, Jacobs has developed
                signature recipes that not only tantalize the taste buds but also nourish the body and soul.
              </p>
              <div className="flex gap-4">
                <Award className="w-12 h-12 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">Master Herbalist</h3>
                  <p className="text-gray-300">Certified in Traditional Herbal Medicine</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Cards Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80"
            alt="Herbal ingredients"
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>
        <div className="relative">
          <ChefCards />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
            alt="Organic ingredients"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every creation at Herbalbreadicine is guided by our commitment to health,
              sustainability, and the ancient wisdom of herbal healing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12 text-yellow-400" />,
                title: "100% Organic",
                description: "We source only the finest organic ingredients, supporting local farmers and sustainable practices."
              },
              {
                icon: <Heart className="w-12 h-12 text-yellow-400" />,
                title: "Made with Love",
                description: "Every recipe is crafted with intention, care, and positive energy."
              },
              {
                icon: <Star className="w-12 h-12 text-yellow-400" />,
                title: "Ancient Wisdom",
                description: "We blend traditional herbal knowledge with modern baking techniques."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
