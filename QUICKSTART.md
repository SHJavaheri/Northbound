# Northbound Website - Quick Start Guide

Get the Northbound website up and running in 5 minutes.

## 🚀 Quick Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173/Northbound/
```

## 📦 What's Included

✅ **Cinematic Hero Section** with multi-layer parallax  
✅ **7 Content Sections** (About, Principles, Products, Philosophy, Future, Contact)  
✅ **Premium Animations** with Framer Motion  
✅ **Dark Modern Design** with Tailwind CSS  
✅ **Clipboard Email Copy** (no mailto links)  
✅ **Fully Responsive** design  
✅ **GitHub Pages Ready** deployment  

## 🎨 Adding Your Images

Replace placeholder images in `/public/images/`:

1. **parallax-bg.png** - Background layer (1920x1080px+)
2. **parallax-mid.png** - Middle layer (1920x1080px+)
3. **parallax-foreground.png** - Foreground layer (1920x1080px+)
4. **hero-device.png** - Optional device mockup
5. **grid.png** - Optional grid overlay
6. **noise.png** - Optional grain texture

## 🚢 Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

Then configure GitHub Pages:
- Settings → Pages → Source: `gh-pages` branch

Your site will be live at: `https://yourusername.github.io/Northbound/`

## 📝 Key Files

- `src/App.tsx` - Main app component
- `src/components/` - All section components
- `src/hooks/useParallax.ts` - Parallax scroll logic
- `vite.config.ts` - Build configuration (base path: `/Northbound/`)
- `tailwind.config.js` - Design system configuration

## 🎯 Next Steps

1. **Add Images** - Replace placeholders in `/public/images/`
2. **Customize Content** - Edit component text in `/src/components/`
3. **Test Build** - Run `npm run build` to verify
4. **Deploy** - Push to GitHub Pages

## 📚 Full Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guide

## 🆘 Need Help?

Email: northboundinc.hq@gmail.com

---

**The only way is up.**
