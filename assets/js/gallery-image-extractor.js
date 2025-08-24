/**
 * Extract first gallery image from Ghost post content
 * This script runs on post pages to replace the feature image with the first gallery image
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find the article image container
    const articleImageContainer = document.querySelector('.article-image');
    
    if (articleImageContainer) {
        // Look for the first gallery image in the post content
        const firstGalleryImage = document.querySelector('.gh-content .kg-gallery-image, .gh-content .kg-image');
        
        if (firstGalleryImage) {
            // Get the image source
            const imageSrc = firstGalleryImage.src;
            const imageAlt = firstGalleryImage.alt || document.title;
            
            // Replace the article header image
            const headerImg = articleImageContainer.querySelector('img');
            if (headerImg) {
                headerImg.src = imageSrc;
                headerImg.alt = imageAlt;
                
                // Hide the original gallery image to avoid duplication
                const originalGalleryContainer = firstGalleryImage.closest('.kg-gallery-card, .kg-image-card');
                if (originalGalleryContainer) {
                    originalGalleryContainer.style.display = 'none';
                }
            }
        }
    }
});
