# Shri Ganpati Silk Industries - Full Stack Application

A complete full-stack web application for Shri Ganpati Silk Industries, featuring a modern React frontend and a robust Node.js backend API. This application provides comprehensive functionality for managing silk yarn products, processing orders, and handling customer inquiries.

## 🌟 Features

### 🎨 Frontend (React + TypeScript)
- **Modern Design**: Clean, responsive UI with custom fonts (Inter & Poppins)
- **Product Showcase**: Beautiful product gallery with filtering and search
- **Owner Dashboard**: Complete admin panel for product and order management
- **Customer Portal**: Order tracking and profile management
- **Contact System**: Integrated contact form with Google Maps
- **Dark Mode**: Toggle between light and dark themes
- **Mobile Responsive**: Optimized for all devices

### 🚀 Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete API for all business operations
- **Authentication**: JWT-based auth with role-based access control
- **Product Management**: CRUD operations with stock management
- **Order Processing**: Complete order lifecycle management
- **Contact Management**: Inquiry handling and response system
- **Database**: MongoDB with Mongoose ODM
- **Security**: Password hashing, input validation, CORS protection

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Google Fonts** (Inter & Poppins)

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <repository-url>
cd silk-website
npm run install:all
```

### 2. Environment Setup
```bash
# Copy backend environment file
cp backend/env.example backend/.env

# Edit backend/.env with your configuration
```

### 3. Database Setup
```bash
# Start MongoDB (if running locally)
# Then seed the database
npm run seed
```

### 4. Start Development
```bash
# Start both frontend and backend
npm run dev

# Or start individually:
npm run dev:frontend  # Frontend on http://localhost:5173
npm run dev:backend   # Backend on http://localhost:5000
```

## 🔑 Default Login Credentials

After seeding the database:

**Owner Account:**
- Email: `owner@shriganpatisilk.com`
- Password: `owner123`

**Customer Account:**
- Email: `customer1@example.com`
- Password: `customer123`

## 📁 Project Structure

```
silk-website/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── contexts/          # React contexts
│   ├── types/             # TypeScript type definitions
│   └── assets/            # Static assets
├── backend/               # Backend Node.js application
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Express middleware
│   └── server.js          # Main server file
├── dist/                  # Built frontend (production)
└── package.json           # Root package.json
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Owner)
- `PUT /api/products/:id` - Update product (Owner)
- `DELETE /api/products/:id` - Delete product (Owner)

### Orders
- `POST /api/orders` - Create order (Customer)
- `GET /api/orders/my-orders` - Get user orders (Customer)
- `GET /api/orders` - Get all orders (Owner)
- `PATCH /api/orders/:id/status` - Update order status (Owner)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (Owner)
- `POST /api/contact/:id/respond` - Respond to contact (Owner)

## 🚀 Deployment

### Frontend Deployment (Render/Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables for API URL

### Backend Deployment (Railway/Heroku/DigitalOcean)
1. Set up MongoDB (MongoDB Atlas recommended)
2. Configure environment variables
3. Deploy the backend code
4. Run database seeding

### Full-Stack Deployment
1. Deploy backend first
2. Update frontend API URLs
3. Deploy frontend
4. Configure domain and SSL

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
FRONTEND_URL=https://your-frontend-domain.com
```

### Frontend (Vite)
```env
VITE_API_URL=https://your-backend-domain.com/api
```

## 📊 Business Features

### Product Management
- **Categories**: Silkyarn, Poly, Yarn, Zari, Cottonyarn
- **Stock Tracking**: Real-time inventory management
- **Quality Ratings**: A+, A, B+, B quality grades
- **Featured Products**: Highlight special items
- **Search & Filter**: Advanced product discovery

### Order Management
- **Order Processing**: Complete order lifecycle
- **Status Tracking**: Pending → Confirmed → Processing → Shipped → Delivered
- **Stock Updates**: Automatic inventory management
- **Order History**: Customer order tracking

### Contact Management
- **Inquiry Types**: General, Product, Bulk, Preorder, Custom
- **Response System**: Owner can respond to inquiries
- **Status Tracking**: New → Read → Replied → Closed
- **Assignment**: Assign inquiries to team members

## 🎨 Customization

### Fonts
The application uses modern sans-serif fonts:
- **Inter**: Primary font for body text
- **Poppins**: Display font for headings
- **System fonts**: Fallback fonts

### Colors
Custom color palette:
- **Silk Colors**: Orange/amber tones (#ed7c3f)
- **Gold Colors**: Yellow/gold accents (#f59e0b)
- **Neutral Grays**: Text and backgrounds

### Business Information
All business details are configured:
- **Company**: Shri Ganpati Silk Industries
- **Owner**: Pankaj Kumar Singh
- **Contact**: +91 7000018326, +91 8817715710
- **Email**: singhpankaj445500@gmail.com
- **Address**: Sitaram Gali, Manjhali Talab, Champa, Chhattisgarh 495671
- **GSTIN**: 22BZMPS6779J1ZI

## 🔒 Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Role-Based Access**: Owner/Customer permissions
- **Input Validation**: Server-side validation
- **CORS Protection**: Configured for production
- **Environment Variables**: Sensitive data protection

## 📱 Mobile Responsiveness

- **Responsive Design**: Works on all screen sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Loading**: Optimized images and code splitting
- **PWA Ready**: Can be converted to Progressive Web App

## 🧪 Testing

```bash
# Run frontend tests
npm run test

# Run backend tests
cd backend && npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions:
- **Email**: singhpankaj445500@gmail.com
- **Phone**: +91 7000018326, +91 8817715710
- **Address**: Sitaram Gali, Manjhali Talab, Champa, Chhattisgarh 495671

## 🎯 Future Enhancements

- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Inventory forecasting
- [ ] Customer reviews system
- [ ] Loyalty program

---

Built with ❤️ for Shri Ganpati Silk Industries

**Ready for production deployment and client delivery!**