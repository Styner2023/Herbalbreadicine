import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-full"
        >
          {/* Lighter Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

          {/* Video Element */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/videos/homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
          alt="Organic bread"
          className="absolute w-32 h-32 object-cover rounded-full left-[15%] top-[20%] animate-float"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80"
          alt="Fresh pastries"
          className="absolute w-40 h-40 object-cover rounded-full right-[20%] top-[30%] animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80"
          alt="Herbal drinks"
          className="absolute w-36 h-36 object-cover rounded-full left-[25%] bottom-[25%] animate-float"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="w-16 h-16 text-yellow-400 animate-bounce" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl sm:text-7xl font-bold text-white mb-8"
        >
          Welcome to{' '}
          <span className="text-yellow-400 animate-pulse">Herbalbreadicine</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Where ancient herbal wisdom meets magical baking artistry
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              Explore Our Menu
            </motion.button>
          </Link>
          <Link to="/catering">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-lg hover:bg-yellow-400/10 transition-all duration-300"
            >
              Book Catering
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
};