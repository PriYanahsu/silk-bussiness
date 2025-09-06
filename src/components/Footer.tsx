import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    products: [
      { name: 'Silkyarn', href: '#products' },
      { name: 'Poly Yarn', href: '#products' },
      { name: 'Zari', href: '#products' },
      { name: 'Cottonyarn', href: '#products' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-silk-400 mb-4">
              Shri Ganpati Silk Industries
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Shri Ganpati Silk Industries specializes in high-quality Silkyarn, Poly, Yarn, 
              Zari, and Cottonyarn. Located in Champa, Chhattisgarh, we provide premium 
              textile materials for all your weaving and manufacturing needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-silk-400" />
                <span className="text-gray-300 dark:text-gray-400">+91 7000018326</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-silk-400" />
                <span className="text-gray-300 dark:text-gray-400">+91 8817715710</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-silk-400" />
                <span className="text-gray-300 dark:text-gray-400">singhpankaj445500@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-silk-400" />
                <span className="text-gray-300 dark:text-gray-400">Sitaram Gali, Manjhali Talab, Champa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 dark:bg-gray-700 hover:bg-silk-600 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-silk-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-silk-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-silk-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-silk-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest silk collections and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-silk-600 hover:bg-silk-700 text-white rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Shri Ganpati Silk Industries. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
