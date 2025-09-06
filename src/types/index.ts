export interface SilkThread {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'china-tusser-yarn' | 'ghicha-tusser-yarn' | 'pure-polyester-yarn' | 'pure-cotton-yarn' | 'emitation-jari' | 'Tusser-fabrics-and-saree';
  color: string;
  weight: string; // e.g., "20/22", "13/15", "8/10"
  origin: string; // e.g., "Karnataka", "West Bengal", "Assam"
  quality: 'A+' | 'A' | 'B+' | 'B';
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviews: number;
  tags: string[];
  featured: boolean;
  isActive: boolean; // For owner to show/hide products
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'product' | 'bulk' | 'preorder' | 'custom';
  productId?: string; // For preorder inquiries
  quantity?: number; // For preorder inquiries
}

export interface PreorderData {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productId: string;
  productName: string;
  quantity: number;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  color: string;
  inStock: boolean;
  sortBy: 'name' | 'price' | 'rating' | 'newest';
  sortOrder: 'asc' | 'desc';
}

export interface Owner {
  id: string;
  username: string;
  password: string; // In real app, this would be hashed
  email: string;
  isLoggedIn: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: Date;
}
