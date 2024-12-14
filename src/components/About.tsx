import React from 'react';
import { Leaf, Heart, Star } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
          alt="Organic ingredients"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Story & Vision</h2>
          <p className="text-gray-300 text-lg">Meet Jacob Sandoval, the visionary behind Herbalbreadicine</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/1.kitchen.png" // Replace with the actual path to your image.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
              alt="Organic bakery"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-400">A Journey of Natural Healing</h3>
            <p className="text-gray-300">
              Jacob's passion for combining traditional herbal wisdom with artisanal baking began with a simple dream: 
              to create delicious, healing foods that nourish both body and soul. With years of experience in organic 
              farming and herbalism, he founded Herbalbreadicine to share nature's gifts through every carefully crafted recipe.
            </p>
            <p className="text-gray-300">
              Today, we continue to honor that vision by sourcing only the finest organic ingredients and incorporating 
              healing herbs into our unique creations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Leaf className="w-12 h-12 text-yellow-400" />,
              title: "100% Organic",
              description: "Every ingredient is carefully selected from trusted organic farms"
            },
            {
              icon: <Heart className="w-12 h-12 text-yellow-400" />,
              title: "Crafted with Love",
              description: "Each recipe is perfected through years of dedication and care"
            },
            {
              icon: <Star className="w-12 h-12 text-yellow-400" />,
              title: "Nature's Magic",
              description: "Harnessing the power of healing herbs in every bite"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};