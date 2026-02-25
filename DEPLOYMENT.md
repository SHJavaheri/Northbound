# GitHub Pages Deployment Guide

Complete guide for deploying the Northbound website to GitHub Pages.

## Prerequisites

- Git installed on your system
- GitHub account
- Repository named `Northbound` (or update `vite.config.ts` base path)

## Quick Deployment (Recommended Method)

### Step 1: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Northbound website"
git branch -M main
```

### Step 4: Add GitHub Remote

Replace `yourusername` with your GitHub username:

```bash
git remote add origin https://github.com/yourusername/Northbound.git
git push -u origin main
```

### Step 5: Deploy

```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the `dist` folder to the `gh-pages` branch

### Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 7: Access Your Site

Your site will be live at:
```
https://yourusername.github.io/Northbound/
```

It may take a few minutes for the site to go live after the first deployment.

## Manual Deployment Method

If you prefer not to use the gh-pages package:

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Create gh-pages Branch

```bash
git checkout --orphan gh-pages
```

### Step 3: Remove All Files Except dist

```bash
git rm -rf .
```

### Step 4: Copy dist Contents to Root

```bash
cp -r dist/* .
rm -rf dist
```

### Step 5: Commit and Push

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Step 6: Switch Back to Main

```bash
git checkout main
```

## Updating the Site

After making changes:

### Using gh-pages Package

```bash
npm run deploy
```

### Manual Method

1. Switch to main branch: `git checkout main`
2. Make your changes
3. Commit: `git add . && git commit -m "Update site"`
4. Push to main: `git push origin main`
5. Repeat manual deployment steps above

## Troubleshooting

### Site Not Loading / 404 Error

**Problem:** Assets not loading or 404 errors

**Solution:** Check that the `base` path in `vite.config.ts` matches your repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Northbound/', // Must match repository name
})
```

### CSS Not Loading

**Problem:** Styles not appearing

**Solution:** 
1. Ensure Tailwind CSS is properly configured
2. Check that `postcss.config.js` exists
3. Rebuild: `npm run build`

### Images Not Showing

**Problem:** Images in `/public/images/` not displaying

**Solution:**
1. Ensure images are in `/public/images/` directory
2. Reference them as `/Northbound/images/filename.png` in production
3. Or use relative paths that Vite will resolve

### Build Fails

**Problem:** `npm run build` fails

**Solution:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Try building again

### GitHub Pages Not Updating

**Problem:** Changes not reflecting on live site

**Solution:**
1. Clear browser cache
2. Wait 5-10 minutes for GitHub Pages to rebuild
3. Check GitHub Actions tab for build status
4. Verify `gh-pages` branch has latest changes

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `/public/` with your domain:
   ```
   www.northboundinc.com
   ```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`

3. In GitHub repository settings:
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Environment-Specific Configuration

The site is configured to work on both localhost and GitHub Pages:

- **Development:** `http://localhost:5173`
- **Production:** `https://yourusername.github.io/Northbound/`

The `base` path in `vite.config.ts` handles this automatically.

## Continuous Deployment with GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This will automatically deploy to GitHub Pages on every push to main.

## Verification Checklist

Before deploying, verify:

- [ ] All images are optimized and in `/public/images/`
- [ ] Build completes without errors: `npm run build`
- [ ] Preview works locally: `npm run preview`
- [ ] Email copy functionality works
- [ ] All sections scroll smoothly
- [ ] Animations are smooth (60fps)
- [ ] Mobile responsive design works
- [ ] `base` path in `vite.config.ts` is correct

## Support

For issues or questions:
- Email: northboundinc.hq@gmail.com
- Check GitHub repository issues
- Review Vite documentation: https://vitejs.dev/

---

**The only way is up.**
