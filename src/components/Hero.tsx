import { ArrowRight, Star, Shield, Globe, Award, Package } from 'lucide-react';
import Office from '../assets/Office.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-silk-50 via-white to-gold-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Pattern - Silk Thread Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ed7c3f' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Silk Thread Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-silk-300 dark:via-silk-600 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 dark:via-gold-600 to-transparent opacity-30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-silk-300 dark:via-silk-600 to-transparent opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Mobile First */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-silk-100 dark:bg-silk-900 text-silk-700 dark:text-silk-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Shri Ganpati Silk Industries</span>
              <span className="sm:hidden">SG Silk Industries</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight">
              Premium <span className="text-silk-600 dark:text-silk-400">Silk Yarn</span><br />
              <span className="text-gold-600 dark:text-gold-400">Poly, Zari & Cotton</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We specialize in high-quality Silkyarn, Poly, Yarn, Zari, and Cottonyarn. 
              Located in Champa, Chhattisgarh, we provide premium textile materials 
              for weaving, embroidery, and manufacturing needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center group">
                Explore Our Collection
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Request Bulk Quote
              </button>
            </div>

            {/* Enhanced Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-2 bg-silk-100 dark:bg-silk-900 rounded-lg">
                  <Globe className="h-5 w-5 text-silk-600 dark:text-silk-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Direct Import</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">From Origin Countries</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 p-2 bg-gold-100 dark:bg-gold-900 rounded-lg">
                  <Award className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Premium Quality</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">A+ Grade Certified</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
                <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Bulk Orders</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Wholesale Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={Office}
                alt="Premium Silk Thread Collection"
                className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700"
              />
              
              {/* Enhanced Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gold-100 dark:bg-gold-900 rounded-lg">
                    <Star className="h-5 w-5 text-gold-600 dark:text-gold-400 fill-current" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">4.9/5</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Customer Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-silk-600 text-white p-4 rounded-xl shadow-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm opacity-90">Happy Customers</p>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Quality</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-gold-200 dark:bg-gold-800 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-10 -left-10 w-16 h-16 bg-silk-200 dark:bg-silk-800 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 -right-5 w-8 h-8 bg-silk-300 dark:bg-silk-700 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
