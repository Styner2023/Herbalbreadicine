// React import removed as it's not used in this file
import { motion } from 'framer-motion';
import { Heart, Leaf, Star, Cake } from 'lucide-react';export const WeddingsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/images/3.mrg.png" // Replace with the path to your image.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
            alt="Wedding catering"
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
              Wedding Catering
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Creating magical moments with organic elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/images/4.mrg.png", // Replace with the path to your.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
              "/images/5.mrg.png", // Replace with the path to your.unsplash.com/photo-1470162656305-6f429ba817bf?auto=format&fit=crop&q=80"
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
                  alt="Wedding catering"
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
                icon: <Heart className="w-12 h-12 text-yellow-400" />,
                title: "Bespoke Service",
                description: "Customized menus that tell your love story"
              },
              {
                icon: <Cake className="w-12 h-12 text-yellow-400" />,
                title: "Artisanal Desserts",
                description: "Stunning organic wedding cakes and treats"
              },
              {
                icon: <Star className="w-12 h-12 text-yellow-400" />,
                title: "Full Planning",
                description: "Comprehensive wedding catering coordination"
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
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Wedding Packages</h2>
            <p className="text-gray-300 text-lg">Crafted with love for your special day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Enchanted Garden",
                items: ["Organic appetizers", "Farm-to-table dinner", "Signature cocktails"],
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
              },
              {
                name: "Rustic Romance",
                items: ["Grazing tables", "Family-style feast", "Artisanal desserts"],
                image: "/images/3.mrg.png" // "https://png.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80"
              },
              {
                name: "Elegant Affair",
                items: ["Premium canapés", "Plated service", "Wedding cake"],
                image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80"
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
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
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
              Begin Your Wedding Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let us help create the wedding of your dreams with our organic catering services.
              Schedule a tasting consultation today.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};