# Daydream WordPress Theme

A modern, full-site editing WordPress theme built with Gutenberg blocks, React, and advanced SCSS styling.

## 🚀 Features

### Full-Site Editing Templates
- **Dynamic Date Display**: Custom HTML template (`templates/about.html`) showcasing real-time date rendering
- **Block-Based Layout**: Responsive templates using WordPress block markup
- **Theme Parts**: Modular header/footer components for consistent design

### Custom Gutenberg Blocks (React)
- **Callout Block**: Rich text editor with accent color controls and gradient styling
- **Notice Block**: Simple informational blocks with customizable styling
- **Date Display Block**: Dynamic date/time display with format options and time controls

### Advanced SCSS Styling
- **Modern Animations**: Fade-in, slide-in, and shimmer effects with CSS keyframes
- **Responsive Design**: Mobile-first approach with breakpoint mixins
- **Gradient Backgrounds**: Beautiful gradient effects and hover animations
- **Glass Morphism**: Modern backdrop-filter effects and transparency

### Custom PHP Functions
- **Enhanced Content Processing**: Security improvements, lazy loading, smooth scrolling
- **Custom Block Categories**: Organized block library with custom categories
- **Advanced Date Formatting**: Extended date_i18n functionality
- **Performance Optimizations**: Asset caching, SVG support, emoji removal

## 🛠 Technical Decisions

### Architecture
- **Block-First Approach**: All custom functionality built as Gutenberg blocks
- **Modern Build System**: @wordpress/scripts with webpack for optimal bundling
- **SCSS Architecture**: Modular styling with variables, mixins, and responsive utilities
- **PHP Integration**: Blocks render shortcodes for dynamic server-side content

### Performance
- **Asset Optimization**: Cache-busted CSS/JS with file modification timestamps
- **Lazy Loading**: Automatic image lazy loading via content filters
- **Minimal Dependencies**: Only essential WordPress packages included

### Accessibility
- **Semantic HTML**: Proper time elements with datetime attributes
- **ARIA Support**: Screen reader friendly block structure
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements

## 📁 File Structure

```
daydream-block/
├── assets/
│   ├── styles/theme.scss     # Advanced SCSS with animations
│   ├── js/index.js          # Theme JavaScript
│   └── style.scss           # Main SCSS entry point
├── blocks/
│   ├── callout/             # Callout block (React)
│   ├── notice/              # Notice block (React)
│   └── date-display/        # Date display block (React)
├── templates/
│   └── about.html           # Full-site editing template
├── functions.php            # Custom PHP functions
└── package.json            # Build configuration
```

## 🎯 What I'd Improve with More Time

### Performance Enhancements
- **Block Caching**: Implement Redis/Memcached for dynamic block content
- **Critical CSS**: Inline critical styles for above-the-fold content
- **Image Optimization**: WebP support with fallbacks and responsive images

### Developer Experience
- **TypeScript**: Convert JavaScript to TypeScript for better type safety
- **Testing**: Add Jest/React Testing Library for block testing
- **Storybook**: Component documentation and visual testing

### User Experience
- **Block Patterns**: Pre-built layout patterns for common use cases
- **Global Styles**: Enhanced theme.json with custom CSS custom properties
- **Block Variations**: Multiple style variations for each custom block

### Advanced Features
- **Real-time Updates**: WebSocket integration for live date/time updates
- **Internationalization**: Complete i18n support for all text strings
- **Block Templates**: Custom block templates for rapid content creation

## 🚀 Getting Started

1. **Install Dependencies**: `npm install`
2. **Development**: `npm start` (watch mode)
3. **Production Build**: `npm run build`
4. **Activate Theme**: Upload to WordPress and activate

## 📝 License

MIT License - feel free to use this code as a foundation for your own WordPress themes!
