// React import removed as it's not used in this file
import { Cookie, Coffee, Cake, Leaf } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

export const Products = () => {
  const products = [
    {
      name: "Healing Herb Cookies",
      description: "Infused with calming chamomile and lavender",
      price: "$4.99",
      icon: <Cookie className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
      badges: ["Organic", "Vegan"]
    },
    {
      name: "Vitality Bread",
      description: "Ancient grains with rosemary and thyme",
      price: "$6.99",
      icon: <Coffee className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
      badges: ["Organic", "Gluten-Free"]
    },
    {
      name: "Golden Bliss Cake",
      description: "With turmeric and orange blossom",
      price: "$5.99",
      icon: <Cake className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&q=80",
      badges: ["Organic"]
    },
    {
      name: "Herbal Elixir",
      description: "Fresh mint and lemon balm blend",
      price: "$4.99",
      icon: <Leaf className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80",
      badges: ["Organic", "Fresh"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Magical Creations</h2>
          <p className="text-gray-300 text-lg">Discover our enchanted selection of organic treats</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass-card rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <div className="text-yellow-400 transform transition-transform duration-300 group-hover:scale-125">
                      {product.icon}
                    </div>
                  </motion.div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    {product.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-bold">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors duration-300"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};