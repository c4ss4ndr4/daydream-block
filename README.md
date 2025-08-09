# Daydream Custom Theme

A custom WordPress theme for Daydream Project, built for LocalWP.

## Features

- Clean starter structure
- WordPress Block Editor ready (`theme.json`)
- Responsive and minimal
- Easy to customize
- Includes Full Site Editing (FSE) template example
- Custom Gutenberg block without ACF dependency

## File Structure

- `style.css` – Theme header and styles
- `index.php` – Main template
- `header.php` / `footer.php` – Template parts
- `functions.php` – Enqueues, theme support, custom functions
- `theme.json` – Block editor settings
- `templates/` – Block-based FSE templates
- `blocks/` – Custom Gutenberg block source
- `assets/styles/` – SCSS/CSS styling

## Installation

1. Upload the folder to `wp-content/themes/`.
2. Activate in WordPress Admin under Appearance > Themes.
3. Customize as needed.

## Dependencies

- Advanced Custom Fields (ACF) plugin (Free or Pro as needed)
- Node.js toolchain if building Gutenberg block assets

---

# Sample Pack Overview

This hybrid/FSE setup showcases modern WordPress practices without relying on ACF Pro. The `templates/page.html` file is a block-based FSE template that surfaces a dynamic date via a shortcode, keeping templates block-driven while outputting dynamic data server-side.

Styling is authored in SCSS (`assets/styles/theme.scss`) with fluid spacing, keyframe animation, and accessibility via `prefers-reduced-motion`. Compile to CSS and enqueue in the theme.

A custom React block (`blocks/callout/`) is registered with `block.json` (apiVersion 3). It uses `RichText`, `InspectorControls`, and `PanelColorSettings`, supports spacing/color, and outputs clean, static markup for fast rendering—pure core Gutenberg API, no PHP render callback.

In `functions.php`, behavior enhancements include:
- Security improvement for external links (`rel="noopener"`)
- Emoji asset removal for performance
- `[current_date]` shortcode for the FSE template

**Assumptions:** WordPress 6.5+, block theme active, Node toolchain available for JS builds.  
**Future improvements:** Unit/snapshot tests, CSS logical properties, container queries, GitHub Actions for release automation, i18n string extraction.

---

## Author

Cassandra Marshall
