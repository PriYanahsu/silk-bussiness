import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - Mobile Optimized */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-silk-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">SG</span>
              </div>
              <span className="text-sm sm:text-lg lg:text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
                <span className="hidden sm:inline">Shri Ganpati Silk Industries</span>
                <span className="sm:hidden">SG Silk</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 transition-colors duration-200"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions - Touch Optimized */}
          <div className="md:hidden flex items-center space-x-1">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 active:bg-gray-100 dark:active:bg-gray-700 rounded-lg transition-colors duration-200"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <div className="px-1">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 active:bg-gray-100 dark:active:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile Optimized */}
        {isSearchOpen && (
          <div className="py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search yarn products..."
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-base"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        )}

        {/* Mobile Navigation - Touch Friendly */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-xl mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 active:bg-gray-200 dark:active:bg-gray-600 block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;