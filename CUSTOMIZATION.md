# Handwritten Journal Website Customization Guide

Your personal website now features a beautiful **handwritten journal aesthetic** with highlighter accents that look like real marker highlights on paper! ✍️

## 🎨 Handwritten Journal Features

✨ **White background** just like real paper  
✨ **Handwritten fonts** (Kalam, Caveat, Patrick Hand)  
✨ **Highlighter accents** in 4 colors (yellow, pink, green, blue)  
✨ **Rough Notation effects** for hand-drawn annotations  
✨ **Notebook-style lines** as background texture  
✨ **Sketchy borders and doodles** throughout the design  
✨ **Animated hover effects** that mimic paper movement  
✨ **Mobile responsive** with adapted handwritten feel  

## 🖊️ Highlighter Color Palette

- **Yellow** (`#ffeb3b`) - Primary highlights
- **Pink** (`#ff4081`) - Important accents
- **Green** (`#4caf50`) - Success/positive elements  
- **Blue** (`#2196f3`) - Links and interactive elements

## 🎯 Quick Setup

### 1. Update Your Information
Edit `src/config.ts`:
```typescript
export const SITE = {
  website: "https://your-domain.com/",
  author: "Your Name",
  profile: "https://your-website.com/",
  desc: "A handwritten digital journal with highlighter accents - thoughts, stories, and musings in a personal touch.",
  title: "Your Handwritten Journal",
  // ... other settings
};
```

### 2. Configure Your Substack Feed
In `src/pages/index.astro`, replace:
```typescript
const SUBSTACK_FEED_URL = "https://YOUR_SUBSTACK.substack.com/feed";
```
With your actual Substack URL.

### 3. Update Social Links
In `src/components/Sidebar.astro`, update the three social links:
- **Long Thoughts**: `https://YOUR_SUBSTACK.substack.com`
- **Twitter**: `https://twitter.com/YOUR_TWITTER`
- **Email**: `mailto:your.email@example.com`

### 4. Add Your Profile Picture
Replace `public/profile-placeholder.svg` with your actual profile photo. The current placeholder shows a hand-drawn style with highlighter accents.

### 5. Customize Your Bio
Edit the bio text in `src/components/Sidebar.astro`. You can add highlighter effects:
```html
<p class="handwritten-body text-foreground/90">
  Welcome to my <span class="highlight-green">corner of the internet!</span> 
  I write about <span class="highlight-blue">technology and life.</span>
</p>
```

## 🚀 Running the Site

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## ✍️ Handwritten Styling Classes

### Font Families
- `.handwritten-title` - Caveat font for headings
- `.handwritten-body` - Kalam font for body text
- `.handwritten-accent` - Patrick Hand font for accents

### Highlighter Effects
```html
<span class="highlight-yellow">Yellow highlight</span>
<span class="highlight-pink">Pink highlight</span>
<span class="highlight-green">Green highlight</span>
<span class="highlight-blue">Blue highlight</span>
```

### Paper Elements
- `.paper-card` - Card styling with shadows and hover effects
- `.paper-sidebar` - Sidebar with notebook styling
- `.sketchy-border` - Hand-drawn border effect

## 🎨 Rough Notation Effects

The site uses [Rough Notation](https://roughnotation.com/) for hand-drawn effects:

- **Highlight**: Main title gets a yellow highlight animation
- **Underline**: Article titles get blue underlines on scroll
- **Circle**: Read more buttons get green circles on hover

### Adding More Annotations
```javascript
import { annotate } from 'rough-notation';

const element = document.querySelector('#my-element');
const annotation = annotate(element, {
  type: 'highlight',
  color: '#ffeb3b',
  animationDuration: 1000
});
annotation.show();
```

## 🔧 Advanced Customization

### Change Highlighter Colors
Edit `src/styles/global.css`:
```css
:root {
  --accent-yellow: #your-yellow;
  --accent-pink: #your-pink;
  --accent-green: #your-green;
  --accent-blue: #your-blue;
}
```

### Add New Handwritten Fonts
Add to the Google Fonts import in `src/styles/global.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Customize Paper Background
Modify the notebook lines in `src/styles/global.css`:
```css
body {
  background-image: 
    /* Margin line */
    linear-gradient(90deg, transparent 79px, #e0e0e0 80px, #e0e0e0 81px, transparent 82px),
    /* Horizontal lines */
    repeating-linear-gradient(transparent, transparent 24px, #e8f4fd 25px);
}
```

### Create Custom Doodles
Add SVG doodles to components:
```html
<svg width="40" height="40" viewBox="0 0 40 40" class="opacity-30">
  <path d="M10 20 Q20 10 30 20 Q20 30 10 20" 
        stroke="#ffeb3b" 
        stroke-width="2" 
        fill="none"/>
</svg>
```

## 📱 Mobile Experience

The handwritten design adapts beautifully to mobile:
- **Sidebar becomes top section** with adjusted styling
- **Touch-friendly buttons** with proper spacing
- **Readable fonts** optimized for small screens
- **Hover effects** adapted for touch devices

## 🌟 Interactive Features

### Hover Animations
- Cards rotate slightly on hover for organic feel
- Buttons lift and change colors
- Random rotation variations for natural look

### Scroll Animations
- Rough notation effects trigger on scroll
- Staggered animations for multiple elements
- Smooth transitions throughout

### Typewriter Effect
- No posts message types out character by character
- Variable speed for authentic handwritten feel

## 📦 Deployment

This site is Vercel-ready! The handwritten effects are client-side, keeping the site fast and static.

1. Push to GitHub
2. Connect to Vercel  
3. Deploy automatically

## 🆘 Troubleshooting

- **RSS not loading**: Check your Substack URL ends with `/feed`
- **Fonts not loading**: Verify Google Fonts import in global.css
- **Animations not working**: Check that rough-notation is properly installed
- **Mobile layout issues**: Test responsive classes and mobile media queries
- **Highlighter effects missing**: Ensure CSS custom properties are defined

## 🎨 Design Philosophy

This handwritten journal theme embraces:
- **Authenticity**: Real handwriting feel with imperfect elements
- **Playfulness**: Colorful highlighter accents and doodles
- **Personality**: Each element has character and charm
- **Accessibility**: Maintains readability while being creative

## 💡 Creative Ideas

### Add More Doodles
- Stars, hearts, arrows around content
- Hand-drawn borders on special posts
- Margin notes and annotations

### Seasonal Themes
- Change highlighter colors by season
- Add themed doodles (snowflakes, flowers, etc.)
- Adjust paper texture for different feels

### Interactive Elements
- Click to add highlighter effects
- Draw your own doodles with canvas
- Animated writing effects

Enjoy your beautiful handwritten journal website! It's like having a real notebook, but on the web! 📝✨ 