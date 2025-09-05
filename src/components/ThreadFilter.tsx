import { useState } from 'react';
import { X } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface ThreadFilterProps {
  categories: FilterOption[];
  colors: string[];
  onFilter: (filters: any) => void;
}

const ThreadFilter: React.FC<ThreadFilterProps> = ({ categories, colors, onFilter }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    color: 'all',
    inStock: false,
    priceRange: [0, 10000] as [number, number],
    sortBy: 'name' as 'name' | 'price' | 'rating' | 'newest',
    sortOrder: 'asc' as 'asc' | 'desc',
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      category: 'all',
      color: 'all',
      inStock: false,
      priceRange: [0, 10000] as [number, number],
      sortBy: 'name' as 'name' | 'price' | 'rating' | 'newest',
      sortOrder: 'asc' as 'asc' | 'desc',
    };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Filter Threads</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-silk-600 dark:text-silk-400 hover:text-silk-700 dark:hover:text-silk-300 flex items-center space-x-1 transition-colors duration-200"
        >
          <X className="h-4 w-4" />
          <span>Clear All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent transition-colors duration-200"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Color Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Color
          </label>
          <select
            value={filters.color}
            onChange={(e) => handleFilterChange('color', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="all">All Colors</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Sort Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Order
          </label>
          <select
            value={filters.sortOrder}
            onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Price Range: ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={filters.priceRange[0]}
            onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
            className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={filters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Stock Filter */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="inStock"
          checked={filters.inStock}
          onChange={(e) => handleFilterChange('inStock', e.target.checked)}
          className="h-4 w-4 text-silk-600 focus:ring-silk-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
        />
        <label htmlFor="inStock" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
          Show only in-stock threads
        </label>
      </div>
    </div>
  );
};

export default ThreadFilter;
