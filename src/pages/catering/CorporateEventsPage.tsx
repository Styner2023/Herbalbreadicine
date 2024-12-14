import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Users, Clock, Leaf, Star } from 'lucide-react';

export const CorporateEventsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
            alt="Corporate catering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-6">
              Corporate Events
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Elevate your corporate gatherings with our premium organic catering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?auto=format&fit=crop&q=80"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt="Corporate catering"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat className="w-12 h-12 text-yellow-400" />,
                title: "Professional Service",
                description: "Experienced staff dedicated to impeccable service"
              },
              {
                icon: <Star className="w-12 h-12 text-yellow-400" />,
                title: "Custom Menus",
                description: "Tailored menus to match your event's theme"
              },
              {
                icon: <Users className="w-12 h-12 text-yellow-400" />,
                title: "Any Size Group",
                description: "From small meetings to large conferences"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Sample Menu Items</h2>
            <p className="text-gray-300 text-lg">A taste of what we can offer for your corporate event</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Breakfast Package",
                items: ["Organic pastries", "Fresh fruit platters", "Artisan coffee"],
                image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80"
              },
              {
                name: "Lunch Package",
                items: ["Gourmet sandwiches", "Organic salads", "Fresh-baked cookies"],
                image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80"
              },
              {
                name: "Reception Package",
                items: ["Canapés", "Cheese boards", "Premium beverages"],
                image: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&q=80"
              }
            ].map((package_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card rounded-lg overflow-hidden"
              >
                <div className="h-48 relative">
                  <img
                    src={package_.image}
                    alt={package_.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">{package_.name}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {package_.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
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
              Ready to Plan Your Corporate Event?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let us help you create an unforgettable experience for your team or clients.
              Contact us today to start planning your perfect corporate catering package.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              Request Corporate Package
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};