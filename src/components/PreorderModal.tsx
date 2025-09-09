import { useState } from 'react';
import { X, ShoppingCart, Plus, Minus, User } from 'lucide-react';
import type { SilkThread } from '../types';

interface PreorderModalProps {
  thread: SilkThread;
  onClose: () => void;
}

const PreorderModal: React.FC<PreorderModalProps> = ({ thread, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "917007836367"; // Your WhatsApp number in international format

    const text = `
🧵 Preorder Request
--------------------
📌 Product: ${thread.name}
📦 Quantity: ${quantity}

👤 Customer: ${customerInfo.name}
📧 Email: ${customerInfo.email}
📞 Phone: ${customerInfo.phone}

📝 Note: ${customerInfo.message || "N/A"}
    `;

    const encodedText = encodeURIComponent(text);

    // Detect if user is on mobile
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedText}` // open WhatsApp app
      : `https://wa.me/${phoneNumber}?text=${encodedText}`;       // open WhatsApp Web

    // Open WhatsApp
    window.open(url, "_blank");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center">
              <ShoppingCart className="h-6 w-6 mr-2 text-silk-600 dark:text-silk-400" />
              Preorder Thread
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Info */}
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <img
                  src={thread.images[0]}
                  alt={thread.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {thread.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {thread.description}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Stock: {thread.stockQuantity}
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(thread.stockQuantity, quantity + 1))}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center">
                  <User className="h-5 w-5 mr-2 text-silk-600 dark:text-silk-400" />
                  Customer Information
                </h4>

                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border text-black border-gray-300 dark:border-gray-600 rounded-lg"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border text-black border-gray-300 dark:border-gray-600 rounded-lg"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border text-black border-gray-300 dark:border-gray-600 rounded-lg"
                  placeholder="Phone Number"
                />
                <textarea
                  name="message"
                  value={customerInfo.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border text-black border-gray-300 dark:border-gray-600 rounded-lg resize-none"
                  placeholder="Any special requirements or notes..."
                />
              </div>

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Send Preorder via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreorderModal;
