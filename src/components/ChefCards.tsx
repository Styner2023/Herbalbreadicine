// src/components/ChefCards.tsx

import { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface Chef {
  firstName: string;
  lastName: string;
  specialty: string;
  image: string;
}

export const ChefCards = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const chefs: Chef[] = [
    {
      firstName: "Jacob",
      lastName: "Sandoval",
      specialty: "Contemporary Asian Fusion",
      image: "/images/2.jacob.png" // Replace with the actual path to your image
    },
    {
      firstName: "Christophal",
      lastName: "Henrickzi",
      specialty: "Contemporary & Delicious Organic Fusion",
      image: "/images/christophal.png" // Replace with the actual path to your image
    },
    {
      firstName: "Daisey",
      lastName: "Cole",
      specialty: "Contemporary Asian Fusion",
      image: "/images/chefs.png" // Replace with the actual path to your image
    },
    {
      firstName: "Demophine",
      lastName: "Lee",
      specialty: "Contemporary Asian Fusion",
      image: "/images/2.chefs.png" // Replace with the actual path to your image
    }
  ];

  return (
    <section className="py-12 sm:py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/11.counter.png" // Replace with the actual path to your image
          alt="Kitchen background"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0 mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-yellow-400 max-w-3xl text-center sm:text-left">
            Meet Our Talented Chefs
            <br />
            Crafting Culinary Masterpieces.
          </h2>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
            SEE ALL CHEFS
          </button>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-[1400px]">
            <div className="flex justify-center space-x-8">
              {chefs.map((chef, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative transition-all duration-500 ease-in-out ${activeIndex === index ? 'lg:w-96' : 'lg:w-72'
                      } w-full`}
                  >
                    {/* Base Card Content */}
                    <div className="w-full h-80 bg-black/80 border border-yellow-400/30 p-6 flex flex-col backdrop-blur-md">
                      <div className="mb-6">
                        <h3 className="text-3xl font-serif text-yellow-400">{chef.firstName}</h3>
                        <h3 className="text-3xl font-serif text-yellow-400">{chef.lastName}</h3>
                      </div>
                      <div className="space-y-3 mb-auto">
                        <p className="text-gray-400 text-lg">Specialities in -</p>
                        <p className="text-gray-300 text-lg">{chef.specialty}</p>
                      </div>
                      <div className="flex gap-4">
                        {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                          <div
                            key={social}
                            className="w-10 h-10 rounded-full border border-yellow-400/30 flex items-center justify-center hover:border-yellow-400 transition-colors duration-300"
                          >
                            {social === 'Facebook' && <Facebook className="w-5 h-5 text-yellow-400" />}
                            {social === 'Instagram' && <Instagram className="w-5 h-5 text-yellow-400" />}
                            {social === 'Twitter' && <Twitter className="w-5 h-5 text-yellow-400" />}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expanding Image Section */}
                    <div
                      className={`absolute top-0 left-full ml-4 w-72 h-80 transition-opacity duration-500 ease-in-out overflow-hidden z-10
                        ${activeIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                      <img
                        src={chef.image}
                        alt={`${chef.firstName} ${chef.lastName}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/80 border border-yellow-400/30 rounded-lg overflow-hidden backdrop-blur-md"
            >
              <div className="relative h-48">
                <img
                  src={chef.image}
                  alt={`${chef.firstName} ${chef.lastName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif text-yellow-400">{chef.firstName}</h3>
                  <h3 className="text-2xl font-serif text-yellow-400">{chef.lastName}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400">Specialities in -</p>
                  <p className="text-gray-300">{chef.specialty}</p>
                </div>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                    <div
                      key={social}
                      className="w-8 h-8 rounded-full border border-yellow-400/30 flex items-center justify-center hover:border-yellow-400 transition-colors duration-300"
                    >
                      {social === 'Facebook' && <Facebook className="w-4 h-4 text-yellow-400" />}
                      {social === 'Instagram' && <Instagram className="w-4 h-4 text-yellow-400" />}
                      {social === 'Twitter' && <Twitter className="w-4 h-4 text-yellow-400" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
