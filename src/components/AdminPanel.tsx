import { useState, useEffect } from 'react';
import { X, Eye, EyeOff, Edit, Trash2, MessageSquare, Package, Users } from 'lucide-react';
import PreorderDataTable from './PreorderDataTable';
import type { SilkThread, PreorderData } from '../types';

interface AdminPanelProps {
  threads: SilkThread[];
  preorders: PreorderData[];
  onUpdateThread: (id: string, updates: Partial<SilkThread>) => void;
  onDeleteThread: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onUpdatePreorderStatus: (id: string, status: 'pending' | 'confirmed' | 'cancelled') => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  threads, 
  preorders, 
  onUpdateThread, 
  onDeleteThread, 
  onToggleStatus, 
  onUpdatePreorderStatus,
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'threads' | 'preorders'>('preorders');

  const stats = {
    totalThreads: threads.length,
    activeThreads: threads.filter(t => t.isActive).length,
    totalPreorders: preorders.length,
    pendingPreorders: preorders.filter(p => p.status === 'pending').length,
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Admin Panel</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-silk-50 dark:bg-silk-900 p-4 rounded-lg">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-silk-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Threads</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalThreads}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Threads</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.activeThreads}</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Preorders</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalPreorders}</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Pending</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.pendingPreorders}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6">
            <button
              onClick={() => setActiveTab('threads')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'threads'
                  ? 'bg-silk-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Manage Threads
            </button>
            <button
              onClick={() => setActiveTab('preorders')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'preorders'
                  ? 'bg-silk-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Preorders ({preorders.length})
            </button>
          </div>

          {/* Content */}
          {activeTab === 'preorders' ? (
            <PreorderDataTable
              preorders={preorders}
              onUpdateStatus={onUpdatePreorderStatus}
            />
          ) : activeTab === 'threads' ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">All Threads</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thread</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {threads.map((thread) => (
                      <tr key={thread.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img className="h-10 w-10 rounded-lg object-cover" src={thread.images[0]} alt={thread.name} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{thread.name}</div>
                              <div className="text-sm text-gray-500">{thread.origin}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{thread.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{thread.price.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{thread.stockQuantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            thread.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {thread.isActive ? 'Active' : 'Hidden'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => onToggleStatus(thread.id)}
                            className={`p-1 rounded ${
                              thread.isActive 
                                ? 'text-red-600 hover:bg-red-100' 
                                : 'text-green-600 hover:bg-green-100'
                            }`}
                          >
                            {thread.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                          <button
                            onClick={() => onUpdateThread(thread.id, {})}
                            className="text-blue-600 hover:bg-blue-100 p-1 rounded"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => onDeleteThread(thread.id)}
                            className="text-red-600 hover:bg-red-100 p-1 rounded"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
