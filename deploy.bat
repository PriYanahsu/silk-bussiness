@echo off
echo 🚀 Starting deployment process...

echo 📦 Building frontend...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Frontend build successful!
    echo 📁 Build files created in ./dist/
    echo.
    echo 🎯 Next steps:
    echo 1. Push your code to GitHub
    echo 2. Deploy frontend to Vercel
    echo 3. Deploy backend to Railway
    echo 4. Set up MongoDB Atlas
    echo 5. Configure environment variables
    echo.
    echo 📖 See DEPLOYMENT.md for detailed instructions
) else (
    echo ❌ Frontend build failed!
    exit /b 1
)
