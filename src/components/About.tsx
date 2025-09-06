import { Award, Users, Globe, Package, Shield, Truck } from 'lucide-react';
import Pankaj from '../assets/Owner.jpg';
import godown from '../assets/godown.png';

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
              Shri Ganpati Silk Industries
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
              About <span className="text-silk-600 dark:text-silk-400">Shri Ganpati Silk Industries</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Shri Ganpati Silk Industries, led by Pankaj Kumar Singh, is a trusted name in the 
              textile industry. We specialize in providing high-quality Silkyarn, Poly, Yarn, 
              Zari, and Cottonyarn to meet the diverse needs of our customers. Our commitment 
              to quality and customer satisfaction has made us a preferred choice in Champa, 
              Chhattisgarh and beyond.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Located in Sitaram Gali, Manjhali Talab, Champa, we serve customers across 
              Chhattisgarh and neighboring regions. Our product range includes premium quality 
              Silkyarn for traditional weaving, Poly yarn for modern applications, decorative 
              Zari for embellishments, and Cottonyarn for various textile needs. Each product 
              is carefully selected to ensure superior quality and durability.
            </p>
            
            <div className="bg-silk-50 dark:bg-silk-900 p-4 rounded-lg border border-silk-200 dark:border-silk-700 mb-8">
              <p className="text-sm font-semibold text-silk-700 dark:text-silk-300 mb-1">
                GSTIN: 22BZMPS6779J1ZI
              </p>
              <p className="text-xs text-silk-600 dark:text-silk-400">
                Registered under GST for transparent business transactions
              </p>
            </div>

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
                src={godown}
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

        {/* Owner Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Owner Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={Pankaj}
                      alt="Pankaj Kumar Singh - Owner of Shri Ganpati Silk Industries"
                      className="w-80 h-96 object-cover rounded-xl shadow-lg border-4 border-silk-200 dark:border-silk-700"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-silk-600 text-white p-3 rounded-full shadow-lg">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                {/* Owner Information */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Pankaj Kumar Singh
                    </h3>
                    <p className="text-xl text-silk-600 dark:text-silk-400 font-semibold mb-4">
                      Owner & Founder
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      With years of experience in the textile industry, Pankaj Kumar Singh has built 
                      Shri Ganpati Silk Industries into a trusted name for quality yarn and textile 
                      materials. His commitment to excellence and customer satisfaction drives the 
                      company's success in serving customers across Chhattisgarh and beyond.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-silk-100 dark:bg-silk-900 rounded-lg">
                        <Users className="h-5 w-5 text-silk-600 dark:text-silk-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Experienced Business Leader</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gold-100 dark:bg-gold-900 rounded-lg">
                        <Award className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Quality Assurance Expert</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Trusted by Local Community</span>
                    </div>
                  </div>
                </div>
              </div>
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
              To be the most trusted supplier of premium textile materials in Chhattisgarh, 
              providing high-quality Silkyarn, Poly, Yarn, Zari, and Cottonyarn to meet 
              the diverse needs of our customers. We are committed to maintaining the highest 
              standards of quality, authenticity, and customer service while supporting the 
              local textile industry and preserving traditional craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
