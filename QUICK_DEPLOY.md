# 🚀 Quick Deployment Guide

## Step 1: Push to GitHub (5 minutes)

1. **Create GitHub Repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name: `shri-ganpati-silk-website`
   - Make it public
   - Don't initialize with README

2. **Push Your Code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Shri Ganpati Silk Industries website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/shri-ganpati-silk-website.git
   git push -u origin main
   ```

## Step 2: Deploy Frontend to Vercel (3 minutes)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Click "Deploy"

3. **Get Your Frontend URL:**
   - Your site will be live at: `https://your-project.vercel.app`

## Step 3: Deploy Backend to Railway (5 minutes)

1. **Go to Railway:**
   - Visit [railway.app](https://railway.app)
   - Sign in with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - **IMPORTANT:** Set root directory to `backend`

3. **Add Environment Variables:**
   - Go to Variables tab
   - Add these variables:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shri-ganpati-silk
   JWT_SECRET=your-super-secret-jwt-key-here
   FRONTEND_URL=https://your-vercel-url.vercel.app
   ```

4. **Get Your Backend URL:**
   - Your API will be at: `https://your-project.railway.app`

## Step 4: Set up MongoDB Atlas (5 minutes)

1. **Create Account:**
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create free account

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose "FREE" tier
   - Create cluster

3. **Create Database User:**
   - Go to Database Access
   - Add new user
   - Username: `silkuser`
   - Password: Generate secure password
   - Database User Privileges: "Read and write to any database"

4. **Get Connection String:**
   - Go to Clusters
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your user password
   - Replace `<dbname>` with `shri-ganpati-silk`

5. **Update Railway:**
   - Go back to Railway
   - Update `MONGODB_URI` variable with your connection string

## Step 5: Update Frontend API URL (2 minutes)

1. **Go to Vercel:**
   - Go to your project settings
   - Environment Variables
   - Add: `VITE_API_URL` = `https://your-railway-url.railway.app`

2. **Redeploy:**
   - Go to Deployments
   - Click "Redeploy"

## ✅ You're Live!

Your website will be available at:
- **Frontend:** `https://your-project.vercel.app`
- **Backend API:** `https://your-project.railway.app/api/health`

## 🆘 Need Help?

If you get stuck:
1. Check the deployment logs
2. Verify environment variables
3. Make sure MongoDB connection string is correct
4. Ensure CORS is properly configured

## 📱 Test Your Deployment

1. **Frontend:** Visit your Vercel URL
2. **Backend:** Visit `https://your-railway-url.railway.app/api/health`
3. **Contact Form:** Test the contact form
4. **Database:** Check if data is being saved

---

**Total Time: ~20 minutes** ⏱️
