const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import models
const User = require('./models/User');
const Product = require('./models/Product');

// Sample products data
const sampleProducts = [
  {
    name: 'Premium Silkyarn - Natural White',
    description: 'High-quality silk yarn perfect for traditional weaving and embroidery. Superior luster and strength for professional applications.',
    price: 2500,
    originalPrice: 3000,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'silkyarn',
    color: 'Natural White',
    weight: '20/22',
    origin: 'India',
    quality: 'A+',
    inStock: true,
    stockQuantity: 50,
    rating: 4.8,
    reviews: 24,
    tags: ['premium', 'silkyarn', 'weaving'],
    featured: true,
    isActive: true
  },
  {
    name: 'Poly Yarn - Multi Color',
    description: 'Durable poly yarn suitable for modern textile applications. Available in various colors and weights for different manufacturing needs.',
    price: 1800,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'poly',
    color: 'Multi Color',
    weight: '13/15',
    origin: 'India',
    quality: 'A',
    inStock: true,
    stockQuantity: 30,
    rating: 4.6,
    reviews: 18,
    tags: ['poly', 'modern', 'durable'],
    featured: true,
    isActive: true
  },
  {
    name: 'Decorative Zari - Golden',
    description: 'Premium quality zari thread for embellishments and decorative work. Perfect for traditional Indian textiles and embroidery.',
    price: 3200,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'zari',
    color: 'Golden',
    weight: '8/10',
    origin: 'India',
    quality: 'A+',
    inStock: true,
    stockQuantity: 25,
    rating: 4.9,
    reviews: 31,
    tags: ['zari', 'decorative', 'golden'],
    featured: true,
    isActive: true
  },
  {
    name: 'Cottonyarn - Natural',
    description: 'High-quality cotton yarn for various textile applications. Soft, durable, and perfect for everyday use in weaving and knitting.',
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'cottonyarn',
    color: 'Natural',
    weight: '15/17',
    origin: 'India',
    quality: 'A',
    inStock: true,
    stockQuantity: 40,
    rating: 4.7,
    reviews: 15,
    tags: ['cottonyarn', 'natural', 'soft'],
    featured: false,
    isActive: true
  }
];

// Sample users data
const sampleUsers = [
  {
    username: 'owner',
    email: 'owner@shriganpatisilk.com',
    password: 'owner123',
    role: 'owner',
    profile: {
      firstName: 'Pankaj',
      lastName: 'Kumar Singh',
      phone: '+91 7000018326',
      address: {
        street: 'Sitaram Gali, Manjhali Talab',
        city: 'Champa',
        state: 'Chhattisgarh',
        pincode: '495671',
        country: 'India'
      }
    }
  },
  {
    username: 'customer1',
    email: 'customer1@example.com',
    password: 'customer123',
    role: 'customer',
    profile: {
      firstName: 'Rajesh',
      lastName: 'Kumar',
      phone: '+91 9876543210',
      address: {
        street: 'Main Road',
        city: 'Raipur',
        state: 'Chhattisgarh',
        pincode: '492001',
        country: 'India'
      }
    }
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shri-ganpati-silk');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Create users
    const users = await User.insertMany(sampleUsers);
    console.log(`👥 Created ${users.length} users`);

    // Create products
    const products = await Product.insertMany(sampleProducts);
    console.log(`📦 Created ${products.length} products`);

    console.log('🌱 Database seeded successfully!');
    console.log('\n📋 Login Credentials:');
    console.log('Owner: owner@shriganpatisilk.com / owner123');
    console.log('Customer: customer1@example.com / customer123');

  } catch (error) {
    console.error('❌ Seeding error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
}

// Run seeding
seedDatabase();
