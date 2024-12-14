// src/components/Menu.tsx

import { Cookie, Coffee, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

// Define the shape of a menu item
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  badges?: string[];
}

// Define the props for MenuSection
interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  icon: React.ReactNode;
}

// MenuSection Component
const MenuSection: React.FC<MenuSectionProps> = ({ title, items, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
    <div className="flex items-center justify-center gap-3 mb-8">
      {icon}
      <h3 className="text-3xl font-bold text-yellow-400">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item: MenuItem, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="glass-card rounded-lg overflow-hidden">
            <div className="h-48 relative group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-semibold text-yellow-400">{item.name}</h4>
                <span className="text-yellow-400 font-bold">{item.price}</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <div className="flex gap-2">
                {item.badges?.map((badge: string, badgeIndex: number) => (
                  <span
                    key={badgeIndex}
                    className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Define the structure of menu items
interface MenuItems {
  cookies: MenuItem[];
  breads: MenuItem[];
  drinks: MenuItem[];
}

// Menu Component
export const Menu: React.FC = () => {
  const menuItems: MenuItems = {
    cookies: [
      {
        name: "Lavender Dream Cookies",
        description: "Organic lavender-infused shortbread with honey glaze",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80",
        badges: ["Organic", "Signature"]
      },
      {
        name: "Chamomile Comfort",
        description: "Soft cookies with chamomile and vanilla",
        price: "$4.49",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
        badges: ["Organic", "Calming"]
      },
      {
        name: "Forest Berry Delight",
        description: "Mixed berry cookies with healing herbs",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&q=80",
        badges: ["Organic", "Seasonal"]
      }
    ],
    breads: [
      {
        name: "Ancient Grain Sourdough",
        description: "24-hour fermented with sacred herbs",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
        badges: ["Organic", "Artisanal"]
      },
      {
        name: "Rosemary Focus",
        description: "Enhanced with brain-boosting herbs",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80",
        badges: ["Organic", "Functional"]
      },
      {
        name: "Golden Turmeric Loaf",
        description: "Anti-inflammatory bread with seeds",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
        badges: ["Organic", "Healing"]
      }
    ],
    drinks: [
      {
        name: "Clarity Elixir",
        description: "Brain-boosting herbs with green tea",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80",
        badges: ["Organic", "Energy"]
      },
      {
        name: "Peace Potion",
        description: "Calming blend of lavender and chamomile",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80",
        badges: ["Organic", "Calming"]
      },
      {
        name: "Vitality Brew",
        description: "Adaptogenic herbs with fresh mint",
        price: "$7.49",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80",
        badges: ["Organic", "Energizing"]
      }
    ]
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuSection
          title="Magical Cookies"
          items={menuItems.cookies}
          icon={<Cookie className="w-8 h-8 text-yellow-400" />}
        />
        <MenuSection
          title="Sacred Breads"
          items={menuItems.breads}
          icon={<Coffee className="w-8 h-8 text-yellow-400" />}
        />
        <MenuSection
          title="Healing Elixirs"
          items={menuItems.drinks}
          icon={<Leaf className="w-8 h-8 text-yellow-400" />}
        />
      </div>
    </section>
  );
};
