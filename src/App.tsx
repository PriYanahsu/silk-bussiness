import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import type { SilkThread } from './types';

// Sample data - in production, this would come from an API
const sampleThreads: SilkThread[] = [
  {
    id: '1',
    name: 'Premium Mulberry Silk Thread',
    description: 'High-quality mulberry silk thread, perfect for weaving and embroidery. Imported from China with superior luster and strength.',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'mulberry',
    color: 'Natural White',
    weight: '20/22',
    origin: 'China',
    quality: 'A+',
    inStock: true,
    stockQuantity: 50,
    rating: 4.8,
    reviews: 24,
    tags: ['premium', 'mulberry', 'weaving'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Tussar Silk Thread - Golden',
    description: 'Authentic Tussar silk thread with natural golden color. Perfect for traditional Indian weaving and saree making.',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'tussar',
    color: 'Golden',
    weight: '13/15',
    origin: 'West Bengal',
    quality: 'A',
    inStock: true,
    stockQuantity: 30,
    rating: 4.6,
    reviews: 18,
    tags: ['tussar', 'traditional', 'golden'],
    featured: true,
    isActive: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Eri Silk Thread - Natural',
    description: 'Eco-friendly Eri silk thread, also known as Ahimsa silk. Soft and warm, perfect for winter garments.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'eri',
    color: 'Natural Cream',
    weight: '8/10',
    origin: 'Assam',
    quality: 'A',
    inStock: false,
    stockQuantity: 0,
    rating: 4.9,
    reviews: 31,
    tags: ['eri', 'eco-friendly', 'ahimsa'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '4',
    name: 'Muga Silk Thread - Golden',
    description: 'Rare Muga silk thread from Assam. Known for its natural golden color and durability. Limited availability.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'muga',
    color: 'Golden Yellow',
    weight: '15/17',
    origin: 'Assam',
    quality: 'A+',
    inStock: true,
    stockQuantity: 15,
    rating: 4.7,
    reviews: 15,
    tags: ['muga', 'rare', 'golden', 'assam'],
    featured: false,
    isActive: true,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  }
];

function App() {
  const [threads, setThreads] = useState<SilkThread[]>(sampleThreads);
  const [filteredThreads, setFilteredThreads] = useState<SilkThread[]>(sampleThreads);
  const [isOwner, setIsOwner] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [preorders, setPreorders] = useState<any[]>([]);

  useEffect(() => {
    // Only show active threads to customers
    const activeThreads = isOwner ? threads : threads.filter(thread => thread.isActive);
    setFilteredThreads(activeThreads);
  }, [threads, isOwner]);

  const handleLogin = (user: { username: string; role: 'user' | 'owner'; email?: string; phone?: string }) => {
    setCurrentUser(user.username);
    
    // Store user info in localStorage for preorders
    localStorage.setItem('currentUser', JSON.stringify({
      username: user.username,
      email: user.email || '',
      phone: user.phone || '',
      role: user.role
    }));
    
    if (user.role === 'owner') {
      setIsOwner(true);
      setIsUser(false);
    } else {
      setIsUser(true);
      setIsOwner(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsOwner(false);
    setIsUser(false);
    localStorage.removeItem('currentUser');
  };

  const addThread = (thread: Omit<SilkThread, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newThread: SilkThread = {
      ...thread,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setThreads(prev => [...prev, newThread]);
  };

  const updateThread = (id: string, updates: Partial<SilkThread>) => {
    setThreads(prev => prev.map(thread => 
      thread.id === id 
        ? { ...thread, ...updates, updatedAt: new Date() }
        : thread
    ));
  };

  const deleteThread = (id: string) => {
    setThreads(prev => prev.filter(thread => thread.id !== id));
  };

  const toggleThreadStatus = (id: string) => {
    setThreads(prev => prev.map(thread => 
      thread.id === id 
        ? { ...thread, isActive: !thread.isActive, updatedAt: new Date() }
        : thread
    ));
  };

  const addPreorder = (preorderData: any) => {
    const newPreorder = {
      ...preorderData,
      id: Date.now().toString(),
      createdAt: new Date(),
      status: 'pending' as const,
    };
    setPreorders(prev => [...prev, newPreorder]);
  };

  const updatePreorderStatus = (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    setPreorders(prev => prev.map(preorder => 
      preorder.id === id ? { ...preorder, status } : preorder
    ));
  };

  const filterThreads = (filters: any) => {
    let filtered = isOwner ? threads : threads.filter(thread => thread.isActive);

    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(thread => thread.category === filters.category);
    }

    // Apply stock filter
    if (filters.inStock) {
      filtered = filtered.filter(thread => thread.inStock);
    }

    // Apply price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(thread => 
        thread.price >= filters.priceRange[0] && thread.price <= filters.priceRange[1]
      );
    }

    // Apply color filter
    if (filters.color && filters.color !== 'all') {
      filtered = filtered.filter(thread => 
        thread.color.toLowerCase().includes(filters.color.toLowerCase())
      );
    }

    // Apply sorting
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        let aValue: any, bValue: any;
        
        switch (filters.sortBy) {
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'newest':
            aValue = new Date(a.createdAt).getTime();
            bValue = new Date(b.createdAt).getTime();
            break;
          default:
            return 0;
        }

        if (filters.sortOrder === 'desc') {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        } else {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });
    }

    setFilteredThreads(filtered);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 thread-pattern">
        <Header 
          isOwner={isOwner}
          isUser={isUser}
          currentUser={currentUser}
          onLogin={handleLogin}
          onLogout={handleLogout}
          preorderCount={preorders.length}
          threads={threads}
          preorders={preorders}
          onUpdateThread={updateThread}
          onDeleteThread={deleteThread}
          onToggleStatus={toggleThreadStatus}
          onUpdatePreorderStatus={updatePreorderStatus}
        />
        <main>
          <Hero />
          <About />
          <ProductGallery 
            threads={filteredThreads}
            isOwner={isOwner}
            onAddThread={addThread}
            onUpdateThread={updateThread}
            onDeleteThread={deleteThread}
            onToggleStatus={toggleThreadStatus}
            onAddPreorder={addPreorder}
            onFilter={filterThreads}
          />
          <Contact onAddPreorder={addPreorder} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;