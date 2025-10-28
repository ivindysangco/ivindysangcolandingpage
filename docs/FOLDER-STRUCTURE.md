# Complete Folder Structure

## Overview
This document provides a detailed breakdown of the entire project structure with explanations.

---

## 📂 Root Directory

```
/
├── .claude/                      # Claude Code configuration (don't edit)
├── .git/                         # Git version control (don't edit)
├── .gitignore                    # Git ignore file
├── .obsidian/                    # Obsidian notes (if using)
│
├── README.md                     # 📖 START HERE - Main documentation
├── index.html                    # 🏠 Main landing page
├── technical-blog.html           # 💻 Technical blog page
├── personal-blog.html            # ✨ Personal blog page
├── style.css                     # 🎨 Global stylesheet
├── script.js                     # ⚙️ Global JavaScript
│
├── culinary/                     # 🍳 Culinary section
├── travel/                       # ✈️ Travel section
├── horology/                     # ⌚ Horology section
├── images/                       # 📸 All blog images
├── pictures/                     # 🖼️ Profile and general images
├── talargos/                     # 🛰️ Technical project content
└── docs/                         # 📚 All documentation
```

---

## 🍳 Culinary Directory

**Purpose**: Data and templates for the Culinary Experiments section

```
culinary/
├── culinary-data.js             # ← EDIT THIS to add recipes & updates
└── culinary-template.js         # Auto-renders content (don't edit)
```

**What to edit**: `culinary-data.js`
**What not to touch**: `culinary-template.js`

**Data Structure**:
- `updates[]` - Latest culinary updates and news
- `recipes[]` - Recipe cards with descriptions, tags, images
- `techniques[]` - Cooking technique deep dives
- `reviews[]` - Restaurant reviews

---

## ✈️ Travel Directory

**Purpose**: Data and templates for the Travel section

```
travel/
├── travel-data.js               # ← EDIT THIS to add destinations & tips
└── travel-template.js           # Auto-renders content (don't edit)
```

**What to edit**: `travel-data.js`
**What not to touch**: `travel-template.js`

**Data Structure**:
- `updates[]` - Recent travel updates and news
- `destinations[]` - Destination guides with descriptions, tags, images
- `tips[]` - Travel tips and lessons learned

---

## ⌚ Horology Directory

**Purpose**: Data and templates for the Horology (watch collection) section

```
horology/
├── horology-data.js             # ← EDIT THIS to add watches & reviews
└── horology-template.js         # Auto-renders content (don't edit)
```

**What to edit**: `horology-data.js`
**What not to touch**: `horology-template.js`

**Data Structure**:
- `updates[]` - Watch collection updates and news
- `collection[]` - Watch collection with specs, images
- `reviews[]` - Watch reviews and articles
- `buyingGuide[]` - Price tier buying guides

---

## 📸 Images Directory

**Purpose**: Store all images for the personal blog sections

```
images/
├── culinary/                    # Food photos
│   ├── recipe-name/
│   │   ├── hero.jpg            # Main card image
│   │   ├── step-1.jpg          # Process photos
│   │   └── step-2.jpg
│   └── another-recipe/
│       └── hero.jpg
│
├── travel/                      # Travel photos
│   ├── location-name/
│   │   ├── hero.jpg            # Main card image
│   │   ├── landmark.jpg        # Additional photos
│   │   └── sunset.jpg
│   └── another-location/
│       └── hero.jpg
│
└── horology/                    # Watch photos
    ├── brand-model/
    │   ├── hero.jpg            # Main card image
    │   ├── dial.jpg            # Close-up photos
    │   └── movement.jpg
    └── another-watch/
        └── hero.jpg
```

**Naming Convention**:
- `hero.jpg` - Main card image (required)
- Use lowercase with hyphens: `northern-lights.jpg`
- Be descriptive: `tokyo-shibuya-crossing.jpg`

