import { Award, Users, Globe, Package, Shield, Truck } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '12+', label: 'Countries Sourced' },
    { icon: Package, value: '10K+', label: 'Threads Imported' },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-silk-50 via-white to-gold-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-silk-100 dark:bg-silk-900 text-silk-700 dark:text-silk-300 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Trusted Silk Thread Importers
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
              About <span className="text-silk-600 dark:text-silk-400">Silk Thread Hub</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              For over 15 years, Silk Thread Hub has been the premier importer and supplier of 
              premium silk threads from around the world. Our unwavering commitment to quality, 
              authenticity, and customer satisfaction has established us as the trusted partner 
              for artisans, manufacturers, and silk enthusiasts globally.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We specialize in importing the finest silk threads including Mulberry, Tussar, Eri, 
              and Muga varieties directly from their countries of origin. Each thread undergoes 
              rigorous quality testing to ensure it meets the highest standards of strength, 
              luster, and durability for professional weaving and embroidery applications.
            </p>

            {/* Enhanced Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">100% Pure Silk Guarantee</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Direct from Origin Countries</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Package className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Preorder System Available</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <Truck className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Bulk Orders Welcome</span>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop"
                alt="Premium Silk Thread Manufacturing"
                className="w-full h-80 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Professional Silk Thread Processing</h3>
                <p className="text-sm opacity-90">Quality control and precision handling</p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-silk-100 dark:bg-silk-900 rounded-full">
                      <stat.icon className="h-6 w-6 text-silk-600 dark:text-silk-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the world's most trusted importer and supplier of premium silk threads, 
              connecting artisans and manufacturers with the finest quality materials from 
              their countries of origin. We are committed to preserving the rich heritage 
              of silk craftsmanship while providing innovative solutions for modern applications. 
              Our mission is to ensure that every thread we import meets the highest standards 
              of quality, authenticity, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
