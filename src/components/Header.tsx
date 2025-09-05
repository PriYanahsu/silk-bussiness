import { useState } from 'react';
import { ShoppingCart, Menu, X, Search, Settings, LogIn, LogOut } from 'lucide-react';
import AdminPanel from './AdminPanel';
import LoginModal from './LoginModal';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isOwner: boolean;
  isUser: boolean;
  currentUser: string | null;
  onLogin: (user: { username: string; role: 'user' | 'owner' }) => void;
  onLogout: () => void;
  preorderCount: number;
  threads?: any[];
  preorders?: any[];
  onUpdateThread?: (id: string, updates: any) => void;
  onDeleteThread?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  onUpdatePreorderStatus?: (id: string, status: 'pending' | 'confirmed' | 'cancelled') => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isOwner, 
  isUser,
  currentUser,
  onLogin,
  onLogout,
  preorderCount, 
  threads = [], 
  preorders = [], 
  onUpdateThread, 
  onDeleteThread, 
  onToggleStatus,
  onUpdatePreorderStatus
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Silk Threads', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-silk-600 dark:text-silk-400">
              Silk Thread Hub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
            >
              <Search className="h-5 w-5" />
            </button>
            {isOwner ? (
              <>
                <ThemeToggle />
                <button 
                  onClick={() => setShowAdminPanel(true)}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 transition-colors duration-200"
                >
                  <Settings className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setShowAdminPanel(true)}
                  className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 transition-colors duration-200"
                  title="View Preorders"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {preorderCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-silk-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {preorderCount}
                    </span>
                  )}
                </button>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-silk-600 dark:text-silk-400 font-medium">Owner: {currentUser}</span>
                  <button
                    onClick={onLogout}
                    className="flex items-center space-x-1 px-3 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </>
            ) : isUser ? (
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <span className="text-sm text-gray-600 dark:text-gray-300">Welcome, {currentUser}</span>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center space-x-1 px-3 py-2 bg-silk-100 dark:bg-silk-900 text-silk-700 dark:text-silk-300 rounded-lg hover:bg-silk-200 dark:hover:bg-silk-800 transition-colors duration-200"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="text-sm">Login</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-sm font-medium hidden sm:block">Menu</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for silk products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-700 rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
                {isOwner ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-silk-600 dark:text-silk-400 font-medium">
                      Owner: {currentUser}
                    </div>
                    <button
                      onClick={() => {
                        setShowAdminPanel(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    >
                      <span className="flex items-center space-x-2">
                        <Settings className="h-4 w-4" />
                        <span>Admin Panel</span>
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setShowAdminPanel(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    >
                      <span className="flex items-center space-x-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Preorders ({preorderCount})</span>
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        onLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors duration-200"
                    >
                      <span className="flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </span>
                    </button>
                  </div>
                ) : isUser ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">
                      Welcome, {currentUser}
                    </div>
                    <button
                      onClick={() => {
                        onLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    >
                      <span className="flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-silk-600 dark:hover:text-silk-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  >
                    <span className="flex items-center space-x-2">
                      <LogIn className="h-4 w-4" />
                      <span>Login / Register</span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Admin Panel Modal */}
      {showAdminPanel && isOwner && onUpdateThread && onDeleteThread && onToggleStatus && onUpdatePreorderStatus && (
        <AdminPanel
          threads={threads}
          preorders={preorders}
          onUpdateThread={onUpdateThread}
          onDeleteThread={onDeleteThread}
          onToggleStatus={onToggleStatus}
          onUpdatePreorderStatus={onUpdatePreorderStatus}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={onLogin}
        />
      )}
    </header>
  );
};

export default Header;