**Image Specs**:
- Format: JPG for photos, PNG for graphics
- Size: 800×600px for cards
- File size: Under 200KB (compress at https://tinypng.com)

---

## 🖼️ Pictures Directory

**Purpose**: Profile pictures and general site images

```
pictures/
└── square full res.jpg          # Profile picture used on landing page
```

**Contains**:
- Profile photo
- General site images
- Non-blog-specific photos

---

## 🛰️ Talargos Directory

**Purpose**: Content for Project Talargos (technical blog project)

```
talargos/
└── [Project-specific files]
```

**Used by**: `technical-blog.html`

---

## 📚 Docs Directory

**Purpose**: All documentation and guides

```
docs/
├── FOLDER-STRUCTURE.md              # This file - complete structure
├── PERSONAL-BLOG-QUICK-START.md     # Main guide - start here
├── CULINARY-QUICK-START.md          # Culinary section detailed guide
├── IMAGE-STRATEGY.md                # Complete image strategy
├── personalblog.md                  # Original planning document
├── culinary-updates-plan.md         # Technical implementation details
└── Content.md                       # Misc content notes
```

**Start Here**: `PERSONAL-BLOG-QUICK-START.md`

**Guide Reference**:
| Task | Document |
|------|----------|
| General overview | `PERSONAL-BLOG-QUICK-START.md` |
| Adding recipes/food content | `CULINARY-QUICK-START.md` |
| Adding images | `IMAGE-STRATEGY.md` |
| Understanding structure | `FOLDER-STRUCTURE.md` (this file) |
| Original vision | `personalblog.md` |

---

## 📄 Main HTML Files

### index.html
**Purpose**: Main landing page
**Sections**:
- Hero with profile
- About Me
- Blog cards (Technical, Thoughts, Personal)
- Career highlights
- Experience showcase
- Areas of expertise
- Contact section

### technical-blog.html
**Purpose**: Technical blog
**Features**:
- Project Talargos documentation
- Technical deep dives
- System architecture
- Lessons learned
- Expandable sections

### personal-blog.html
**Purpose**: Personal blog
**Sections**:
- Culinary Experiments (expandable)
- Travel (expandable)
- Horology (expandable)
**Data Source**: Pulls from `culinary/`, `travel/`, `horology/` data files

---

## 🎨 Style Files

### style.css
**Purpose**: Global stylesheet for all pages
**Contains**:
- CSS variables (colors, shadows)
- Layout styles
- Component styles (cards, buttons, nav)
- Responsive breakpoints
- Animations

**Used by**: All HTML pages

### script.js
**Purpose**: Global JavaScript
**Contains**:
- Smooth scrolling
- Navigation behavior
- General interactions

**Used by**: All HTML pages

---

## 🔄 Data Flow

```
User edits:
  culinary-data.js
  travel-data.js
  horology-data.js
         ↓
Template files automatically:
  culinary-template.js
  travel-template.js
  horology-template.js
         ↓
Render content on:
  personal-blog.html
         ↓
User sees updates
  in browser
```

**Key Point**: You only edit the `-data.js` files. The `-template.js` files automatically handle rendering.

---

## 📝 File Naming Conventions

### Data Files
- **Pattern**: `[section]-data.js`
- **Examples**: `culinary-data.js`, `travel-data.js`, `horology-data.js`
- **Action**: Edit these to add content

### Template Files
- **Pattern**: `[section]-template.js`
- **Examples**: `culinary-template.js`, `travel-template.js`, `horology-template.js`
- **Action**: Don't edit these

### Image Files
- **Pattern**: `[descriptive-name].jpg`
- **Examples**: `hero.jpg`, `dial-closeup.jpg`, `sunset-beach.jpg`
- **Action**: Use lowercase with hyphens

### Documentation Files
- **Pattern**: `[TOPIC]-[TYPE].md`
- **Examples**: `CULINARY-QUICK-START.md`, `IMAGE-STRATEGY.md`
- **Action**: Read for guidance

---

## 🚫 What NOT to Edit

**Don't touch these files** (unless you know what you're doing):

```
✗ *-template.js files       # Auto-rendering code
✗ .git/ folder             # Version control
✗ .claude/ folder          # Claude Code config
✗ .gitignore               # Git configuration
✗ .DS_Store                # macOS system file
```

---

## ✅ What TO Edit

**Safe to edit** (this is where you add content):

```
✓ culinary/culinary-data.js     # Add recipes & updates
✓ travel/travel-data.js         # Add destinations & tips
✓ horology/horology-data.js     # Add watches & reviews
✓ images/[section]/             # Add your photos
✓ index.html                    # Update profile info
✓ technical-blog.html           # Update tech projects
```

---

## 🎯 Quick Navigation

**Want to...**

| Goal | File/Folder to Use |
|------|-------------------|
| Add a recipe | `culinary/culinary-data.js` |
| Add a destination | `travel/travel-data.js` |
| Add a watch | `horology/horology-data.js` |
| Add food photo | `images/culinary/[recipe-name]/` |
| Add travel photo | `images/travel/[location]/` |
| Add watch photo | `images/horology/[brand-model]/` |
| Update profile | `index.html` |
| Update tech blog | `technical-blog.html` |
| Read main guide | `docs/PERSONAL-BLOG-QUICK-START.md` |
| Learn about images | `docs/IMAGE-STRATEGY.md` |

---

## 📊 File Count Summary

**Core Pages**: 3 HTML files (index, technical-blog, personal-blog)
**Data Files**: 3 (culinary, travel, horology)
**Template Files**: 3 (culinary, travel, horology)
**Documentation**: 6 files in `/docs/`
**Style Files**: 2 (style.css, script.js)

**Total editable content files**: 3 (the `-data.js` files)
**Everything else**: Auto-generated or supporting files

---

## 🔍 Finding Things Quickly

### Use Command Line:
```bash
# Find all data files
find . -name "*-data.js"

# Find all images
find images/ -name "*.jpg"

# Find documentation
ls docs/

# See structure
tree -L 2  # (if tree is installed)
```

### In Finder/File Explorer:
- **Edit content**: Go to `culinary/`, `travel/`, or `horology/`
- **Add images**: Go to `images/[section]/`
- **Read docs**: Go to `docs/`
- **View site**: Open `index.html` in browser

---

## 💡 Pro Tips

1. **Keep data files open**: Frequently edited, keep them handy
2. **Bookmark docs folder**: Quick access to guides
3. **Use search**: Cmd+F / Ctrl+F to find content in files
4. **Version control**: Commit after each content update
5. **Backup images**: Keep originals elsewhere

---

## 🆘 Lost? Start Here:

1. **Main overview**: `/README.md` (root)
2. **Quick start**: `/docs/PERSONAL-BLOG-QUICK-START.md`
3. **Folder structure**: `/docs/FOLDER-STRUCTURE.md` (this file)
4. **Need help with images**: `/docs/IMAGE-STRATEGY.md`

---

**Remember**:
- ✅ Edit `-data.js` files to add content
- ❌ Don't edit `-template.js` files
- 📸 Add images to `images/[section]/`
- 📚 Check `docs/` when stuck

**Happy content creating!** 🎉
