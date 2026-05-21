# SSL Wireless Corporate Website

A modern, enterprise-grade corporate website built with Next.js, TypeScript, and Tailwind CSS. Features premium animations, smooth parallax effects, and a sophisticated pinned stacked scroll section for product storytelling.

## Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Premium Animations**: Framer Motion for smooth, professional animations
- **Parallax Effects**: Subtle depth and movement throughout the site
- **Pinned Stacked Scroll**: Unique product section with scroll-driven transitions
- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: Respects reduced-motion preferences
- **Performance Optimized**: Smooth 60fps animations with optimized rendering

## Sections

1. **Header**: Fixed navigation with smooth fade-in
2. **Hero**: Animated headline with parallax image effects and floating stat cards
3. **Clients**: Staggered logo reveals
4. **Approach**: Sequential card animations with hover effects
5. **Services**: Dark background with accordion interactions and parallax patterns
6. **Products**: Pinned stacked scroll section with scroll-driven transitions
7. **Testimonials**: Auto-rotating carousel with pause on hover
8. **Footer**: Minimal fade-in animation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Animation Philosophy

All animations follow these principles:

- **Soft & Professional**: No aggressive motion or jarring transitions
- **Performance-Friendly**: Optimized for 60fps on all devices
- **Accessible**: Respects `prefers-reduced-motion` media query
- **Purposeful**: Animations enhance clarity, never distract
- **Smooth Easing**: Custom easing curves for natural motion

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    blue: '#1e3a8a',
    dark: '#0f172a',
  },
  accent: {
    pink: '#ec4899',
    orange: '#f97316',
  },
}
```

### Content

All content is defined in component files. Edit the respective component to update:

- Hero section: `components/Hero.tsx`
- Services: `components/Services.tsx`
- Products: `components/Products.tsx`
- Testimonials: `components/Testimonials.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:

- Code splitting via Next.js
- Optimized animations with Framer Motion
- Lazy loading for images
- Efficient scroll listeners

## License

© 2023 SSL Wireless. All rights reserved.
# sslwireless
# ssl-website
# ssl-website
