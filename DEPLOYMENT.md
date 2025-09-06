# 🚀 Deployment Guide - Shri Ganpati Silk Industries

This guide will help you deploy your full-stack application to production.

## 📋 Prerequisites

- GitHub account
- Vercel account (for frontend)
- Railway account (for backend)
- MongoDB Atlas account (for database)

## 🎯 Deployment Architecture

```
Frontend (Vercel) → Backend (Railway) → Database (MongoDB Atlas)
```

## 🖥️ Frontend Deployment (Vercel)

### Step 1: Prepare Frontend
1. Ensure your code is pushed to GitHub
2. The `vercel.json` configuration is already created

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

### Step 3: Configure Environment Variables
In Vercel dashboard:
- Go to your project → Settings → Environment Variables
- Add: `VITE_API_URL` = `https://your-backend-url.railway.app`

## 🔧 Backend Deployment (Railway)

### Step 1: Prepare Backend
1. Ensure your backend code is in the `backend/` folder
2. The `railway.json` configuration is already created

### Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Select the `backend` folder as the root directory
7. Click "Deploy"

### Step 3: Configure Environment Variables
In Railway dashboard:
- Go to your project → Variables
- Add these variables:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shri-ganpati-silk
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
FRONTEND_URL=https://your-frontend-url.vercel.app
COMPANY_NAME=Shri Ganpati Silk Industries
COMPANY_EMAIL=singhpankaj445500@gmail.com
COMPANY_PHONE=+91 7000018326
COMPANY_ADDRESS=Sitaram Gali, Manjhali Talab, Champa 495671, Distt. Janjgir-Champa (Chhattisgarh)
GSTIN=22BZMPS6779J1ZI
```

## 🗄️ Database Setup (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free account
3. Create a new cluster

### Step 2: Configure Database
1. Create a database named `shri-ganpati-silk`
2. Create a user with read/write permissions
3. Get the connection string
4. Add the connection string to Railway environment variables

## 🔄 Update Frontend API URL

After backend deployment:
1. Get your Railway backend URL
2. Update the `VITE_API_URL` in Vercel environment variables
3. Redeploy the frontend

## ✅ Testing Deployment

### Frontend
- Visit your Vercel URL
- Check if the website loads correctly
- Test navigation and styling

### Backend
- Visit `https://your-backend-url.railway.app/api/health`
- Should return: `{"status":"OK","message":"Shri Ganpati Silk Industries API is running"}`

### Full Stack
- Test contact form submission
- Check if data is saved to database
- Verify all features work

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Ensure `FRONTEND_URL` in backend matches your Vercel URL

2. **Database Connection**
   - Check MongoDB Atlas connection string
   - Ensure IP whitelist includes Railway IPs

3. **Build Failures**
   - Check build logs in deployment platform
   - Ensure all dependencies are in package.json

4. **Environment Variables**
   - Double-check all required variables are set
   - Ensure no typos in variable names

## 📱 Custom Domain (Optional)

### Vercel Custom Domain
1. Go to Vercel project settings
2. Add your custom domain
3. Update DNS records as instructed

### Railway Custom Domain
1. Go to Railway project settings
2. Add custom domain
3. Update DNS records

## 🔒 Security Checklist

- [ ] Strong JWT secret
- [ ] MongoDB user with limited permissions
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] HTTPS enabled (automatic on Vercel/Railway)

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics available
- Monitor performance and usage

### Railway Logs
- Check application logs
- Monitor resource usage

## 🎉 Success!

Once deployed, your website will be live at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-project.railway.app`
- **API Health**: `https://your-project.railway.app/api/health`

## 📞 Support

If you encounter any issues:
1. Check the deployment logs
2. Verify environment variables
3. Test locally first
4. Check this guide for common solutions

---

**Happy Deploying! 🚀**
