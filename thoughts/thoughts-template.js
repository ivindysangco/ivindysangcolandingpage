// Thoughts Template Renderer
// Automatically renders content from thoughts-data.js

document.addEventListener('DOMContentLoaded', function() {
    renderThoughts();
});

function formatContent(content) {
    // Split content into paragraphs by double newlines
    let paragraphs = content.split(/\n\n+/);

    // Process each paragraph
    return paragraphs.map(para => {
        para = para.trim();
        if (!para) return '';

        // Check if it's a blockquote (starts with <em> and is a standalone quote)
        if (para.startsWith('<em>') && para.endsWith('</em>')) {
            return `<blockquote>${para}</blockquote>`;
        }

        // Check if it's already wrapped in HTML tags (but not <em>)
        if (para.startsWith('<')) {
            return para;
        }

        // Regular paragraph
        return `<p>${para}</p>`;
    }).join('');
}

function renderThoughts() {
    const container = document.getElementById('thoughts-content');
    if (!container || !thoughtsData || !thoughtsData.thoughts) return;

    let html = '';

    thoughtsData.thoughts.forEach(thought => {
        const formattedContent = formatContent(thought.content);

        html += `
            <div class="thought-item">
                <div class="thought-date">${thought.date}</div>
                <h3 class="thought-title">${thought.title}</h3>
                <div class="thought-content">${formattedContent}</div>
                ${thought.tags && thought.tags.length > 0 ? `
                    <div class="thought-tags">
                        ${thought.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });

    container.innerHTML = html;
}
