import { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Star,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import PreorderModal from './PreorderModal';
import type { SilkThread } from '../types';

interface ThreadCardProps {
  thread: SilkThread;
  onAddPreorder: (preorderData: any) => void;
  viewMode: 'grid' | 'list';
}

const ThreadCard: React.FC<ThreadCardProps> = ({
  thread,
  onAddPreorder,
  viewMode
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPreorderModal, setShowPreorderModal] = useState(false);
  const [zoomed, setZoomed] = useState(false); // For image zoom modal

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

  // Open zoom modal
  const openZoom = (index: number) => {
    setCurrentImageIndex(index);
    setZoomed(true);
  };

  // ---------------- LIST VIEW ----------------
  if (viewMode === 'list') {
    return (
      <div
        className={`thread-card ${
          !thread.inStock ? 'opacity-60' : ''
        } ${
          !thread.isActive
            ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900'
            : ''
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          {/* Image */}
          <div
            className="relative w-full sm:w-52 h-40 sm:h-48 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openZoom(currentImageIndex)}
          >
            <img
              src={thread.images[currentImageIndex]}
              alt={thread.name}
              className="w-full h-full object-cover"
            />
            {!thread.inStock && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold text-sm sm:text-lg">
                  Out of Stock
                </span>
              </div>
            )}
            {!thread.isActive && (
              <div className="absolute inset-0 bg-red-900 bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold text-sm sm:text-lg">
                  Hidden
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
                {thread.name}
              </h3>
              <div className="flex items-center space-x-1 text-xs sm:text-sm">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500 fill-current" />
                <span className="text-gray-600 dark:text-gray-300">{thread.rating}</span>
                <span className="text-gray-400 dark:text-gray-500">
                  ({thread.reviews})
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 line-clamp-2">
              {thread.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs sm:text-sm">
                {thread.inStock ? (
                  <>
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                    <span className="text-green-600 dark:text-green-400">
                      In Stock
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                    <span className="text-red-600 dark:text-red-400">
                      Out of Stock
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={handlePreorder}
                className="btn-primary text-xs sm:text-sm px-3 py-1.5 flex items-center space-x-1"
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Preorder</span>
              </button>
            </div>
          </div>
        </div>

        {/* Preorder Modal */}
        {showPreorderModal && (
          <PreorderModal
            thread={thread}
            onClose={() => setShowPreorderModal(false)}
          />
        )}

        {/* Zoom Modal */}
        {zoomed && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={thread.images[currentImageIndex]}
              alt="zoomed"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // ---------------- GRID VIEW ----------------
  return (
    <div
      className={`thread-card ${
        !thread.inStock ? 'opacity-60' : ''
      } ${
        !thread.isActive
          ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900'
          : ''
      }`}
    >
      {/* Image */}
      <div
        className="relative h-40 sm:h-48 lg:h-56 overflow-hidden rounded-t-xl cursor-pointer"
        onClick={() => openZoom(currentImageIndex)}
      >
        <img
          src={thread.images[currentImageIndex]}
          alt={thread.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-1 mb-1">
          {thread.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
          {thread.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs">
            {thread.inStock ? (
              <>
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span className="text-green-600 dark:text-green-400">In Stock</span>
              </>
            ) : (
              <>
                <XCircle className="h-3 w-3 text-red-500" />
                <span className="text-red-600 dark:text-red-400">Out of Stock</span>
              </>
            )}
          </div>
          <button
            onClick={handlePreorder}
            className="btn-primary text-xs px-3 py-1 flex items-center space-x-1"
          >
            <MessageCircle className="h-3 w-3" />
            <span>Preorder</span>
          </button>
        </div>
      </div>

       {/* Preorder Modal */}
      {showPreorderModal && (
        <PreorderModal
          thread={thread}
          onClose={() => setShowPreorderModal(false)}
        />
      )}

      {/* Zoom Modal */}
      {zoomed && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={thread.images[currentImageIndex]}
            alt="zoomed"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreadCard;
