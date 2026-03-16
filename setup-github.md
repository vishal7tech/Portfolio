# GitHub Repository Setup Instructions

## Quick Setup Steps:

1. **Create Repository on GitHub**
   - Go to: https://github.com/new
   - Repository name: `portfolio`
   - Description: `My Portfolio Website`
   - Make it **Public**
   - Don't initialize with README, .gitignore, or license

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin master
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section
   - Source: **Deploy from a branch**
   - Branch: **master** → **/(root)**
   - Click **Save**

4. **Wait for Deployment**
   - GitHub Actions will build and deploy automatically
   - Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`
   - Takes 2-5 minutes for first deployment

## What's Already Configured:
- ✅ GitHub Actions workflow for auto-deployment
- ✅ Production build configuration
- ✅ Your formal photo included
- ✅ All portfolio features ready

## After Setup:
- Any push to master branch will auto-update your live site
- Check Actions tab for deployment status
- Your portfolio will be publicly accessible
