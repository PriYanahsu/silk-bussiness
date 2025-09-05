import { useState } from 'react';
import ThreadCard from './ThreadCard';
import ThreadFilter from './ThreadFilter';
import AddThreadModal from './AddThreadModal';
import type { SilkThread } from '../types';
import { Filter, Grid, List, Plus } from 'lucide-react';

interface ProductGalleryProps {
  threads: SilkThread[];
  isOwner: boolean;
  onAddThread: (thread: Omit<SilkThread, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onUpdateThread: (id: string, updates: Partial<SilkThread>) => void;
  onDeleteThread: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onAddPreorder: (preorderData: any) => void;
  onFilter: (filters: any) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  threads, 
  isOwner, 
  onAddThread, 
  onUpdateThread, 
  onDeleteThread, 
  onToggleStatus, 
  onAddPreorder, 
  onFilter 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = [
    { value: 'all', label: 'All Threads' },
    { value: 'mulberry', label: 'Mulberry' },
    { value: 'tussar', label: 'Tussar' },
    { value: 'eri', label: 'Eri' },
    { value: 'muga', label: 'Muga' },
    { value: 'raw', label: 'Raw Silk' },
    { value: 'dyed', label: 'Dyed Silk' },
    { value: 'specialty', label: 'Specialty' },
  ];

  const colors = [
    'all', 'white', 'golden', 'cream', 'yellow', 'red', 'blue', 'green', 'black', 'brown'
  ];

  return (
    <section id="products" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Silk Thread Collection
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium silk threads, 
            each imported from their countries of origin for the highest quality.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          {/* Filter Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
            
            {isOwner && (
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-silk-600 text-white hover:bg-silk-700 rounded-lg transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>Add Thread</span>
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-silk-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'list' 
                  ? 'bg-silk-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <ThreadFilter
              categories={categories}
              colors={colors}
              onFilter={onFilter}
            />
          </div>
        )}

        {/* Threads Grid/List */}
        {threads.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
          }>
            {threads.map((thread) => (
              <ThreadCard
                key={thread.id}
                thread={thread}
                isOwner={isOwner}
                onUpdateThread={onUpdateThread}
                onDeleteThread={onDeleteThread}
                onToggleStatus={onToggleStatus}
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
        {threads.length > 0 && !isOwner && (
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              Load More Threads
            </button>
          </div>
        )}
      </div>

      {/* Add Thread Modal */}
      {showAddModal && (
        <AddThreadModal
          onClose={() => setShowAddModal(false)}
          onAddThread={onAddThread}
        />
      )}
    </section>
  );
};

export default ProductGallery;