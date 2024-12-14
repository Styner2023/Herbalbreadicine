import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
}

export const RotatingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: BannerSlide[] = [
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      title: "Corporate Events",
      subtitle: "Elevate your business gatherings"
    },
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80",
      title: "Private Parties",
      subtitle: "Create unforgettable celebrations"
    },
    {
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      title: "Wedding Catering",
      subtitle: "Making your special day magical"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center px-4"
              >
                <h2 className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-6">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                  {slides[currentIndex].subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};