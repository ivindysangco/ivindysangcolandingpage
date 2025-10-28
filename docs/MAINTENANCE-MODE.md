# Maintenance Mode Guide

## Overview

The maintenance mode system allows you to easily toggle sections of your personal blog between "live" (visible with content) and "maintenance" (coming soon message).

---

## Quick Start

### Toggle a Section

**File to edit**: `/config.js` (in the root directory)

**Current Status**:
- ✅ **Culinary**: LIVE (visible with content)
- 🔧 **Travel**: MAINTENANCE (coming soon message)
- 🔧 **Horology**: MAINTENANCE (coming soon message)

---

## How to Use

### Turn Maintenance Mode ON (Hide Section)

To put a section in maintenance mode (show "Coming soon" message):

```javascript
// In config.js
culinary: {
    maintenanceMode: true,   // Change false to true
    maintenanceMessage: "Your message here"
},
```

### Turn Maintenance Mode OFF (Make Section Live)

To make a section live (show full content):

```javascript
// In config.js
culinary: {
    maintenanceMode: false,   // Change true to false
    maintenanceMessage: "Your message here"
},
```

---

## Example Configuration

```javascript
const blogConfig = {
    culinary: {
        maintenanceMode: false,  // Live - shows recipes, updates, etc.
        maintenanceMessage: "Culinary experiments coming soon..."
    },

    travel: {
        maintenanceMode: true,   // Maintenance - shows coming soon
        maintenanceMessage: "Travel section coming soon. Currently compiling destination guides."
    },

    horology: {
        maintenanceMode: true,   // Maintenance - shows coming soon
        maintenanceMessage: "Horology section coming soon. Currently documenting watch collection."
    }
};
```

---

## Customizing Messages

You can customize the maintenance message for each section:

```javascript
travel: {
    maintenanceMode: true,
    maintenanceMessage: "Currently traveling and documenting experiences. Check back in December 2025!"
},
```

---

## What Users See

### When Maintenance Mode is ON:
Users see a nice centered box with:
- Section icon (🍳, ✈️, or ⌚)
- "Coming Soon" heading
- Your custom maintenance message

### When Maintenance Mode is OFF:
Users see the full section with:
- Navigation tabs (Updates, Recipes, etc.)
- All content from the data files
- Full interactive experience

---

## Steps to Change Status

1. **Open** `/config.js` in your text editor

2. **Find the section** you want to change (culinary, travel, or horology)

3. **Change** `maintenanceMode: false` to `true` (or vice versa)

4. **Save** the file

5. **Refresh** your browser - changes appear immediately!

---

## Common Use Cases

### Scenario 1: New Section Not Ready
```javascript
horology: {
    maintenanceMode: true,  // Keep hidden while building content
    maintenanceMessage: "Watch collection being documented. Coming January 2026!"
}
```

### Scenario 2: Section Temporarily Down
```javascript
culinary: {
    maintenanceMode: true,  // Temporarily hide while updating
    maintenanceMessage: "Culinary section under renovation. New recipes coming soon!"
}
```

### Scenario 3: Section Ready to Launch
```javascript
travel: {
    maintenanceMode: false,  // Make live!
    maintenanceMessage: "Travel section coming soon..."  // Message not shown when live
}
```

---

## Testing

After changing the config:

1. **Hard refresh** your browser: Cmd+Shift+R (Mac) or Ctrl+Shift+F5 (Windows)
2. **Click** on the section header to expand it
3. **Verify** you see either:
   - Maintenance message (if ON)
   - Full content (if OFF)

---

## File Locations

```
/
├── config.js                    # ← EDIT THIS to toggle maintenance mode
└── personal-blog.html           # Reads from config.js automatically
```

---

## Tips

1. **Only edit config.js** - Don't touch the HTML or template files
2. **Be descriptive** in your maintenance messages
3. **Test immediately** after changing - it's instant!
4. **Plan ahead** - Add dates to maintenance messages if applicable

---

## Current Configuration

Based on your current setup:

| Section | Status | Message |
|---------|--------|---------|
| Culinary | 🟢 LIVE | (Full content visible) |
| Travel | 🔴 MAINTENANCE | Travel section coming soon. Currently compiling destination guides and travel experiences. |
| Horology | 🔴 MAINTENANCE | Horology section coming soon. Currently documenting watch collection and reviews. |

---

## Need Help?

**File to edit**: `/config.js`
**Quick test**: Change `maintenanceMode: false` to `true` and refresh browser

That's it! Simple on/off switch for each section.
