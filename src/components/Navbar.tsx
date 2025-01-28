import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Heart className="h-8 w-8 text-rose-500 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-rose-500/20 blur-lg rounded-full"></div>
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
              Brighten's Foundation
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    isActive 
                      ? 'text-rose-400 border-rose-500/50 bg-rose-500/10' 
                      : 'text-gray-300 border-transparent hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-gray-700 text-gray-300 hover:text-rose-400 hover:border-rose-500/30 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2 bg-gray-800 border-t border-gray-700">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                      isActive
                        ? 'text-rose-400 border-rose-500/50 bg-rose-500/10'
                        : 'text-gray-300 border-transparent hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;