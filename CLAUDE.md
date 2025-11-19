# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog website for Ivin Dysangco - a static site built with vanilla HTML, CSS, and JavaScript. The site features a professional landing page, technical blog, and personal blog with three collapsible sections: Culinary Experiments, Travel, and Horology.

## Development Commands

### Local Development
```bash
# Start local development server (always use port 8000)
python3 -m http.server 8000

# View site at: http://localhost:8000
```

### Git Operations
```bash
# This site is deployed via GitHub Pages from the main branch
git add .
git commit -m "Your message"
git push origin main

# Site automatically deploys to GitHub Pages after push
```

## Architecture & Key Concepts

### Data-Driven Content System

The site uses a **template-renderer pattern** where content is separated from presentation:

- **Data files** (`*-data.js`): Store all content as JavaScript objects
- **Template files** (`*-template.js`): Automatically render content into HTML
- **Config file** (`config.js`): Controls maintenance mode for each blog section

**Important**: When adding content, ONLY edit data files or config.js. Never modify template files unless you're changing the rendering logic itself.

### Personal Blog Architecture

Located in `personal-blog.html`, this page contains three collapsible sections:

1. **Culinary Experiments** (`/culinary/`)
   - Data: `culinary-data.js`
   - Renderer: `culinary-template.js`
   - Sections: Updates, Recipes, Techniques, Restaurant Reviews

2. **Travel** (`/travel/`)
   - Data: `travel-data.js`
   - Renderer: `travel-template.js`
   - Sections: Recent Journeys, Destination Guides, Tips

3. **Horology** (`/horology/`)
   - Data: `horology-data.js`
   - Renderer: `horology-template.js`
   - Sections: Updates, Collection, Reviews, Buying Guides

Each section can be independently toggled between live and maintenance mode via `config.js`.

### Maintenance Mode System

The `config.js` file controls visibility for each personal blog section:

```javascript
const blogConfig = {
    culinary: {
        maintenanceMode: false,  // false = live, true = hidden
        maintenanceMessage: "Message shown when in maintenance mode"
    },
    // ... travel, horology
};
```

When `maintenanceMode: true`, the section displays a "Coming Soon" message instead of content.

### Image Strategy

Images are organized by section and subject:
```
images/
├── culinary/[recipe-name]/hero.jpg
├── travel/[location-name]/hero.jpg
└── horology/[brand-model]/hero.jpg
```

- Images should be optimized (under 200KB for cards, under 500KB for full-width)
- Use JPG for photos, PNG for graphics
- Compression recommended via tinypng.com

### Script Loading Order

Critical for proper rendering - scripts must load in this order in `personal-blog.html`:
1. `script.js` (global navigation/animations)
2. `config.js` (maintenance mode configuration)
3. `[section]-data.js` (content data)
4. `[section]-template.js` (rendering functions)
5. Inline script (maintenance checks and section toggles)

## Common Development Tasks

### Adding Content to Personal Blog

**Add a recipe to Culinary section:**
1. Open `culinary/culinary-data.js`
2. Find the `recipes:` array
3. Copy the template in the comments above the array
4. Add to the end of the array
5. Save and refresh browser

**Add an update:**
1. Open the appropriate `*-data.js` file
2. Find the `updates:` array
3. Add new entry at the TOP (newest first)
4. Save and refresh browser

**Toggle maintenance mode:**
1. Open `config.js`
2. Change `maintenanceMode: true/false` for desired section
3. Save and refresh browser

### Adding New Pages

Recipe detail pages (like `spinach-muffins-recipe.html`) can be created by:
1. Creating the HTML file in the root directory
2. Adding a `link:` property to the recipe object in `culinary-data.js`
3. The template renderer automatically creates clickable cards

### Modifying Styles

- Global styles: `style.css`
- Page-specific styles: Embedded `<style>` tags in respective HTML files
- Color scheme variables defined in `style.css` (--primary-color, --text-dark, etc.)

### Navigation System

- Main navbar defined in each HTML file with smooth scroll navigation
- Section links use hash fragments (`#about`, `#contact`, etc.)
- Personal blog has collapsible sections with arrow indicators
- Active nav link highlighting on scroll (handled by `script.js`)

## Project Structure Notes

```
/
├── index.html                    # Landing page (hero, about, career, expertise)
├── technical-blog.html           # Technical blog (Project Talargos, etc.)
├── personal-blog.html            # Personal interests (culinary/travel/horology)
├── [recipe-name].html            # Individual recipe pages (as needed)
├── style.css                     # Global styles
├── script.js                     # Global JavaScript (navigation, animations)
├── config.js                     # Maintenance mode configuration
│
├── /culinary/                    # Culinary section
│   ├── culinary-data.js          # Content data (EDIT THIS)
│   └── culinary-template.js      # Renderer (don't edit unless changing logic)
│
├── /travel/                      # Travel section (same pattern)
├── /horology/                    # Horology section (same pattern)
├── /images/                      # Section images organized by topic
├── /pictures/                    # Profile and general images
└── /docs/                        # Documentation for content management
```

## Technical Details

### Frontend Stack
- Pure HTML5, CSS3, and vanilla JavaScript
- No frameworks, build tools, or dependencies
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts

### Browser APIs Used
- Intersection Observer (fade-in animations)
- Smooth scroll behavior
- CSS variables for theming

### Deployment
- Static site hosted on GitHub Pages
- Deploys automatically from `main` branch
- Custom domain configured via `CNAME` file

## Design System

### Colors
- Primary: `#5fa8d3` (Blue)
- Secondary: `#4a90b8` (Darker Blue)
- Text: `#2c3e50` (Dark Gray)
- Background: `#ecf0f1` (Light Gray)

### Typography
- Font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- Responsive font sizing via rem units

### Component Patterns
- Cards with hover effects and shadows
- Gradient backgrounds for hero sections
- Collapsible sections with animated arrows
- Tag badges for categorization

## Important Notes

- **Content files only**: When users ask to add recipes, articles, or updates, only modify `*-data.js` files
- **Template files are sacred**: Don't edit `*-template.js` files unless explicitly changing rendering behavior
- **Maintenance mode**: Check `config.js` before assuming a section should show content
- **Mobile responsive**: All designs must work on mobile (320px+), tablet (768px+), and desktop (1024px+)
- **Image optimization**: Always remind users to compress images before adding them
- **No build process**: This is intentionally a simple static site - no npm, no bundlers
