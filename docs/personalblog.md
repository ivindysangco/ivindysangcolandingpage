# Personal Blog Landing Page - Plan

## Overview
Create a personal blog landing page (personal-blog.html) that showcases three main areas of personal interest: Culinary Experiments, Travel, and Horology. This page will complement the existing technical blog and provide a more personal perspective on life outside of technology.

## Design Philosophy
- **Consistency**: Match the visual design language of existing pages (index.html and technical-blog.html)
- **Personal Touch**: More relaxed and expressive than the technical blog, while maintaining professionalism
- **Visual Focus**: More image-heavy than the technical blog, showcasing food, travel destinations, and watches
- **Storytelling**: Each section should tell stories rather than just present information

## Page Structure

### 1. Navigation Bar
- Reuse existing navbar structure
- Links: Home, About, Blog, Contact
- "Ivin Dysangco" logo linking back to index.html

### 2. Hero Section
**Title**: "Personal Blog" or "Beyond the Code"
**Subtitle**: "Adventures in food, travel, and timekeeping"
**Style**: Similar to technical-blog.html hero but with warmer, more personal tone
- Centered text layout
- Reduced height compared to main page hero
- Possibly include a background image or subtle pattern

### 3. Main Content Structure
Three expandable/collapsible project sections (similar to Project Talargos structure):
1. Culinary Experiments
2. Travel
3. Horology

Each section should have:
- Click-to-expand header with arrow indicator
- Internal navigation (when expanded) for subsections
- Consistent styling with technical blog but adapted for visual/personal content

## Section Details

### Section 1: Culinary Experiments

**Subsections:**
- **Recipe Chronicles**: Documented cooking experiments and recipes
- **Technique Deep Dives**: Learning new cooking techniques (sous vide, fermentation, etc.)
- **Restaurant Reviews**: Memorable dining experiences
- **Kitchen Equipment**: Tools and gadgets worth investing in

**Content Ideas:**
- Photo-heavy posts with step-by-step cooking processes
- Recipe cards with ingredients and instructions
- Notes on what worked and what didn't (learning perspective)
- Cultural context and history of dishes
- Pairing suggestions (wine, sides, etc.)

**Visual Elements:**
- Grid layout for recipe cards
- Before/after photos of dishes
- Ingredient close-ups
- Plating presentations

### Section 2: Travel

**Subsections:**
- **Destination Guides**: In-depth exploration of places visited
- **Travel Log**: Chronological travel diary entries
- **Photography**: Curated photo essays from trips
- **Tips & Lessons**: Practical travel advice and lessons learned

**Content Ideas:**
- Interactive maps showing places visited (Leaflet.js integration)
- Photo galleries with captions
- Itinerary breakdowns
- Local food and cultural experiences
- Hidden gems and off-the-beaten-path discoveries
- Travel planning tips and packing lists

**Visual Elements:**
- Large hero images for each destination
- Photo galleries with lightbox functionality
- Interactive map with markers for visited locations
- Timeline view of trips

### Section 3: Horology

**Subsections:**
- **Collection**: Personal watch collection with details
- **Watch Reviews**: Detailed analysis of specific timepieces
- **History & Heritage**: Stories behind iconic watches and brands
- **Buying Guide**: Advice for watch enthusiasts at different budget levels

**Content Ideas:**
- Close-up photography of watches (dial, movement, details)
- Specifications and technical details
- Personal stories about acquiring watches
- Comparison of different movements (mechanical, automatic, quartz)
- Brand histories and notable achievements
- Value propositions at different price points
- Care and maintenance tips

**Visual Elements:**
- High-quality watch photography with zoom capability
- Specification tables
- Movement diagrams or animations
- Brand logos and heritage imagery
- Price range comparisons

## Technical Implementation

### HTML Structure
**File**: `personal-blog.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard meta tags and CSS link -->
    <title>Personal Blog - Ivin Dysangco</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation (reused from existing pages) -->

    <!-- Hero Section -->

    <!-- Main Content -->
    <section class="blog-posts">
        <!-- Culinary Experiments Section -->
        <div class="project-section">
            <h2 onclick="toggleProject('culinary')">
                Culinary Experiments
                <span id="culinary-arrow">▼</span>
            </h2>
            <div id="culinary-content">
                <!-- Internal navigation -->
                <!-- Content subsections -->
            </div>
        </div>

        <!-- Travel Section -->
        <div class="project-section">
            <h2 onclick="toggleProject('travel')">
                Travel
                <span id="travel-arrow">▼</span>
            </h2>
            <div id="travel-content">
                <!-- Internal navigation -->
                <!-- Content subsections -->
            </div>
        </div>

        <!-- Horology Section -->
        <div class="project-section">
            <h2 onclick="toggleProject('horology')">
                Horology
                <span id="horology-arrow">▼</span>
            </h2>
            <div id="horology-content">
                <!-- Internal navigation -->
                <!-- Content subsections -->
            </div>
        </div>
    </section>

    <!-- Footer -->

    <script src="script.js"></script>
</body>
</html>
```

### CSS Considerations
- Reuse existing styles from `style.css`
- May need additional styles for:
  - Image galleries (grid layouts, hover effects)
  - Lightbox functionality for photos
  - Recipe card styling
  - Watch specification tables
  - Map container styling

### JavaScript Enhancements
- Reuse `toggleProject()` function from technical-blog.html
- Add lightbox functionality for image viewing
- Possibly integrate Leaflet.js for interactive travel maps
- Image lazy loading for better performance
- Smooth scroll behavior for internal navigation

