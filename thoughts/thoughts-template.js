// Thoughts Template Renderer
// Handles both list view (paginated) and individual post view

const POSTS_PER_PAGE = 5;

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the individual post page
    const postContent = document.getElementById('post-content');
    if (postContent) {
        renderSinglePost();
    } else {
        // We're on the list page
        renderThoughtsList();
    }
});

// Generate excerpt from content
function generateExcerpt(content, maxLength = 200) {
    // Remove HTML tags and get plain text
    const plainText = content.replace(/<[^>]*>/g, '').replace(/\n+/g, ' ').trim();
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength).trim() + '...';
}

// Format content for full post view
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

// Render paginated list of thoughts
function renderThoughtsList() {
    const container = document.getElementById('thoughts-content');
    const paginationContainer = document.getElementById('pagination-container');
    if (!container || !thoughtsData || !thoughtsData.thoughts) return;

    // Get current page from URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;

    const thoughts = thoughtsData.thoughts;
    const totalPages = Math.ceil(thoughts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentThoughts = thoughts.slice(startIndex, endIndex);

    // Render thought previews
    let html = '';
    currentThoughts.forEach(thought => {
        const excerpt = generateExcerpt(thought.content);
        html += `
            <div class="thought-preview" onclick="window.location.href='thought-post.html?id=${thought.id}'">
                <div class="thought-date">${thought.date}</div>
                <h3 class="thought-title">${thought.title}</h3>
                <p class="thought-excerpt">${excerpt}</p>
                <span class="read-more">Read more &rarr;</span>
            </div>
        `;
    });

    container.innerHTML = html;

    // Render pagination
    if (paginationContainer && totalPages > 1) {
        let paginationHtml = '';

        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            paginationHtml += `<button class="pagination-btn ${activeClass}" onclick="goToPage(${i})">${i}</button>`;
        }

        paginationContainer.innerHTML = paginationHtml;
    } else if (paginationContainer) {
        paginationContainer.innerHTML = '';
    }
}

// Navigate to page
function goToPage(page) {
    window.location.href = `thoughts-blog.html?page=${page}`;
}

// Render single post
function renderSinglePost() {
    const container = document.getElementById('post-content');
    const navContainer = document.getElementById('post-navigation');
    if (!container || !thoughtsData || !thoughtsData.thoughts) return;

    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        container.innerHTML = '<p>Post not found. <a href="thoughts-blog.html">Back to all thoughts</a></p>';
        return;
    }

    // Find the post
    const thoughts = thoughtsData.thoughts;
    const postIndex = thoughts.findIndex(t => t.id === postId);

    if (postIndex === -1) {
        container.innerHTML = '<p>Post not found. <a href="thoughts-blog.html">Back to all thoughts</a></p>';
        return;
    }

    const thought = thoughts[postIndex];
    const formattedContent = formatContent(thought.content);

    // Update page title
    document.title = `${thought.title} - Ivin Dysangco`;

    // Render the post
    container.innerHTML = `
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

    // Render navigation arrows
    if (navContainer) {
        const olderPost = thoughts[postIndex + 1]; // Older = next in array (array is newest first)
        const newerPost = thoughts[postIndex - 1]; // Newer = previous in array

        let navHtml = '';

        // Left arrow - Older post
        if (olderPost) {
            navHtml += `<a href="thought-post.html?id=${olderPost.id}" class="nav-arrow">&larr; Older</a>`;
        } else {
            navHtml += `<span class="nav-arrow disabled">&larr; Older</span>`;
        }

        // Right arrow - Newer post
        if (newerPost) {
            navHtml += `<a href="thought-post.html?id=${newerPost.id}" class="nav-arrow">Newer &rarr;</a>`;
        } else {
            navHtml += `<span class="nav-arrow disabled">Newer &rarr;</span>`;
        }

        navContainer.innerHTML = navHtml;
    }
}

// Make goToPage available globally
window.goToPage = goToPage;
