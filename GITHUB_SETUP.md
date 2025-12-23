# GitHub Repository Setup Instructions

Follow these steps to create and push your landing page project to GitHub.

## Prerequisites

1. Install Git if not already installed: https://git-scm.com/download/win
2. Create a GitHub account (if you don't have one): https://github.com/signup

## Step 1: Configure Git (First Time Only)

Open PowerShell or Command Prompt in the project directory and run:

```bash
git config --global user.name "Tharuka Jayaweera"
git config --global user.email "rashmitharuka2004@gmail.com"
```

## Step 2: Initialize Git Repository

```bash
git init
```

## Step 3: Add All Files

```bash
git add .
```

## Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Sri Lankan Tourism Website"
```

## Step 5: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `landing-page`
3. Description: `Sri Lankan Tourism Website - Beautiful landing page with destinations, attractions, tour packages, and testimonials`
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 6: Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands:

```bash
git remote add origin https://github.com/TharukaJayaweera/landing-page.git
git branch -M main
git push -u origin main
```

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create landing-page --public --source=. --remote=origin --push
```

## Troubleshooting

### If you get authentication errors:
1. Use a Personal Access Token instead of password
2. Generate token at: https://github.com/settings/tokens
3. Use the token as password when prompted

### If git is not recognized:
1. Install Git from: https://git-scm.com/download/win
2. Restart your terminal after installation
3. Verify installation: `git --version`

## Quick Setup Script

You can also run the provided PowerShell script:

```powershell
.\setup-git.ps1
```

Then follow steps 5-6 above.

---

**Repository will be available at:**
https://github.com/TharukaJayaweera/landing-page

