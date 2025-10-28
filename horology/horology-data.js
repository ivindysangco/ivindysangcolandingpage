// Horology Content Data
// Easy to edit - just copy the template and fill in your content!

const horologyData = {
    // ═══════════════════════════════════════════════════════════════
    // LATEST UPDATES
    // ═══════════════════════════════════════════════════════════════
    // To add a new update:
    // 1. Copy the template below
    // 2. Paste at the TOP of the updates array (newest first)
    // 3. Edit date, title, and description
    // 4. Save and refresh!
    //
    // TEMPLATE:
    // {
    //     date: "Month Year",
    //     title: "Your Update Title",
    //     description: "Your update description here..."
    // },
    // ═══════════════════════════════════════════════════════════════

    updates: [
        {
            date: "October 2025",
            title: "Watch Collection Curation",
            description: "Starting to document my watch collection and share insights on mechanical timepieces. From affordable entry pieces to grail watches, exploring what makes each piece special."
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // WATCH COLLECTION
    // ═══════════════════════════════════════════════════════════════
    // To add a new watch:
    // 1. Copy the template below
    // 2. Paste at the END of the collection array
    // 3. Fill in all details
    // 4. Choose a gradient OR add image path
    // 5. Save and refresh!
    //
    // TEMPLATE:
    // {
    //     brand: "Brand Name",
    //     model: "Model Name",
    //     subtitle: "Watch Nickname/Description",
    //     description: "Why this watch is special to you and its key characteristics...",
    //     image: null,  // or "images/horology/brand-model/hero.jpg"
    //     movement: "Movement Type/Caliber",
    //     caseSize: "XXmm Material",
    //     price: "~$X,XXX",
    //     gradient: "linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%)"
    // },
    //
    // GRADIENT COLOR SUGGESTIONS:
    // - Dark Blue:      #2C3E50 0%, #4CA1AF 100%
    // - Navy Blue:      #1E3C72 0%, #2A5298 100%
    // - Purple/Pink:    #654EA3 0%, #EAAFC8 100%
    // - Dark Gray:      #2C3E50 0%, #000000 100%
    // - Brown/Gold:     #8E6C48 0%, #D4AF37 100%
    // - Green:          #134E5E 0%, #71B280 100%
    // ═══════════════════════════════════════════════════════════════

    collection: [
        {
            brand: "Seiko",
            model: "SKX007",
            subtitle: "The Legendary Dive Watch",
            description: "A modern classic and gateway to mechanical watches. Reliable automatic movement, 200m water resistance, and timeless design.",
            image: null,
            movement: "Seiko 7S26",
            caseSize: "42mm Stainless Steel",
            price: "~$300",
            gradient: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)"
        },
        {
            brand: "Hamilton",
            model: "Khaki Field",
            subtitle: "Tool Watch Heritage",
            description: "Military-inspired field watch with clean design. The perfect everyday mechanical watch that does everything well.",
            image: null,
            movement: "ETA 2824-2",
            caseSize: "38mm Stainless Steel",
            price: "~$500",
            gradient: "linear-gradient(135deg, #1E3C72 0%, #2A5298 100%)"
        },
        {
            brand: "Omega",
            model: "Speedmaster",
            subtitle: "The Moonwatch",
            description: "The only watch certified for EVA. A piece of spaceflight history with impeccable heritage and timeless design.",
            image: null,
            movement: "Lemania 1861",
            caseSize: "42mm Stainless Steel",
            price: "~$6,000",
            gradient: "linear-gradient(135deg, #654EA3 0%, #EAAFC8 100%)"
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // WATCH REVIEWS
    // ═══════════════════════════════════════════════════════════════
    // To add a new review:
    // 1. Copy the template below
    // 2. Paste at the END of the reviews array
    // 3. Edit title and description
    // 4. Save and refresh!
    //
    // TEMPLATE:
    // {
    //     title: "Review Title",
    //     description: "Your review content..."
    // },
    // ═══════════════════════════════════════════════════════════════

    reviews: [
        {
            title: "The Case for Mechanical Watches in 2025",
            description: "Coming soon - Why mechanical watches still matter in the age of smartwatches. Engineering art, heritage, and the appreciation of craftsmanship."
        },
        {
            title: "Best Tool Watches Under $1000",
            description: "Coming soon - Comprehensive comparison of the best mechanical watches for everyday wear at accessible price points."
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // BUYING GUIDES (Price Tiers)
    // ═══════════════════════════════════════════════════════════════
    // To edit price tiers:
    // 1. Edit the tier information below
    // 2. Save and refresh!
    //
    // TEMPLATE:
    // {
    //     priceRange: "$XXX-XXX",
    //     title: "Tier Name",
    //     description: "Description of what you get at this price point..."
    // },
    // ═══════════════════════════════════════════════════════════════

    buyingGuide: [
        {
            priceRange: "$200-500",
            title: "Entry Level",
            description: "Seiko, Orient, Citizen - Reliable automatic movements, good build quality"
        },
        {
            priceRange: "$500-2000",
            title: "Tool Watches",
            description: "Hamilton, Tissot, Oris - Swiss movements, refined finishing"
        },
        {
            priceRange: "$2000-10000",
            title: "Luxury Entry",
            description: "Omega, Tudor, Grand Seiko - Heritage brands, in-house movements"
        },
        {
            priceRange: "$10000+",
            title: "High Horology",
            description: "Rolex, Patek Philippe, A. Lange & Söhne - Investment pieces, heirloom quality"
        }
    ]
};
