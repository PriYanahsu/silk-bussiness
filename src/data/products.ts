import type { SilkThread } from '../types';

export const productCategories = [
  { value: 'all', label: 'All Products' },
  { value: 'raw-silk', label: 'Raw Silk' },
  { value: 'ghicha-tusser-yarn', label: 'Ghicha Tusser Yarn' },
  { value: 'polyester-yarn', label: 'Polyester Yarn' },
  { value: 'cotton-yarn', label: 'Cotton Yarn' },
  { value: 'synthetics-yarn', label: 'Synthetics Yarn' },
];

export const products: SilkThread[] = [
  // Raw Silk Products
  {
    id: '1',
    name: 'Premium Raw Silk - Natural White',
    description: 'High-quality raw silk with natural luster, perfect for traditional weaving and premium textile applications.',
    price: 3200,
    originalPrice: 3800,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'raw-silk',
    color: 'Natural White',
    weight: '20/22',
    origin: 'Karnataka',
    quality: 'A+',
    inStock: true,
    stockQuantity: 45,
    rating: 4.9,
    reviews: 28,
    tags: ['premium', 'raw-silk', 'natural', 'weaving'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Raw Silk - Golden Yellow',
    description: 'Beautiful golden yellow raw silk with excellent strength and natural sheen for luxury applications.',
    price: 3500,
    originalPrice: 4200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'raw-silk',
    color: 'Golden Yellow',
    weight: '18/20',
    origin: 'West Bengal',
    quality: 'A+',
    inStock: true,
    stockQuantity: 32,
    rating: 4.8,
    reviews: 22,
    tags: ['raw-silk', 'golden', 'luxury', 'premium'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Raw Silk - Cream White',
    description: 'Soft cream-colored raw silk ideal for delicate weaving and embroidery work.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'raw-silk',
    color: 'Cream White',
    weight: '22/24',
    origin: 'Assam',
    quality: 'A',
    inStock: true,
    stockQuantity: 38,
    rating: 4.7,
    reviews: 19,
    tags: ['raw-silk', 'cream', 'delicate', 'embroidery'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },

  // Ghicha Tusser Yarn Products
  {
    id: '4',
    name: 'Ghicha Tusser Yarn - Natural Brown',
    description: 'Authentic Ghicha Tusser yarn with natural brown color, known for its durability and traditional appeal.',
    price: 2800,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'ghicha-tusser-yarn',
    color: 'Natural Brown',
    weight: '16/18',
    origin: 'Jharkhand',
    quality: 'A+',
    inStock: true,
    stockQuantity: 42,
    rating: 4.8,
    reviews: 25,
    tags: ['ghicha', 'tusser', 'natural', 'traditional'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: '5',
    name: 'Ghicha Tusser Yarn - Dark Brown',
    description: 'Rich dark brown Ghicha Tusser yarn, perfect for creating traditional Indian textiles with authentic look.',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'ghicha-tusser-yarn',
    color: 'Dark Brown',
    weight: '14/16',
    origin: 'Odisha',
    quality: 'A',
    inStock: true,
    stockQuantity: 35,
    rating: 4.6,
    reviews: 18,
    tags: ['ghicha', 'tusser', 'dark-brown', 'traditional'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22')
  },
  {
    id: '6',
    name: 'Ghicha Tusser Yarn - Light Brown',
    description: 'Light brown Ghicha Tusser yarn with subtle variations, ideal for contemporary textile designs.',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'ghicha-tusser-yarn',
    color: 'Light Brown',
    weight: '18/20',
    origin: 'Chhattisgarh',
    quality: 'A',
    inStock: true,
    stockQuantity: 28,
    rating: 4.5,
    reviews: 15,
    tags: ['ghicha', 'tusser', 'light-brown', 'contemporary'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-28'),
    updatedAt: new Date('2024-01-28')
  },

  // Polyester Yarn Products
  {
    id: '7',
    name: 'Polyester Yarn - White',
    description: 'High-quality polyester yarn in pure white, excellent for modern textile applications and industrial use.',
    price: 1200,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'polyester-yarn',
    color: 'White',
    weight: '150D',
    origin: 'Gujarat',
    quality: 'A',
    inStock: true,
    stockQuantity: 80,
    rating: 4.4,
    reviews: 35,
    tags: ['polyester', 'white', 'industrial', 'modern'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '8',
    name: 'Polyester Yarn - Black',
    description: 'Durable black polyester yarn, perfect for dark fabric applications and contrast designs.',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'polyester-yarn',
    color: 'Black',
    weight: '150D',
    origin: 'Tamil Nadu',
    quality: 'A',
    inStock: true,
    stockQuantity: 65,
    rating: 4.3,
    reviews: 28,
    tags: ['polyester', 'black', 'durable', 'contrast'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '9',
    name: 'Polyester Yarn - Red',
    description: 'Vibrant red polyester yarn for colorful textile applications and fashion industry use.',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'polyester-yarn',
    color: 'Red',
    weight: '150D',
    origin: 'Maharashtra',
    quality: 'A',
    inStock: true,
    stockQuantity: 55,
    rating: 4.5,
    reviews: 22,
    tags: ['polyester', 'red', 'vibrant', 'fashion'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14')
  },
  {
    id: '10',
    name: 'Polyester Yarn - Blue',
    description: 'Classic blue polyester yarn, versatile for various textile applications and industrial purposes.',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'polyester-yarn',
    color: 'Blue',
    weight: '150D',
    origin: 'Punjab',
    quality: 'A',
    inStock: true,
    stockQuantity: 60,
    rating: 4.4,
    reviews: 20,
    tags: ['polyester', 'blue', 'versatile', 'industrial'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16')
  },

  // Cotton Yarn Products
  {
    id: '11',
    name: 'Cotton Yarn - Natural White',
    description: 'Pure cotton yarn in natural white color, soft and breathable for comfortable textile applications.',
    price: 1800,
    originalPrice: 2200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'cotton-yarn',
    color: 'Natural White',
    weight: '30s',
    origin: 'Gujarat',
    quality: 'A+',
    inStock: true,
    stockQuantity: 70,
    rating: 4.7,
    reviews: 42,
    tags: ['cotton', 'natural', 'soft', 'breathable'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '12',
    name: 'Cotton Yarn - Off White',
    description: 'Soft off-white cotton yarn with natural variations, perfect for creating textured fabrics.',
    price: 1750,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'cotton-yarn',
    color: 'Off White',
    weight: '32s',
    origin: 'Maharashtra',
    quality: 'A',
    inStock: true,
    stockQuantity: 58,
    rating: 4.6,
    reviews: 35,
    tags: ['cotton', 'off-white', 'textured', 'natural'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-11'),
    updatedAt: new Date('2024-01-11')
  },
  {
    id: '13',
    name: 'Cotton Yarn - Cream',
    description: 'Warm cream-colored cotton yarn, ideal for creating cozy and comfortable textile products.',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'cotton-yarn',
    color: 'Cream',
    weight: '28s',
    origin: 'Tamil Nadu',
    quality: 'A',
    inStock: true,
    stockQuantity: 45,
    rating: 4.5,
    reviews: 28,
    tags: ['cotton', 'cream', 'cozy', 'comfortable'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-13'),
    updatedAt: new Date('2024-01-13')
  },
  {
    id: '14',
    name: 'Cotton Yarn - Light Brown',
    description: 'Natural light brown cotton yarn with earthy tones, perfect for rustic and traditional designs.',
    price: 1900,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'cotton-yarn',
    color: 'Light Brown',
    weight: '26s',
    origin: 'Rajasthan',
    quality: 'A',
    inStock: true,
    stockQuantity: 40,
    rating: 4.4,
    reviews: 25,
    tags: ['cotton', 'light-brown', 'earthy', 'traditional'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17')
  },

  // Synthetics Yarn Products
  {
    id: '15',
    name: 'Synthetic Yarn - White',
    description: 'High-performance synthetic yarn in white, engineered for durability and industrial applications.',
    price: 1000,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'synthetics-yarn',
    color: 'White',
    weight: '200D',
    origin: 'Gujarat',
    quality: 'A',
    inStock: true,
    stockQuantity: 100,
    rating: 4.3,
    reviews: 50,
    tags: ['synthetic', 'white', 'durable', 'industrial'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '16',
    name: 'Synthetic Yarn - Black',
    description: 'Strong black synthetic yarn, perfect for heavy-duty applications and outdoor textiles.',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'synthetics-yarn',
    color: 'Black',
    weight: '200D',
    origin: 'Maharashtra',
    quality: 'A',
    inStock: true,
    stockQuantity: 85,
    rating: 4.2,
    reviews: 38,
    tags: ['synthetic', 'black', 'heavy-duty', 'outdoor'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-07'),
    updatedAt: new Date('2024-01-07')
  },
  {
    id: '17',
    name: 'Synthetic Yarn - Green',
    description: 'Vibrant green synthetic yarn for colorful applications and specialized textile requirements.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'synthetics-yarn',
    color: 'Green',
    weight: '200D',
    origin: 'Tamil Nadu',
    quality: 'A',
    inStock: true,
    stockQuantity: 75,
    rating: 4.4,
    reviews: 32,
    tags: ['synthetic', 'green', 'vibrant', 'specialized'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-09'),
    updatedAt: new Date('2024-01-09')
  },
  {
    id: '18',
    name: 'Synthetic Yarn - Yellow',
    description: 'Bright yellow synthetic yarn, ideal for safety applications and high-visibility textiles.',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'synthetics-yarn',
    color: 'Yellow',
    weight: '200D',
    origin: 'Punjab',
    quality: 'A',
    inStock: true,
    stockQuantity: 65,
    rating: 4.3,
    reviews: 28,
    tags: ['synthetic', 'yellow', 'safety', 'high-visibility'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19')
  },
  {
    id: '19',
    name: 'Synthetic Yarn - Red',
    description: 'Bold red synthetic yarn for fashion applications and decorative textile purposes.',
    price: 1080,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'synthetics-yarn',
    color: 'Red',
    weight: '200D',
    origin: 'Karnataka',
    quality: 'A',
    inStock: true,
    stockQuantity: 70,
    rating: 4.4,
    reviews: 30,
    tags: ['synthetic', 'red', 'fashion', 'decorative'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21')
  },
  {
    id: '20',
    name: 'Synthetic Yarn - Blue',
    description: 'Classic blue synthetic yarn, versatile for various industrial and commercial applications.',
    price: 1020,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'synthetics-yarn',
    color: 'Blue',
    weight: '200D',
    origin: 'West Bengal',
    quality: 'A',
    inStock: true,
    stockQuantity: 80,
    rating: 4.3,
    reviews: 35,
    tags: ['synthetic', 'blue', 'versatile', 'commercial'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-23'),
    updatedAt: new Date('2024-01-23')
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