### External Libraries to Consider
1. **Leaflet.js**: Interactive maps for travel section (already used in Project Talargos)
2. **Lightbox2** or **GLightbox**: Photo gallery functionality
3. **Masonry.js**: For Pinterest-style image grid layouts (optional)
4. **Intersection Observer API**: For lazy loading images as user scrolls

## Content Strategy

### Phase 1: Initial Launch (MVP)
Create the page structure with:
- All three main sections
- At least 2-3 posts/entries in each section
- Placeholder content where needed
- Basic image galleries

**Culinary**: 2-3 recipe posts with photos
**Travel**: 2 destination guides with photo galleries
**Horology**: Introduction to collection + 2 watch reviews

### Phase 2: Content Expansion
- Add more posts over time
- Enhance with interactive elements (maps, galleries)
- Cross-link related content
- Add search/filter functionality

### Phase 3: Advanced Features
- Comments section (optional)
- Social sharing buttons
- RSS feed for updates
- Newsletter signup
- Tags and categories for easier navigation

## Content Guidelines

### Photography
- **Image Size**: Optimize for web (max 1920px wide, compressed to <300KB)
- **Aspect Ratios**: Maintain consistency within each section
- **Alt Text**: Always include descriptive alt text for accessibility
- **Copyright**: Only use personal photos or properly licensed images

### Writing Style
- **Personal**: First-person narrative, share experiences and opinions
- **Detailed**: Provide context and backstory
- **Balanced**: Mix of success stories and learning experiences
- **Educational**: Share knowledge and lessons learned
- **Engaging**: Use storytelling techniques to keep readers interested

### Post Structure Template

**Culinary Posts:**
1. Opening story/context
2. Ingredients list
3. Step-by-step process with photos
4. Results and reflections
5. Tips and variations

**Travel Posts:**
1. Destination overview
2. How I got there
3. Where I stayed
4. What I did (day by day or highlights)
5. Food experiences
6. Photos and memories
7. Practical tips and recommendations

**Horology Posts:**
1. Introduction to the watch
2. Brand and model history
3. Specifications
4. Design and aesthetics
5. Movement and technical details
6. Personal impressions and use cases
7. Value proposition
8. Conclusion

## Update Strategy

### Update Cadence
- **Culinary**: 1-2 posts per month (seasonal cooking projects)
- **Travel**: As trips happen (2-4 posts per major trip)
- **Horology**: 1 post per month (reviews, collection updates, industry news)

### Updates Section
Add an "Updates" subsection at the top of each main section showing:
- Latest posts chronologically
- "Coming soon" preview of planned content
- Last updated date

## Integration with Main Site

### Update index.html
Change the "Personal" blog card (lines 60-63) to link to personal-blog.html:

```html
<a href="personal-blog.html" class="blog-card-link">
    <div class="blog-card">
        <h3>Personal</h3>
        <p>Adventures in culinary experiments, travel experiences, and watch collecting beyond technology.</p>
    </div>
</a>
```

### Navigation Updates
Ensure all pages have consistent navigation that includes:
- Home (index.html)
- About (index.html#about)
- Blog dropdown or section with:
  - Technical (technical-blog.html)
  - Personal (personal-blog.html)
  - Thoughts (thoughts-blog.html - coming soon)
- Contact (index.html#contact)

## Accessibility Considerations
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast
- Skip navigation links
- ARIA labels where appropriate

## Performance Optimization
- Lazy load images below the fold
- Compress all images (WebP format with fallbacks)
- Minimize CSS/JS (reuse existing files)
- Consider CDN for image hosting if needed
- Implement browser caching
- Mobile-first responsive design

## SEO Considerations
- Descriptive page title and meta description
- Open Graph tags for social sharing
- Structured data for articles (JSON-LD)
- Clean URL structure
- Internal linking between related posts
- Mobile-responsive design

## Future Enhancements
1. **Search Functionality**: Allow users to search across all personal blog posts
2. **Tag System**: Categorize posts with tags (e.g., "Italian Cuisine", "Southeast Asia", "Dive Watches")
3. **Related Posts**: Show related content at the bottom of each post
4. **Archive Page**: Chronological listing of all posts
5. **RSS Feed**: Allow readers to subscribe to updates
6. **Newsletter**: Optional email updates for new posts
7. **Comments**: Enable reader feedback (Disqus or similar)
8. **Dark Mode**: Toggle for comfortable reading at night

## Success Metrics
- Page is visually consistent with existing site
- All three sections have quality initial content
- Images load efficiently and look professional
- Navigation is intuitive and smooth
- Mobile experience is excellent
- Content is personal yet professional
- Page loads in under 3 seconds
- Accessible to users with disabilities

## Timeline Estimate

**Phase 1: Structure (2-3 hours)**
- Create personal-blog.html with basic structure
- Set up three main sections with expand/collapse
- Add navigation and hero section

**Phase 2: Styling (2-3 hours)**
- Adapt existing styles for personal blog
- Create image gallery styles
- Ensure mobile responsiveness

**Phase 3: Initial Content (4-6 hours)**
- Write and format 2-3 posts per section
- Prepare and optimize images
- Add content to page

**Phase 4: Enhancements (2-3 hours)**
- Add lightbox for images
- Implement smooth scrolling
- Test across devices
- Fix any issues

**Total Estimated Time**: 10-15 hours

## Notes
- Start with content you're most passionate about
- Don't aim for perfection on first launch - iterate over time
- Keep backup of all original photos
- Consider starting a content calendar to plan future posts
- Maintain consistency in tone and quality across all sections
- Have fun with it - this is your personal space to share what you love!
