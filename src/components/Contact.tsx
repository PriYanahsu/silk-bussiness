import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactProps {
  onAddPreorder: (preorderData: any) => void;
}

const Contact: React.FC<ContactProps> = ({}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form submission - just show success message
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 7000018326', '+91 8817715710'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['singhpankaj445500@gmail.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Sitaram Gali, Manjhali Talab', 'Champa 495 671, Distt. Janjgir-Champa (Chhattisgarh)'],
      description: 'Visit our location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      description: 'We are here to help you'
    }
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Have questions about our products? Need help with a custom order? 
            We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 sm:p-3 bg-silk-100 dark:bg-silk-900 rounded-full">
                        <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-silk-600 dark:text-silk-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Embed - Mobile Optimized */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://maps.google.com/maps?q=Champa,+Chhattisgarh+495671&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Ganpati Silk Industries Location - Champa, Chhattisgarh"
                className="w-full h-48 sm:h-56 lg:h-64"
              ></iframe>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-silk-600 dark:text-silk-400" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sitaram Gali, Manjhali Talab, Champa, Chhattisgarh 495671
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Click on the map to open in Google Maps for directions
                </p>
                <div className="mt-2">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Sitaram+Gali+Manjhali+Talab+Champa+Chhattisgarh+495671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-silk-600 hover:text-silk-700 dark:text-silk-400 dark:hover:text-silk-300 transition-colors duration-200 touch-manipulation"
                  >
                    <MapPin className="h-3 w-3 mr-1" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              Send us a Message
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl p-6 sm:p-8 text-center">
                <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm sm:text-base text-green-700 dark:text-green-300">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-base"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="preorder">Preorder Inquiry</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent text-base"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent resize-none text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4 flex items-center justify-center space-x-2 touch-manipulation"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
