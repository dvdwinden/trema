/**
 * Main JS file for Trema Ghost Theme
 */

(function () {
    'use strict';

    // Mobile menu toggle functionality
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.gh-head-menu');
        
        if (menuToggle && menu) {
            menuToggle.addEventListener('click', function() {
                menu.classList.toggle('is-open');
                menuToggle.classList.toggle('is-open');
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') {
                    e.preventDefault();
                    return;
                }
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Table of Contents generator
    function initTableOfContents() {
        const content = document.querySelector('.gh-content');
        const headings = content ? content.querySelectorAll('h1, h2, h3, h4, h5, h6') : [];
        
        if (headings.length < 3) return; // Only show ToC if there are 3+ headings
        
        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.innerHTML = '<h4>Table of Contents</h4><ul></ul>';
        
        const tocList = toc.querySelector('ul');
        
        headings.forEach((heading, index) => {
            // Add ID to heading if it doesn't have one
            if (!heading.id) {
                heading.id = 'heading-' + index;
            }
            
            const li = document.createElement('li');
            li.className = 'toc-' + heading.tagName.toLowerCase();
            
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            
            li.appendChild(link);
            tocList.appendChild(li);
        });
        
        // Add CSS for ToC
        const style = document.createElement('style');
        style.textContent = `
            .table-of-contents {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 5px;
                padding: 20px;
                margin: 30px 0;
            }
            .table-of-contents h4 {
                margin-top: 0;
                margin-bottom: 15px;
                font-size: 1.6rem;
            }
            .table-of-contents ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .table-of-contents li {
                margin: 8px 0;
            }
            .table-of-contents a {
                color: var(--color-text);
                text-decoration: none;
                border-bottom: 1px solid transparent;
            }
            .table-of-contents a:hover {
                color: var(--color-primary);
                border-bottom-color: var(--color-primary);
            }
            .toc-h2 { padding-left: 15px; }
            .toc-h3 { padding-left: 30px; }
            .toc-h4 { padding-left: 45px; }
            .toc-h5 { padding-left: 60px; }
            .toc-h6 { padding-left: 75px; }
        `;
        document.head.appendChild(style);
        
        // Insert ToC after first paragraph or heading
        const firstParagraph = content.querySelector('p');
        if (firstParagraph) {
            firstParagraph.parentNode.insertBefore(toc, firstParagraph.nextSibling);
        }
    }

    // Image lazy loading and lightbox
    function initImageEnhancements() {
        const images = document.querySelectorAll('.gh-content img');
        
        images.forEach(img => {
            // Add loading="lazy" for modern browsers
            img.setAttribute('loading', 'lazy');
            
            // Wrap images in figure if not already wrapped
            if (img.parentNode.tagName !== 'FIGURE') {
                const figure = document.createElement('figure');
                img.parentNode.insertBefore(figure, img);
                figure.appendChild(img);
                
                // Add caption if alt text exists
                if (img.alt) {
                    const caption = document.createElement('figcaption');
                    caption.textContent = img.alt;
                    figure.appendChild(caption);
                }
            }
        });
    }

    // Enhanced navigation highlighting for tag pages and pagination
    function initNavigationHighlighting() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav a');
        const footerLinks = document.querySelectorAll('.site-footer-nav a');
        
        // Function to check if a path matches a tag section
        function isTagSection(linkHref, currentPath) {
            // Extract tag from link href (e.g., /tag/fiction/ from full URL)
            const linkMatch = linkHref.match(/\/tag\/([^/]+)\/?/);
            if (!linkMatch) return false;
            
            const tagSlug = linkMatch[1];
            
            // Check if current path is this tag or its pagination
            const tagPattern = new RegExp(`^\/tag\/${tagSlug}(?:\/page\/\d+)?\/?$`);
            return tagPattern.test(currentPath);
        }
        
        // Function to update nav highlighting
        function updateNavHighlighting(links, className = 'nav-current') {
            // First, remove all current classes
            links.forEach(link => {
                link.parentElement.classList.remove(className);
            });
            
            // Then check each link
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (!href) return;
                
                // Handle exact matches first
                if (href === currentPath || href === currentPath + '/') {
                    link.parentElement.classList.add(className);
                    return;
                }
                
                // Handle tag section matches (for pagination)
                if (isTagSection(href, currentPath)) {
                    link.parentElement.classList.add(className);
                    return;
                }
                
                // Handle home page
                if ((href === '/' || href === window.location.origin + '/') && 
                    (currentPath === '/' || currentPath === '')) {
                    link.parentElement.classList.add(className);
                    return;
                }
            });
        }
        
        // Update both header and footer navigation
        updateNavHighlighting(navLinks);
        updateNavHighlighting(footerLinks);
        
        // Prevent external/donation links from being marked as current
        const allNavLinks = [...navLinks, ...footerLinks];
        allNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href.startsWith('http') && !href.startsWith(window.location.origin))) {
                // This is an external link, remove any current styling
                link.parentElement.classList.remove('nav-current');
            }
        });
    }

    // Initialize all functionality when DOM is ready
    function init() {
        initMobileMenu();
        initSmoothScrolling();
        initNavigationHighlighting();
        
        // Only run these on article pages
        if (document.querySelector('.gh-content')) {
            initReadingProgress();
            initTableOfContents();
            initImageEnhancements();
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
