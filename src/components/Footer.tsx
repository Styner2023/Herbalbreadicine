import { FacebookIcon, InstagramIcon, TwitterIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-gray-900">Herbalbreadicine</span>
            </div>
            <p className="text-sm text-gray-500">
              Crafting magical organic treats with love and ancient wisdom since kindergarten.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About', path: '/about' },
                { name: 'Catering', path: '/catering' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-yellow-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday: 8am - 9pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Herbalbreadicine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};