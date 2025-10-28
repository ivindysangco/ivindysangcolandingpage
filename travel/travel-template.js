// Travel Template Renderer
// This file automatically renders your content from travel-data.js
// You rarely need to edit this file!

// Render Travel Updates
function renderTravelUpdates() {
    const container = document.getElementById('travel-updates-content');
    if (!container) return;

    let html = '';

    travelData.updates.forEach(update => {
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

// Render Destination Cards
function renderDestinations() {
    const container = document.getElementById('destinations-grid');
    if (!container) return;

    let html = '';

    travelData.destinations.forEach(destination => {
        // Use image if provided, otherwise use gradient
        const imageStyle = destination.image
            ? `background-image: url('${destination.image}'); background-size: cover; background-position: center;`
            : `background: ${destination.gradient};`;

        // Generate tags HTML
        const tagsHtml = destination.tags.map(tag =>
            `<span class="tag-badge">${tag}</span>`
        ).join('');

        html += `
            <div class="content-card">
                <div class="card-image" style="${imageStyle}"></div>
                <div class="card-body">
                    <h3 class="card-title">${destination.name}, ${destination.country}</h3>
                    <p class="card-description">${destination.description}</p>
                    <div class="card-tags">${tagsHtml}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render Travel Tips
function renderTravelTips() {
    const container = document.getElementById('travel-tips-content');
    if (!container) return;

    let html = '';

    travelData.tips.forEach(tip => {
        html += `
            <div class="update-item">
                <h3 class="update-title">${tip.title}</h3>
                <p class="update-text">${tip.description}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderTravelUpdates();
    renderDestinations();
    renderTravelTips();
});
