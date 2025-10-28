// Culinary Experiments Template Renderer
// This file automatically renders your content from culinary-data.js
// You rarely need to edit this file!

// Render Latest Updates
function renderCulinaryUpdates() {
    const container = document.getElementById('culinary-updates-content');
    if (!container) return;

    let html = '';

    culinaryData.updates.forEach(update => {
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

// Render Recipe Cards
function renderRecipes() {
    const container = document.getElementById('recipes-grid');
    if (!container) return;

    let html = '';

    culinaryData.recipes.forEach(recipe => {
        // Use image if provided, otherwise use gradient
        const imageStyle = recipe.image
            ? `background-image: url('${recipe.image}'); background-size: cover; background-position: center;`
            : `background: ${recipe.gradient};`;

        // Generate tags HTML
        const tagsHtml = recipe.tags.map(tag =>
            `<span class="tag-badge">${tag}</span>`
        ).join('');

        // Wrap in link if recipe.link is provided
        const cardContent = `
            <div class="content-card">
                <div class="card-image" style="${imageStyle}"></div>
                <div class="card-body">
                    <h3 class="card-title">${recipe.title}</h3>
                    <p class="card-description">${recipe.description}</p>
                    <div class="card-tags">${tagsHtml}</div>
                </div>
            </div>
        `;

        if (recipe.link) {
            html += `<a href="${recipe.link}" style="text-decoration: none; color: inherit;">${cardContent}</a>`;
        } else {
            html += cardContent;
        }
    });

    container.innerHTML = html;
}

// Render Technique Deep Dives
function renderTechniques() {
    const container = document.getElementById('techniques-content');
    if (!container) return;

    let html = '';

    culinaryData.techniques.forEach(technique => {
        html += `
            <div class="update-item">
                <h3 class="update-title">${technique.title}</h3>
                <p class="update-text">${technique.description}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render Restaurant Reviews
function renderRestaurantReviews() {
    const container = document.getElementById('restaurants-content');
    if (!container) return;

    if (culinaryData.reviews.length === 0) {
        container.innerHTML = `
            <p class="update-text">
                Memorable dining experiences and hidden gems worth seeking out. Coming soon.
            </p>
        `;
        return;
    }

    let html = '';

    culinaryData.reviews.forEach(review => {
        html += `
            <div class="update-item">
                <h3 class="update-title">${review.name} - ${review.location}</h3>
                <p class="update-text">${review.review}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderCulinaryUpdates();
    renderRecipes();
    renderTechniques();
    renderRestaurantReviews();
});
