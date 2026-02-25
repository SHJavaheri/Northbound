# Northbound Inc. - Official Website

A premium, cinematic one-page marketing website for Northbound Inc., built with modern web technologies and Apple-level design polish.

## Overview

This is the official public-facing website for **Northbound Inc.**, a parent technology company building software platforms designed to solve real problems and create meaningful impact across industries.

**Slogan:** The only way is up.

## Features

- **Cinematic Parallax Scrolling** - Multi-layer parallax effects creating dramatic spatial depth
- **Premium Animations** - 60fps GPU-accelerated animations with Framer Motion
- **Dark, Modern Aesthetic** - Deep blacks, crisp whites, and subtle gradients
- **Scroll-Triggered Reveals** - Smooth, progressive content animations
- **Clipboard Email Copy** - Modern contact interaction (no mailto links)
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Accessibility** - Respects `prefers-reduced-motion` settings
- **GitHub Pages Ready** - Configured for seamless deployment

## Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animation library
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
northbound-website/
├── public/
│   └── images/              # Parallax image assets (placeholders)
│       ├── parallax-bg.png
│       ├── parallax-mid.png
│       ├── parallax-foreground.png
│       ├── hero-device.png
│       ├── grid.png
│       └── noise.png
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── WhatIsNorthbound.tsx
│   │   ├── Principles.tsx
│   │   ├── Products.tsx
│   │   ├── BuildPhilosophy.tsx
│   │   ├── FutureScope.tsx
│   │   ├── Contact.tsx
│   │   └── ParallaxLayer.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useParallax.ts
│   │   └── useScrollAnimation.ts
│   ├── utils/               # Utility functions
│   │   └── clipboard.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts           # Vite configuration (GitHub Pages base path)
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20.9.0 or higher
- npm 10.1.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Northbound.git
cd Northbound
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build the project (alias for `npm run build`)

## Image Assets

The `/public/images/` directory contains placeholder references for parallax layers. Replace these with your actual image assets:

### Required Images

1. **parallax-bg.png** - Furthest background layer
   - Movement: 0.2x scroll speed (slowest)
   - Recommended size: 1920x1080px or larger
   - Format: PNG or WebP

2. **parallax-mid.png** - Middle depth layer
   - Movement: 0.5x scroll speed
   - Recommended size: 1920x1080px or larger
   - Format: PNG or WebP

3. **parallax-foreground.png** - Closest layer
   - Movement: 0.8x scroll speed (fastest)
   - Recommended size: 1920x1080px or larger
   - Format: PNG or WebP

4. **hero-device.png** (Optional) - Central focal object
   - Recommended size: 800x600px or larger
   - Format: PNG with transparency

5. **grid.png** (Optional) - Subtle grid overlay
   - Recommended: Subtle, low-opacity pattern
   - Format: PNG with transparency

6. **noise.png** (Optional) - Grain texture
   - Recommended: Low-opacity noise texture
   - Format: PNG with transparency

### Image Optimization Tips

- Use WebP format for better compression
- Optimize images before adding (use tools like TinyPNG, ImageOptim)
- Keep file sizes reasonable for web performance
- Use appropriate dimensions (no need for 4K images)

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment with the repository name `Northbound`.

### Setup

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Northbound website"
   git branch -M main
   git remote add origin https://github.com/yourusername/Northbound.git
   git push -u origin main
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**

   **Option A: Using gh-pages branch (Recommended)**
   
   Install gh-pages package:
   ```bash
   npm install -D gh-pages
   ```
   
   Add to package.json scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   
   Deploy:
   ```bash
   npm run deploy
   ```

   **Option B: Manual deployment**
   
   1. Build the project: `npm run build`
   2. Push the `dist` folder to a `gh-pages` branch
   3. Configure GitHub Pages to serve from `gh-pages` branch

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

5. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/Northbound/`

### Important Notes

- The `base` path in `vite.config.ts` is set to `/Northbound/` for GitHub Pages
- If you rename the repository, update the `base` path accordingly
- The build output is in the `dist` folder (not tracked in git)

## Contact Information

**Email:** northboundinc.hq@gmail.com

Click the email button on the website to copy the address to your clipboard.

## Design Philosophy

This website embodies Northbound's core principles:

- **Quality Over Speed** - Every detail is crafted with care
- **User-Centric Design** - Focused on experience and usability
- **Sustainable Growth** - Built to last and evolve
- **Transparency & Trust** - Clear, honest communication

## Performance

- **60fps animations** - GPU-accelerated transforms
- **Optimized bundle** - Code splitting and tree shaking
- **Lazy loading** - Images load on demand
- **Accessibility** - Respects user motion preferences

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Northbound Inc. All rights reserved.

---

**The only way is up.**
