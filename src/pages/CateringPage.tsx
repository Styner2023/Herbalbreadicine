import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Users, Clock, Leaf, ChefHat, Star, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RotatingBanner } from '../components/RotatingBanner';

export const CateringPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section with Rotating Banner */}
      <RotatingBanner />

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Catering Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring our organic magic to every event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat className="w-12 h-12" />,
                title: "Corporate Events",
                description: "Impress your clients and team with our premium organic catering",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
                link: "/catering/corporate"
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Private Parties",
                description: "Make your celebration unforgettable with our custom menus",
                image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80",
                link: "/catering/private"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Weddings",
                description: "Create magical moments with our exquisite wedding catering",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
                link: "/catering/weddings"
              }
            ].map((service, index) => (
              <Link to={service.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-card rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-64 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-yellow-400 transform transition-transform duration-300 group-hover:scale-125">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <UtensilsCrossed className="w-8 h-8 text-yellow-400" />,
                title: "Custom Menus",
                description: "Personalized organic menus tailored to your event"
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-400" />,
                title: "Any Size Event",
                description: "From intimate gatherings to large celebrations"
              },
              {
                icon: <Clock className="w-8 h-8 text-yellow-400" />,
                title: "Flexible Scheduling",
                description: "Available for breakfast, lunch, or dinner events"
              },
              {
                icon: <Leaf className="w-8 h-8 text-yellow-400" />,
                title: "100% Organic",
                description: "Only the freshest organic ingredients used"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-lg p-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-yellow-400 mb-6"
            >
              Ready to Create Something Special?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let us bring our organic magic to your next event. From intimate gatherings to grand celebrations,
              we'll create a memorable culinary experience tailored just for you.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              Request Catering Quote
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};