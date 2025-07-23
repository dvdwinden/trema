(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRandomPosts);
    } else {
        initRandomPosts();
    }
    
    function initRandomPosts() {
        const container = document.querySelector('.random-posts-container');
        if (!container) return;
        
        const posts = Array.from(container.querySelectorAll('.random-post-item'));
        if (posts.length < 2) return; // Need at least 2 posts to randomize
        
        // Fisher-Yates shuffle algorithm
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
        
        // Shuffle posts and show only first 2
        const shuffledPosts = shuffleArray(posts);
        
        // Hide all posts first
        posts.forEach(post => {
            post.style.display = 'none';
        });
        
        // Show only first 2 shuffled posts
        shuffledPosts.slice(0, 2).forEach(post => {
            post.style.display = 'flex';
        });
    }
})();
