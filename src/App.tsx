import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import type { SilkThread } from './types';
import { products } from './data/products';

function App() {
  const [filteredThreads, setFilteredThreads] = useState<SilkThread[]>(products);

  useEffect(() => {
    // Show all active threads for static site
    const activeThreads = products.filter(thread => thread.isActive);
    setFilteredThreads(activeThreads);
  }, []);

  const addPreorder = (preorderData: any) => {
    // Static site - just log the preorder
    console.log('Preorder request:', preorderData);
  };

  const filterThreads = (filters: any) => {
    let filtered = products.filter(thread => thread.isActive);

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
        <Header />
        <main>
          <Hero />
          <About />
          <ProductGallery 
            threads={filteredThreads}
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