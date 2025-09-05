import { useState } from 'react';
import { Heart, MessageCircle, Star, CheckCircle, XCircle, Edit, Trash2, EyeOff, Eye as EyeIcon } from 'lucide-react';
import PreorderModal from './PreorderModal';
import type { SilkThread } from '../types';

interface ThreadCardProps {
  thread: SilkThread;
  isOwner: boolean;
  onUpdateThread: (id: string, updates: Partial<SilkThread>) => void;
  onDeleteThread: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onAddPreorder: (preorderData: any) => void;
  viewMode: 'grid' | 'list';
}

const ThreadCard: React.FC<ThreadCardProps> = ({ 
  thread, 
  isOwner, 
  onUpdateThread, 
  onDeleteThread, 
  onToggleStatus, 
  onAddPreorder, 
  viewMode 
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPreorderModal, setShowPreorderModal] = useState(false);

  const handlePreorder = () => {
    setShowPreorderModal(true);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % thread.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + thread.images.length) % thread.images.length);
  };

  if (viewMode === 'list') {
    return (
      <div className={`thread-card ${!thread.inStock ? 'opacity-60' : ''} ${!thread.isActive ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900' : ''}`}>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Image */}
          <div className="relative w-full sm:w-64 h-64 sm:h-48 flex-shrink-0">
            <img
              src={thread.images[currentImageIndex]}
              alt={thread.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {!thread.inStock && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-lg">
                <span className="text-white font-semibold text-lg">Out of Stock</span>
              </div>
            )}
            {!thread.isActive && (
              <div className="absolute inset-0 bg-red-900 bg-opacity-50 flex items-center justify-center rounded-lg">
                <span className="text-white font-semibold text-lg">Hidden</span>
              </div>
            )}
            {thread.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 transition-all duration-200"
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 transition-all duration-200"
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
              </>
            )}
            <button
              onClick={toggleWishlist}
              className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 ${
                isWishlisted ? 'text-red-500 bg-white' : 'text-gray-600 bg-white bg-opacity-80 hover:bg-opacity-100'
              }`}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{thread.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-gold-500 fill-current" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{thread.rating}</span>
                <span className="text-sm text-gray-400 dark:text-gray-500">({thread.reviews})</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{thread.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {thread.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-silk-100 dark:bg-silk-900 text-silk-700 dark:text-silk-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-silk-600 dark:text-silk-400">₹{thread.price.toLocaleString()}</span>
                {thread.originalPrice && (
                  <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                    ₹{thread.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <span>Weight: {thread.weight}</span>
                <span>• Origin: {thread.origin}</span>
                <span>• Quality: {thread.quality}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {thread.inStock ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium">In Stock ({thread.stockQuantity})</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                {isOwner ? (
                  <>
                    <button
                      onClick={() => onToggleStatus(thread.id)}
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        thread.isActive 
                          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                          : 'bg-red-100 text-red-700 hover:bg-red-200'
                      }`}
                    >
                      {thread.isActive ? <EyeIcon className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => onUpdateThread(thread.id, {})}
                      className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDeleteThread(thread.id)}
                      className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handlePreorder}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Preorder</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`thread-card ${!thread.inStock ? 'opacity-60' : ''} ${!thread.isActive ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900' : ''}`}>
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <img
          src={thread.images[currentImageIndex]}
          alt={thread.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {!thread.inStock && (
          <div className="absolute inset-0 bg-gray-900 dark:bg-gray-950 bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
        {!thread.isActive && (
          <div className="absolute inset-0 bg-red-900 dark:bg-red-950 bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Hidden</span>
          </div>
        )}
        {thread.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 transition-all duration-200"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 transition-all duration-200"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
          </>
        )}
        <button
          onClick={toggleWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 ${
            isWishlisted ? 'text-red-500 bg-white dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 bg-opacity-80 hover:bg-opacity-100'
          }`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
        {thread.featured && (
          <div className="absolute top-2 left-2 bg-gold-500 dark:bg-gold-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">{thread.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-gold-500 fill-current" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{thread.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{thread.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {thread.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-silk-100 dark:bg-silk-900 text-silk-700 dark:text-silk-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-silk-600 dark:text-silk-400">₹{thread.price.toLocaleString()}</span>
            {thread.originalPrice && (
              <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                ₹{thread.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <span>{thread.weight}</span>
            <span>• {thread.origin}</span>
            <span>• {thread.quality}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {thread.inStock ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-xs text-green-600 dark:text-green-400">In Stock</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="text-xs text-red-600 dark:text-red-400">Out of Stock</span>
              </>
            )}
          </div>
          
          {isOwner ? (
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onToggleStatus(thread.id)}
                className={`p-1 rounded transition-colors duration-200 ${
                  thread.isActive 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800' 
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800'
                }`}
              >
                {thread.isActive ? <EyeIcon className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              </button>
              <button
                onClick={() => onUpdateThread(thread.id, {})}
                className="p-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                <Edit className="h-3 w-3" />
              </button>
              <button
                onClick={() => onDeleteThread(thread.id)}
                className="p-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={handlePreorder}
              className="btn-primary text-sm px-4 py-2 flex items-center space-x-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Preorder</span>
            </button>
          )}
        </div>
      </div>
      
      {/* Preorder Modal */}
      {showPreorderModal && (
        <PreorderModal
          thread={thread}
          onClose={() => setShowPreorderModal(false)}
          onAddPreorder={onAddPreorder}
        />
      )}
    </div>
  );
};

export default ThreadCard;
