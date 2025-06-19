# Sebastian Diaz - Personal Website

A clean, mobile-responsive personal website built with Astro, featuring a typewriter aesthetic and integrated blog feed.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🌟 Features

- **Mobile-First Design**: Expandable "Latest Writing" section with drag interactions on mobile
- **Typewriter Aesthetic**: Clean, professional design with Space Mono and JetBrains Mono fonts
- **Blog Integration**: Automatic feed from Substack newsletter
- **Responsive Layout**: Optimized for both desktop and mobile experiences
- **Custom Branding**: Personal favicon and social icons
- **Interactive Elements**: Subtle animations and hover effects
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🎨 Design Highlights

- **Desktop**: Traditional sidebar layout with profile and blog feed side-by-side
- **Mobile**: Innovative bottom-expandable section that keeps profile visible
- **Touch Interactions**: Drag-to-expand functionality with 50px threshold
- **Visual Feedback**: Smooth animations and backdrop blur effects
- **Brand Colors**: Custom blue accent (#2563eb) throughout

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generation
- **Styling**: Custom CSS with responsive design patterns
- **Typography**: Space Mono (headings) + JetBrains Mono (code/accents)
- **Icons**: Custom SVG icons for social links
- **Blog Feed**: Substack RSS integration
- **Deployment**: Ready for Vercel/Netlify

## 📱 Mobile Experience

The mobile layout features a unique expandable design:
- Fixed profile section always visible at top
- "Latest Writing" section expandable from bottom
- Touch/drag interactions with visual feedback
- 320px content height with independent scrolling
- Smooth CSS transitions and backdrop effects

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.astro      # Profile and social links
│   └── BlogFeed.astro     # Substack blog integration
├── layouts/
│   └── Layout.astro       # Base page layout
├── lib/
│   └── fetchSubstackFeed.ts # Blog feed utilities
├── pages/
│   ├── index.astro        # Homepage
│   └── 404.astro          # Error page
└── styles/
    └── global.css         # Custom styles and mobile responsive design
```

## 🎯 Key Components

### Sidebar Component
- Personal profile section
- Social media links (GitHub, Email, Crypto)
- Interactive name with hover effects
- Responsive visibility controls

### BlogFeed Component  
- Substack newsletter integration
- Mobile-expandable interface
- Touch/drag interaction handling
- Scrollable content area

## 📄 License

MIT License - feel free to use this as inspiration for your own personal website!

---

Built with ❤️ by Sebastian Diaz
