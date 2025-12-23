# Git Setup Script for Landing Page Project
# Run this script in PowerShell to initialize git and push to GitHub

Write-Host "Setting up Git repository..." -ForegroundColor Green

# Configure Git user
git config --global user.name "Tharuka Jayaweera"
git config --global user.email "rashmitharuka2004@gmail.com"

# Initialize git repository
Write-Host "Initializing git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Sri Lankan Tourism Website"

Write-Host "`nGit setup complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub named 'landing-page'" -ForegroundColor White
Write-Host "2. Run the following commands:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/TharukaJayaweera/landing-page.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow

