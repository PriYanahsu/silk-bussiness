# Silk Elegance - Premium Silk Business Website

A modern, responsive e-commerce website for a silk business built with React, TypeScript, Vite, and Tailwind CSS.

## Features

### 🛍️ Product Management
- **Product Gallery**: Beautiful grid and list view of silk products
- **Stock Management**: Visual indicators for in-stock/out-of-stock products
- **Product Filtering**: Filter by category, color, price range, and availability
- **Product Details**: Comprehensive product information with images, ratings, and reviews

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, elegant design with silk-themed color palette
- **Interactive Elements**: Smooth animations and hover effects
- **Accessibility**: WCAG compliant with proper focus management

### 📱 Key Components
- **Header**: Navigation with search, cart, and mobile menu
- **Hero Section**: Eye-catching landing area with call-to-action
- **Product Gallery**: Filterable product showcase with grid/list views
- **About Section**: Company information and statistics
- **Contact Form**: Multi-purpose contact form with inquiry types
- **Footer**: Comprehensive footer with links and newsletter signup

### 🛒 E-commerce Features
- **Shopping Cart**: Add/remove products with quantity management
- **Product Categories**: Sarees, Dresses, Scarves, Fabrics, Accessories
- **Stock Status**: Real-time stock availability with visual indicators
- **Wishlist**: Save favorite products for later
- **Product Search**: Search functionality across all products

### 📞 Business Features
- **Contact Form**: Multiple inquiry types (General, Product, Bulk, Custom)
- **Business Information**: Contact details, hours, and location
- **Social Media Integration**: Links to social platforms
- **Newsletter Signup**: Email subscription for updates

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Type Safety**: Full TypeScript implementation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd silk-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── ProductGallery.tsx # Product showcase
│   ├── ProductCard.tsx # Individual product card
│   ├── ProductFilter.tsx # Product filtering
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── types/              # TypeScript type definitions
│   └── index.ts        # Main types
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Silk Colors**: Various shades of silk-inspired colors
- **Gold Accents**: Gold colors for highlights and CTAs
- **Neutral Grays**: For text and backgrounds

### Products
Add your products by modifying the `sampleProducts` array in `App.tsx` or connect to a backend API.

### Contact Information
Update contact details in the `Contact.tsx` component and `Footer.tsx`.

## Production Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized images with proper sizing
- **Lazy Loading**: Components load as needed
- **Minification**: Production builds are minified
- **Tree Shaking**: Unused code is eliminated

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@silk-elegance.com
- Phone: +91 98765 43210

---

Built with ❤️ for the silk business community