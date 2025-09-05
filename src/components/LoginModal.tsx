import { useState } from 'react';
import { X, User, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (user: { username: string; role: 'user' | 'owner'; email?: string; phone?: string }) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Owner credentials (in real app, this would be in a secure backend)
  const OWNER_CREDENTIALS = {
    username: 'silkowner',
    password: 'silk123456',
    role: 'owner' as const
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check if it's owner login
    if (formData.username === OWNER_CREDENTIALS.username && formData.password === OWNER_CREDENTIALS.password) {
      onLogin({ username: formData.username, role: 'owner' });
      onClose();
      return;
    }

    // Check if it's a regular user (simple check for demo)
    const existingUsers = JSON.parse(localStorage.getItem('silkUsers') || '[]');
    const user = existingUsers.find((u: any) => u.username === formData.username && u.password === formData.password);
    
    if (user) {
      onLogin({ 
        username: formData.username, 
        role: 'user',
        email: user.email,
        phone: user.phone
      });
      onClose();
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('silkUsers') || '[]');
    
    if (existingUsers.find((u: any) => u.username === formData.username)) {
      setError('Username already exists');
      return;
    }

    const newUser = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: 'user' as const
    };

    existingUsers.push(newUser);
    localStorage.setItem('silkUsers', JSON.stringify(existingUsers));
    
    onLogin({ 
      username: formData.username, 
      role: 'user',
      email: formData.email,
      phone: formData.phone
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {isLogin ? 'Login' : 'Register'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Toggle */}
          <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                isLogin ? 'bg-white dark:bg-gray-600 text-silk-600 dark:text-silk-400 shadow-sm' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                !isLogin ? 'bg-white dark:bg-gray-600 text-silk-600 dark:text-silk-400 shadow-sm' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Register
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                  placeholder="Enter username"
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          {/* Owner Credentials Info */}
          {isLogin && (
            <div className="mt-6 p-4 bg-silk-50 rounded-lg">
              <h4 className="text-sm font-semibold text-silk-800 mb-2">Owner Login:</h4>
              <p className="text-xs text-silk-700">Username: <code className="bg-silk-200 px-1 rounded">silkowner</code></p>
              <p className="text-xs text-silk-700">Password: <code className="bg-silk-200 px-1 rounded">silk123456</code></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
