/**
 * Extract first gallery image from Ghost post content
 * This script runs on post pages to replace the feature image with the first gallery image
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find the article image container
    const articleImageContainer = document.querySelector('.article-image');
    
    if (articleImageContainer) {
        // Look for various types of images in the post content
        const selectors = [
            '.gh-content .kg-gallery-image',
            '.gh-content .kg-image',
            '.gh-content .kg-image-card img',
            '.gh-content .kg-gallery-card img',
            '.gh-content img'
        ];
        
        let firstGalleryImage = null;
        
        // Try each selector until we find an image
        for (const selector of selectors) {
            firstGalleryImage = document.querySelector(selector);
            if (firstGalleryImage) {
                break;
            }
        }
        
        if (firstGalleryImage) {
            // Get the image source
            const imageSrc = firstGalleryImage.src;
            const imageAlt = firstGalleryImage.alt || firstGalleryImage.getAttribute('alt') || document.title;
            
            // Validate that we have a proper image source
            if (imageSrc && imageSrc !== 'undefined' && imageSrc.length > 0) {
                // Replace the article header image
                const headerImg = articleImageContainer.querySelector('img');
                
                if (headerImg) {
                    headerImg.src = imageSrc;
                    headerImg.alt = imageAlt;
                    
                    // Show the image if it was hidden as a placeholder
                    headerImg.style.display = '';
                    
                    // Hide the original gallery image to avoid duplication
                    const originalGalleryContainer = firstGalleryImage.closest('.kg-gallery-card, .kg-image-card');
                    if (originalGalleryContainer) {
                        originalGalleryContainer.style.display = 'none';
                    }
                }
            }
        }
    }
});
