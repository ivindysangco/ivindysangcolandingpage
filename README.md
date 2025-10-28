# Ivin Dysangco - Personal Website

Professional portfolio and personal blog showcasing technical product management, culinary experiments, travel, and horology.

**Live Site**: [View locally at http://localhost:8000]

---

## 📁 Project Structure

```
/
├── README.md                     # This file - project overview
├── config.js                     # ← EDIT: Toggle maintenance mode for sections
├── index.html                    # Main landing page
├── technical-blog.html           # Technical blog (Project Talargos, etc.)
├── personal-blog.html            # Personal blog (Culinary, Travel, Horology)
├── style.css                     # Global styles
├── script.js                     # Global JavaScript
│
├── /culinary/                    # Culinary Experiments data
│   ├── culinary-data.js          # ← EDIT: Add recipes & updates
│   └── culinary-template.js      # Template renderer (don't edit)
│
├── /travel/                      # Travel data
│   ├── travel-data.js            # ← EDIT: Add destinations & tips
│   └── travel-template.js        # Template renderer (don't edit)
│
├── /horology/                    # Horology (watch collection) data
│   ├── horology-data.js          # ← EDIT: Add watches & reviews
│   └── horology-template.js      # Template renderer (don't edit)
│
├── /images/                      # All images for personal blog
│   ├── /culinary/                # Food photos
│   ├── /travel/                  # Travel photos
│   └── /horology/                # Watch photos
│
├── /pictures/                    # Profile and general images
│   └── square full res.jpg       # Profile picture
│
├── /talargos/                    # Project Talargos content (if any)
│
└── /docs/                        # Documentation
    ├── PERSONAL-BLOG-QUICK-START.md     # Quick start for all sections
    ├── CULINARY-QUICK-START.md          # Culinary section guide
    ├── IMAGE-STRATEGY.md                # How to add images
    ├── MAINTENANCE-MODE.md              # How to toggle sections on/off
    ├── personalblog.md                  # Original planning doc
    ├── culinary-updates-plan.md         # Implementation details
    └── Content.md                       # Misc content notes
```

---

## 🚀 Quick Start

### View the Site Locally

```bash
# Navigate to project directory
cd "/Users/Ivin/Documents/1 - Project/Ivin's app"

# Start local server
python3 -m http.server 8000

# Open in browser
# Navigate to: http://localhost:8000
```

### Update Content

**To add culinary content:**
```bash
# Edit this file
open culinary/culinary-data.js

# Add your recipes, updates, or techniques
# Save, then refresh browser
```

**To add travel content:**
```bash
# Edit this file
open travel/travel-data.js

# Add destinations, updates, or tips
# Save, then refresh browser
```

**To add horology content:**
```bash
# Edit this file
open horology/horology-data.js

# Add watches, reviews, or buying guides
# Save, then refresh browser
```

**No HTML knowledge required!** Just edit simple JavaScript objects.

---

## 📄 Main Pages

### 1. Landing Page (`index.html`)
- Hero section with professional summary
- About Me section
- Career highlights
- Experience showcase
- Areas of expertise
- Blog links (Technical, Thoughts, Personal)
- Contact section

**Links to:**
- Technical Blog (`technical-blog.html`)
- Personal Blog (`personal-blog.html`)
- Thoughts Blog (coming soon)

### 2. Technical Blog (`technical-blog.html`)
- Project Talargos (LoRa sensor network)
- Technical deep dives
- Lessons learned
- System architecture documentation

### 3. Personal Blog (`personal-blog.html`)
- **Culinary Experiments**: Recipes, techniques, restaurant reviews
- **Travel**: Destinations, tips, photography
- **Horology**: Watch collection, reviews, buying guides

---

## ✏️ How to Update Content

### Adding Content is EASY (5-30 seconds):

1. **Open the data file** for your section:
   - Culinary: `culinary/culinary-data.js`
   - Travel: `travel/travel-data.js`
   - Horology: `horology/horology-data.js`

2. **Copy a template** (they're in the file with clear instructions)

3. **Fill in your content** (title, description, tags, etc.)

4. **Save the file**

5. **Refresh your browser** - Done! Your content appears automatically

**Example - Adding a new recipe:**
```javascript
// Open culinary/culinary-data.js
// Find the recipes: section
// Add this at the end:

{
    title: "Homemade Pizza",
    description: "Perfect Neapolitan-style pizza from scratch...",
    image: null,  // or add image path later
    tags: ["Italian", "Intermediate", "24 hours"],
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)"
},
```

That's it! No HTML, no complicated setup.

---

## 🖼️ Adding Images

### Quick Process:

1. **Optimize your image** at https://tinypng.com
   - Compress to under 200KB
   - Resize to 800×600px for cards

2. **Save to correct folder:**
   ```
   images/culinary/[recipe-name]/hero.jpg
   images/travel/[location-name]/hero.jpg
   images/horology/[brand-model]/hero.jpg
   ```

3. **Update data file:**
   - Change `image: null`
   - To `image: "images/section/name/hero.jpg"`

4. **Refresh browser** - Done!

**Detailed guide:** See `docs/IMAGE-STRATEGY.md`

---

## 📚 Documentation

All documentation is in the `/docs/` folder:

| File | Purpose |
|------|---------|
| `PERSONAL-BLOG-QUICK-START.md` | Main guide - start here! |
| `CULINARY-QUICK-START.md` | Detailed culinary section guide |
| `IMAGE-STRATEGY.md` | Complete image adding strategy |
| `personalblog.md` | Original planning document |
| `culinary-updates-plan.md` | Technical implementation details |

---

## 🎨 Design System

### Colors
- **Primary**: `#5fa8d3` (Blue)
- **Secondary**: `#4a90b8` (Darker Blue)
- **Accent**: `#7ec4e8` (Light Blue)
- **Text**: `#2c3e50` (Dark Gray)
- **Background**: `#ecf0f1` (Light Gray)

### Typography
- **Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **Headings**: Bold, varying sizes
- **Body**: 1.6 line-height for readability

### Components
- **Cards**: White background, shadow, rounded corners, hover effects
- **Buttons**: Rounded, gradient hover effects
- **Navigation**: Fixed, translucent, blur effect

---

## 🔧 Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **Vanilla JavaScript**: No frameworks, lightweight and fast

### Content Management
- **Data-Driven**: All content in simple `.js` data files
- **Template Rendering**: Automatic generation from data
- **No Database**: Static site, fast and secure

### Assets
- **Images**: JPG/PNG, optimized under 200KB
- **Icons**: Text-based (emojis) and CSS

---

## 🚢 Deployment

### Prerequisites
- Modern web browser
- Static file hosting (GitHub Pages, Netlify, Vercel, etc.)

### Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Save

3. **Your site is live!**
   - URL: `https://[username].github.io/[repo-name]`

### Deploy to Netlify

1. **Connect repository** on Netlify
2. **Build settings:**
   - Build command: (none)
   - Publish directory: `.` (root)
3. **Deploy** - Site goes live in minutes!

### Other Options
- **Vercel**: Similar to Netlify
- **AWS S3 + CloudFront**: For scalability
- **Traditional hosting**: Upload files via FTP

**Note**: This is a static site - no server-side code needed!

---

## 🔄 Regular Maintenance

### Weekly Tasks
- [ ] Add new content (recipes, destinations, watches)
- [ ] Update "Latest Updates" sections
- [ ] Review and optimize new images

### Monthly Tasks
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Review and update "Coming Soon" sections
- [ ] Backup data files

### As Needed
- [ ] Add new blog sections
- [ ] Update profile information
- [ ] Refresh portfolio projects
- [ ] Optimize images

---

## ⚠️ Common Issues & Solutions

### Content Not Showing?
1. Check browser console (F12) for errors
2. Verify all commas are in place
3. Make sure quotes are matched
4. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Image Not Displaying?
1. Check file path is correct (case-sensitive!)
2. Verify image exists in folder
3. Make sure filename matches exactly
4. Check image file size (should be under 500KB)

### Page Looks Broken?
1. Clear browser cache
2. Check style.css is loading
3. Verify all JavaScript files are linked correctly
4. Check browser console for 404 errors

---

## 📝 Content Guidelines

### Writing Style
- **Professional but Personal**: Be yourself, but polished
- **Concise**: Get to the point quickly
- **Descriptive**: Paint a picture with words
- **Honest**: Share both successes and learnings

### Image Guidelines
- **Quality**: Sharp, well-lit, properly exposed
- **Size**: Under 200KB for cards, under 500KB for full-width
- **Format**: JPG for photos, PNG for graphics
- **Composition**: Follow rule of thirds, good framing

### Update Frequency
- **Culinary**: Add content as you cook (1-2x per month)
- **Travel**: Document trips as they happen
- **Horology**: Update when acquiring watches or insights
- **Technical**: Add projects and learnings regularly

---

## 🤝 Contributing

This is a personal website, but if you're helping out:

1. **Don't edit template files** (`*-template.js`)
2. **Only edit data files** (`*-data.js`)
3. **Test before committing**
4. **Keep commits small and focused**
5. **Write clear commit messages**

---

## 📄 License

© 2025 Ivin Dysangco. All rights reserved.

---

## 🆘 Need Help?

### Quick Reference
- **Update content**: Edit `[section]-data.js` files
- **Toggle section on/off**: Edit `config.js` (see `docs/MAINTENANCE-MODE.md`)
- **Add images**: See `docs/IMAGE-STRATEGY.md`
- **Detailed guides**: Check `/docs/` folder
- **Start local server**: `python3 -m http.server 8000`

### Documentation
- Main guide: `docs/PERSONAL-BLOG-QUICK-START.md`
- Maintenance mode: `docs/MAINTENANCE-MODE.md`
- Images: `docs/IMAGE-STRATEGY.md`
- Culinary: `docs/CULINARY-QUICK-START.md`

### Quick Examples

**Add an update:**
```javascript
// Open culinary/culinary-data.js, add to updates:
{
    date: "November 2025",
    title: "Made Amazing Pasta",
    description: "Finally perfected my dough recipe..."
},
```

**Add an image:**
```javascript
// Save image to: images/culinary/pasta/hero.jpg
// Then in data file, change:
image: "images/culinary/pasta/hero.jpg",
```

---

## 🎉 Ready to Go!

Your website is fully organized and ready for:
- ✅ Easy content updates
- ✅ Image management
- ✅ Deployment
- ✅ Regular maintenance

**Start adding content and make it yours!**

---

**Version**: 1.0.0
**Last Updated**: October 2025
**Maintained by**: Ivin Dysangco
