import { useState, useMemo, useEffect } from 'react';
import { Search, Download, Eye, Phone, Mail, Package, X, TrendingUp, DollarSign, Users, BarChart3, User, MessageSquare } from 'lucide-react';
import type { PreorderData } from '../types';

interface PreorderDataTableProps {
  preorders: PreorderData[];
  onUpdateStatus: (id: string, status: 'pending' | 'confirmed' | 'cancelled') => void;
}

const PreorderDataTable: React.FC<PreorderDataTableProps> = ({ preorders, onUpdateStatus }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'customer' | 'product' | 'quantity'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedPreorder, setSelectedPreorder] = useState<PreorderData | null>(null);

  // Calculate analytics
  const analytics = useMemo(() => {
    const totalPreorders = preorders.length;
    const pendingPreorders = preorders.filter(p => p.status === 'pending').length;
    const confirmedPreorders = preorders.filter(p => p.status === 'confirmed').length;
    const cancelledPreorders = preorders.filter(p => p.status === 'cancelled').length;
    
    // Note: Using estimated average price since unitPrice is not stored in preorder data
    const estimatedUnitPrice = 2500; // Average price per unit
    const totalValue = preorders.reduce((sum, p) => sum + (p.quantity * estimatedUnitPrice), 0);
    const confirmedValue = preorders
      .filter(p => p.status === 'confirmed')
      .reduce((sum, p) => sum + (p.quantity * estimatedUnitPrice), 0);
    
    const uniqueCustomers = new Set(preorders.map(p => p.customerEmail)).size;
    
    const topProducts = preorders.reduce((acc, p) => {
      acc[p.productName] = (acc[p.productName] || 0) + p.quantity;
      return acc;
    }, {} as Record<string, number>);
    
    const topProduct = Object.entries(topProducts)
      .sort(([,a], [,b]) => b - a)[0];
    
    return {
      totalPreorders,
      pendingPreorders,
      confirmedPreorders,
      cancelledPreorders,
      totalValue,
      confirmedValue,
      uniqueCustomers,
      topProduct: topProduct ? { name: topProduct[0], quantity: topProduct[1] } : null,
      conversionRate: totalPreorders > 0 ? (confirmedPreorders / totalPreorders) * 100 : 0
    };
  }, [preorders]);

  // Filter and sort preorders
  const filteredPreorders = preorders
    .filter(preorder => {
      const matchesSearch = 
        preorder.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        preorder.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        preorder.productName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || preorder.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'customer':
          comparison = a.customerName.localeCompare(b.customerName);
          break;
        case 'product':
          comparison = a.productName.localeCompare(b.productName);
          break;
        case 'quantity':
          comparison = a.quantity - b.quantity;
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const exportToCSV = () => {
    const headers = ['Customer Name', 'Email', 'Phone', 'Product', 'Quantity', 'Status', 'Date', 'Message'];
    const csvData = preorders.map(preorder => [
      preorder.customerName,
      preorder.customerEmail,
      preorder.customerPhone,
      preorder.productName,
      preorder.quantity,
      preorder.status,
      new Date(preorder.createdAt).toLocaleDateString(),
      preorder.message || ''
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `preorders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const [showExportPreview, setShowExportPreview] = useState(false);
  const [exportData, setExportData] = useState<any[]>([]);

  const handleExportPreview = () => {
    const data = preorders.map(preorder => ({
      customerName: preorder.customerName,
      customerEmail: preorder.customerEmail,
      customerPhone: preorder.customerPhone,
      productName: preorder.productName,
      quantity: preorder.quantity,
      status: preorder.status,
      date: new Date(preorder.createdAt).toLocaleDateString(),
      message: preorder.message || '',
      originalPreorder: preorder
    }));
    setExportData(data);
    setShowExportPreview(true);
  };

  // Prevent background scroll when export preview modal is open
  useEffect(() => {
    if (showExportPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showExportPreview]);


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Preorder Analytics & Management</h2>
          <p className="text-gray-600 dark:text-gray-300">Comprehensive insights and management for all customer preorders</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleExportPreview}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Eye className="h-4 w-4" />
            <span>Preview Export</span>
          </button>
          <button
            onClick={exportToCSV}
            className="flex items-center space-x-2 px-4 py-2 bg-silk-600 text-white rounded-lg hover:bg-silk-700 transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Enhanced Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Preorders</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{analytics.totalPreorders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Pending</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{analytics.pendingPreorders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Confirmed Value</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">₹{analytics.confirmedValue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Unique Customers</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{analytics.uniqueCustomers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-5 w-5 text-silk-600 dark:text-silk-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Conversion Rate</h3>
          </div>
          <div className="text-3xl font-bold text-silk-600 dark:text-silk-400">
            {analytics.conversionRate.toFixed(1)}%
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {analytics.confirmedPreorders} of {analytics.totalPreorders} preorders confirmed
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Package className="h-5 w-5 text-silk-600 dark:text-silk-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Product</h3>
          </div>
          {analytics.topProduct ? (
            <>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {analytics.topProduct.name}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {analytics.topProduct.quantity} units preordered
              </p>
            </>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No preorders yet</p>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <DollarSign className="h-5 w-5 text-silk-600 dark:text-silk-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Total Value</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            ₹{analytics.totalValue.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            All preorders combined
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by customer, email, or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent"
            >
              <option value="date">Sort by Date</option>
              <option value="customer">Sort by Customer</option>
              <option value="product">Sort by Product</option>
              <option value="quantity">Sort by Quantity</option>
            </select>
            
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Product Information
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Order Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status & Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredPreorders.map((preorder) => (
                <tr key={preorder.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 bg-silk-100 dark:bg-silk-900 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-silk-600 dark:text-silk-400" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{preorder.customerName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {preorder.customerEmail}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {preorder.customerPhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{preorder.productName}</div>
                    {preorder.message && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-start">
                        <MessageSquare className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{preorder.message}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Quantity: {preorder.quantity}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Est. Value: ₹{(preorder.quantity * 2500).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-2">
                      <select
                        value={preorder.status}
                        onChange={(e) => onUpdateStatus(preorder.id, e.target.value as any)}
                        className={`text-xs font-semibold px-2 py-1 rounded-full border ${getStatusColor(preorder.status)} focus:outline-none focus:ring-2 focus:ring-silk-500 bg-white dark:bg-gray-700`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(preorder.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedPreorder(preorder)}
                        className="text-silk-600 dark:text-silk-400 hover:text-silk-900 dark:hover:text-silk-300 p-2 hover:bg-silk-50 dark:hover:bg-silk-900 rounded-lg transition-colors duration-200"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <a
                        href={`mailto:${preorder.customerEmail}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 p-2 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors duration-200"
                        title="Send Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={`tel:${preorder.customerPhone}`}
                        className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 p-2 hover:bg-green-50 dark:hover:bg-green-900 rounded-lg transition-colors duration-200"
                        title="Call Customer"
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredPreorders.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No preorders found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedPreorder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Preorder Details</h3>
                <button
                  onClick={() => setSelectedPreorder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Customer Information</h4>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-medium">Name:</span> {selectedPreorder.customerName}</p>
                      <p className="text-sm"><span className="font-medium">Email:</span> {selectedPreorder.customerEmail}</p>
                      <p className="text-sm"><span className="font-medium">Phone:</span> {selectedPreorder.customerPhone}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Order Information</h4>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-medium">Product:</span> {selectedPreorder.productName}</p>
                      <p className="text-sm"><span className="font-medium">Quantity:</span> {selectedPreorder.quantity}</p>
                      <p className="text-sm"><span className="font-medium">Status:</span> 
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(selectedPreorder.status)}`}>
                          {selectedPreorder.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {selectedPreorder.message && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Customer Message</h4>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedPreorder.message}</p>
                  </div>
                )}
                
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setSelectedPreorder(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <a
                    href={`mailto:${selectedPreorder.customerEmail}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Preview Modal */}
      {showExportPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Export Data Preview</h2>
                <button
                  onClick={() => setShowExportPreview(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600 dark:text-gray-300">Preview of data that will be exported ({exportData.length} records)</p>
                <button
                  onClick={exportToCSV}
                  className="flex items-center space-x-2 px-4 py-2 bg-silk-600 text-white rounded-lg hover:bg-silk-700 transition-colors duration-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CSV</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {exportData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.customerName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.customerEmail}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.customerPhone}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.productName}</div>
                          {item.message && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">{item.message}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-gray-100">{item.quantity}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={item.status}
                            onChange={(e) => onUpdateStatus(item.originalPreorder.id, e.target.value as any)}
                            className={`text-xs font-semibold px-2 py-1 rounded-full border ${getStatusColor(item.status)} focus:outline-none focus:ring-2 focus:ring-silk-500 bg-white dark:bg-gray-700`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedPreorder(item.originalPreorder)}
                              className="text-silk-600 dark:text-silk-400 hover:text-silk-900 dark:hover:text-silk-300 p-2 hover:bg-silk-50 dark:hover:bg-silk-900 rounded-lg transition-colors duration-200"
                              title="View Details"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <a
                              href={`mailto:${item.customerEmail}`}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 p-2 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors duration-200"
                              title="Send Email"
                            >
                              <Mail className="h-4 w-4" />
                            </a>
                            <a
                              href={`tel:${item.customerPhone}`}
                              className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 p-2 hover:bg-green-50 dark:hover:bg-green-900 rounded-lg transition-colors duration-200"
                              title="Call Customer"
                            >
                              <Phone className="h-4 w-4" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreorderDataTable;
