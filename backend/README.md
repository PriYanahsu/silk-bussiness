# Shri Ganpati Silk Industries - Backend API

A robust Node.js/Express backend API for Shri Ganpati Silk Industries, providing complete functionality for product management, order processing, user authentication, and contact management.

## 🚀 Features

### 🔐 Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (Owner/Customer)
- Profile management

### 📦 Product Management
- CRUD operations for products
- Product categories (Silkyarn, Poly, Yarn, Zari, Cottonyarn)
- Stock management
- Product search and filtering
- Featured products

### 🛒 Order Management
- Order creation and processing
- Order status tracking
- Stock updates on order
- Order history for customers
- Order management for owners

### 📞 Contact Management
- Contact form submissions
- Inquiry management
- Response tracking
- Assignment system

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **Validation**: Mongoose schema validation

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🚀 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/shri-ganpatisilk
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:5173
   ```

3. **Start MongoDB**
   - Local: Make sure MongoDB is running on your system
   - Cloud: Use MongoDB Atlas connection string

4. **Seed Database** (Optional)
   ```bash
   npm run seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Start Production Server**
   ```bash
   npm start
   ```

## 📚 API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /me` - Get current user
- `PUT /profile` - Update user profile

### Products (`/api/products`)
- `GET /` - Get all products (with filtering)
- `GET /:id` - Get single product
- `GET /categories/list` - Get product categories
- `POST /` - Create product (Owner only)
- `PUT /:id` - Update product (Owner only)
- `DELETE /:id` - Delete product (Owner only)
- `PATCH /:id/toggle` - Toggle product status (Owner only)

### Orders (`/api/orders`)
- `POST /` - Create order (Customer only)
- `GET /my-orders` - Get user orders (Customer only)
- `GET /:id` - Get single order
- `GET /` - Get all orders (Owner only)
- `PATCH /:id/status` - Update order status (Owner only)
- `PATCH /:id/cancel` - Cancel order (Customer only)

### Contact (`/api/contact`)
- `POST /` - Submit contact form (Public)
- `GET /` - Get all contacts (Owner only)
- `GET /:id` - Get single contact (Owner only)
- `PATCH /:id/status` - Update contact status (Owner only)
- `POST /:id/respond` - Respond to contact (Owner only)
- `PATCH /:id/assign` - Assign contact (Owner only)
- `GET /stats/overview` - Get contact statistics (Owner only)

## 🔑 Default Login Credentials

After running the seed script:

**Owner Account:**
- Email: `owner@shriganpatisilk.com`
- Password: `owner123`

**Customer Account:**
- Email: `customer1@example.com`
- Password: `customer123`

## 🗄️ Database Schema

### User Model
- Authentication fields (username, email, password)
- Role-based access (owner/customer)
- Profile information
- Activity tracking

### Product Model
- Product details (name, description, price)
- Category and specifications
- Stock management
- Quality ratings and reviews

### Order Model
- Order items and quantities
- Customer information
- Shipping details
- Status tracking
- Payment information

### Contact Model
- Contact form data
- Inquiry management
- Response tracking
- Assignment system

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Role-based access control
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
FRONTEND_URL=https://your-frontend-domain.com
```

### Deployment Platforms
- **Heroku**: Easy deployment with MongoDB Atlas
- **Railway**: Modern deployment platform
- **DigitalOcean**: VPS deployment
- **AWS**: EC2 or Elastic Beanstalk

## 📊 Monitoring & Logging

- Health check endpoint: `GET /api/health`
- Error handling middleware
- Request logging
- Database connection monitoring

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
- Email: singhpankaj445500@gmail.com
- Phone: +91 7000018326
- Address: Sitaram Gali, Manjhali Talab, Champa, Chhattisgarh 495671

---

Built with ❤️ for Shri Ganpati Silk Industries
