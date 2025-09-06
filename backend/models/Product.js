const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  images: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['silkyarn', 'poly', 'yarn', 'zari', 'cottonyarn', 'raw', 'dyed', 'specialty']
  },
  color: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  quality: {
    type: String,
    required: true,
    enum: ['A+', 'A', 'B+', 'B']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: {
    type: Number,
    default: 0,
    min: 0
  },
  tags: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  gstin: {
    type: String,
    default: '22BZMPS6779J1ZI'
  }
}, {
  timestamps: true
});

// Index for better search performance
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ featured: 1, isActive: 1 });

module.exports = mongoose.model('Product', productSchema);
