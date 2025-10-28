// Horology Template Renderer
// This file automatically renders your content from horology-data.js
// You rarely need to edit this file!

// Render Horology Updates
function renderHorologyUpdates() {
    const container = document.getElementById('horology-updates-content');
    if (!container) return;

    let html = '';

    horologyData.updates.forEach(update => {
        const titleText = update.title ? `${update.date} - ${update.title}` : update.date;

        html += `
            <div class="update-item">
                <h3 class="update-title">${titleText}</h3>
                <p class="update-text">${update.description}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render Watch Collection
function renderWatchCollection() {
    const container = document.getElementById('collection-grid');
    if (!container) return;

    let html = '';

    horologyData.collection.forEach(watch => {
        // Use image if provided, otherwise use gradient
        const imageStyle = watch.image
            ? `background-image: url('${watch.image}'); background-size: cover; background-position: center;`
            : `background: ${watch.gradient};`;

        html += `
            <div class="content-card">
                <div class="card-image" style="${imageStyle}"></div>
                <div class="card-body">
                    <h3 class="card-title">${watch.brand} ${watch.model}</h3>
                    <p style="color: #999; font-size: 0.9rem; margin-bottom: 1rem; font-style: italic;">${watch.subtitle}</p>
                    <p class="card-description">${watch.description}</p>
                    <div class="watch-specs">
                        <p><strong>Movement:</strong> ${watch.movement}</p>
                        <p><strong>Case:</strong> ${watch.caseSize}</p>
                        <p><strong>Price:</strong> ${watch.price}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render Watch Reviews
function renderWatchReviews() {
    const container = document.getElementById('reviews-content');
    if (!container) return;

    let html = '<p class="update-text" style="margin-bottom: 2rem;">Detailed reviews focusing on design, engineering, value proposition, and real-world wearability.</p>';

    horologyData.reviews.forEach(review => {
        html += `
            <div class="update-item">
                <h3 class="update-title">${review.title}</h3>
                <p class="update-text">${review.description}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render Buying Guides
function renderBuyingGuides() {
    const container = document.getElementById('guides-content');
    if (!container) return;

    let html = '';

    horologyData.buyingGuide.forEach(tier => {
        html += `
            <div class="price-tier">
                <h4 class="price-tier-title">${tier.priceRange}: ${tier.title}</h4>
                <p class="update-text">${tier.description}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderHorologyUpdates();
    renderWatchCollection();
    renderWatchReviews();
    renderBuyingGuides();
});
