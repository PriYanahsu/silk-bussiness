import { useState } from 'react';
import ThreadCard from './ThreadCard';
import ThreadFilter from './ThreadFilter';
import type { SilkThread } from '../types';
import { productCategories } from '../data/products';
import { Filter, Grid, List } from 'lucide-react';

interface ProductGalleryProps {
  threads: SilkThread[];
  onAddPreorder: (preorderData: any) => void;
  onFilter: (filters: any) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  threads, 
  onAddPreorder, 
  onFilter 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = productCategories;

  const colors = [
    'all', 'white', 'golden', 'cream', 'yellow', 'red', 'blue', 'green', 'black', 'brown'
  ];

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            Our Yarn Collection
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Discover our comprehensive collection of premium yarns including Raw Silk, 
            Ghicha Tusser, Polyester, Cotton, and Synthetic yarns in various colors and weights.
          </p>
        </div>

        {/* Controls - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-3 sm:space-y-0">
          {/* Filter Toggle - Touch Friendly */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 rounded-xl transition-colors duration-200"
            >
              <Filter className="h-5 w-5" />
              <span className="text-sm sm:text-base">Filters</span>
            </button>
          </div>

          {/* View Mode Toggle - Touch Optimized */}
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-colors duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-silk-600 text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-colors duration-200 ${
                viewMode === 'list' 
                  ? 'bg-silk-600 text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters - Mobile Optimized */}
        {showFilters && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <ThreadFilter
              categories={categories}
              colors={colors}
              onFilter={onFilter}
            />
          </div>
        )}

        {/* Threads Grid/List - Mobile First */}
        {threads.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
              : 'space-y-4 sm:space-y-6'
          }>
            {threads.map((thread) => (
              <ThreadCard
                key={thread.id}
                thread={thread}
                onAddPreorder={onAddPreorder}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">No threads found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your filters to see more threads.</p>
          </div>
        )}

        {/* Load More Button */}
        {threads.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              Load More Products
            </button>
          </div>
        )}
      </div>

    </section>
  );
};

export default ProductGallery;