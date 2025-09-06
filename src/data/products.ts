import type { SilkThread } from '../types';
import cottonYarn from '../assets/CottonYarn.jpg';
import chinaTusserYarn from '../assets/ChinaTusserYarn.jpg';
import Emitation from '../assets/Emitation Jari.jpg';
import GhichaTusserYarn from '../assets/GhichaTusserYarn.jpg';
import PolyesterYarn from '../assets/PolyesterYarn.jpg';
import Tusserfabricsandsaree from '../assets/Tusserfabricsandsaree.jpg';

export const productCategories = [
  { value: 'all', label: 'All Products' },
  { value: 'china-tusser-yarn', label: 'China Tusser Yarn' },
  { value: 'ghicha-tusser-yarn', label: 'Ghicha Tusser Yarn' },
  { value: 'pure-polyester-yarn', label: 'Pure Polyester Yarn' },
  { value: 'pure-cotton-yarn', label: 'Pure Cotton Yarn' },
  { value: 'emitation-jari', label: 'Emitation Jari' },
  { value: 'Tusser-fabrics-and-saree', label: 'Tusser fabrics and saree' },
];

export const products: SilkThread[] = [
  // Raw Silk Products
  {
    id: '1',
    name: 'Pure Tusser Ghicha Yarn',
    description: 'High-quality raw silk with natural luster, perfect for traditional weaving and premium textile applications.',
    price: 3200,
    originalPrice: 3800,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
       GhichaTusserYarn,
    ],
    category: 'ghicha-tusser-yarn',
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
    name: 'China Tusser Yarn',
    description: 'Beautiful golden yellow raw silk with excellent strength and natural sheen for luxury applications.',
    price: 3500,
    originalPrice: 4200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      chinaTusserYarn
    ],
    category: 'china-tusser-yarn', 
    color: 'White',
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
    name: 'Cotton Yarn',
    description: 'Soft cream-colored raw silk ideal for delicate weaving and embroidery work.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      cottonYarn
    ],
    category: 'pure-cotton-yarn',
    color: 'Red, Green',
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
    name: 'Polyester Yarn',
    description: 'Authentic Ghicha Tusser yarn with natural brown color, known for its durability and traditional appeal.',
    price: 2800,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      PolyesterYarn
    ],
    category: 'pure-polyester-yarn',
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
    name: 'Pure Emitation Jari',
    description: 'Rich dark brown Ghicha Tusser yarn, perfect for creating traditional Indian textiles with authentic look.',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      Emitation
    ],
    category: 'emitation-jari',
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
    name: 'Tusser fabrics and saree',
    description: 'Light brown Ghicha Tusser yarn with subtle variations, ideal for contemporary textile designs.',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      Tusserfabricsandsaree
    ],
    category: 'Tusser-fabrics-and-saree',
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
