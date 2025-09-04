/**
 * Casa Solar - Main JavaScript Module
 * Minimalist Architecture with Core Functionality
 * 
 * Core Principles:
 * - Clean, readable code structure
 * - Performance-optimized event handling
 * - Mobile-first responsive design support
 * - Progressive enhancement approach
 */

class CasaSolar {
    constructor() {
        this.initializeCore();
        this.setupEventHandlers();
        this.initializeComponents();
    }

    /**
     * Initialize core DOM elements and configuration
     * Establishes foundational references for application state
     */
    initializeCore() {
        // Core navigation elements
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.getElementById('nav-links');
        
        // Gallery system components
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img');
        
        // Application state management
        this.isMenuOpen = false;
        this.isLightboxOpen = false;
        
        // Performance optimization flags
        this.scrollTimeout = null;
        this.resizeTimeout = null;
        
        // Header scroll behavior
        this.lastScrollY = 0;
        this.isHeaderVisible = true;
    }

    /**
     * Configure comprehensive event handling system
     * Implements immediate scroll handling for maximum responsiveness
     */
    setupEventHandlers() {
        // Immediate scroll handler for maximum responsiveness
        window.addEventListener('scroll', () => {
            this.handleScrollEvents();
        }, { passive: true });

        // Responsive design handler
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 150);
        });

        // Keyboard accessibility support
        document.addEventListener('keydown', (event) => {
            this.handleKeyboardNavigation(event);
        });

        // Click outside handler for mobile menu
        document.addEventListener('click', (event) => {
            this.handleOutsideClick(event);
        });
    }

    /**
     * Initialize interactive components
     * Sets up smooth scrolling
     */
    initializeComponents() {
        this.setupSmoothScrolling();
    }

    /**
     * Handle scroll-based UI updates
     * Manages navbar appearance and header visibility for maximum performance
     */
    handleScrollEvents() {
        const scrollPosition = window.pageYOffset;
        const scrollDirection = scrollPosition > this.lastScrollY ? 'down' : 'up';
        
        // Navbar scroll state management
        if (scrollPosition > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Header visibility based on scroll direction
        this.handleHeaderVisibility(scrollPosition, scrollDirection);
        
        // Update last scroll position
        this.lastScrollY = scrollPosition;
    }

    /**
     * Handle header visibility based on scroll direction
     * Smoothly hides header when scrolling down, shows when scrolling up
     */
    handleHeaderVisibility(scrollPosition, scrollDirection) {
        const scrollThreshold = 100; // Minimum scroll distance before hiding header
        
        // Don't hide header at the very top of the page
        if (scrollPosition < scrollThreshold) {
            this.showHeader();
            return;
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (scrollDirection === 'down' && this.isHeaderVisible) {
            this.hideHeader();
        } else if (scrollDirection === 'up' && !this.isHeaderVisible) {
            this.showHeader();
        }
    }

    /**
     * Hide the header with smooth animation
     */
    hideHeader() {
        this.navbar.classList.add('hidden');
        this.isHeaderVisible = false;
    }

    /**
     * Show the header with smooth animation
     */
    showHeader() {
        this.navbar.classList.remove('hidden');
        this.isHeaderVisible = true;
    }

    /**
     * Handle responsive design adjustments
     * Ensures optimal layout across device sizes
     */
    handleResize() {
        // Close mobile menu on desktop resize
        if (window.innerWidth > 768 && this.isMenuOpen) {
            this.closeMenu();
        }
    }

    /**
     * Comprehensive keyboard navigation system
     * Implements accessibility standards and shortcuts
     */
    handleKeyboardNavigation(event) {
        switch(event.key) {
            case 'Escape':
                if (this.isLightboxOpen) {
                    this.closeLightbox();
                } else if (this.isMenuOpen) {
                    this.closeMenu();
                }
                break;
                
            case 'Tab':
                // Enhanced tab navigation for accessibility
                this.manageFocusTrapping(event);
                break;
        }
    }

    /**
     * Manage focus trapping for modal components
     * Ensures proper accessibility in lightbox and mobile menu
     */
    manageFocusTrapping(event) {
        if (this.isLightboxOpen) {
            const focusableElements = this.lightbox.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }

    /**
     * Handle clicks outside interactive components
     * Provides intuitive UX for modal dismissal
     */
    handleOutsideClick(event) {
        // Close mobile menu when clicking outside
        if (this.isMenuOpen && !this.navLinks.contains(event.target) && 
            !event.target.classList.contains('mobile-menu-toggle')) {
            this.closeMenu();
        }
    }

    /**
     * Configure advanced smooth scrolling system
     * Implements easing functions for premium user experience
     */
    setupSmoothScrolling() {
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
        
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.smoothScrollToElement(targetElement);
                }
            });
        });
    }

    /**
     * Execute instant scroll for maximum responsiveness
     * Provides immediate navigation without delays
     */
    smoothScrollToElement(targetElement) {
        const navbarHeight = this.navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        // Instant scroll for maximum responsiveness
        window.scrollTo(0, targetPosition);
    }



    /**
     * Navigation menu control system
     * Handles mobile menu state and accessibility
     */
    toggleMenu() {
        if (this.isMenuOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.navLinks.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isMenuOpen = true;
        
        // Focus first menu item for accessibility
        const firstMenuItem = this.navLinks.querySelector('a');
        if (firstMenuItem) {
            firstMenuItem.focus();
        }
    }

    closeMenu() {
        this.navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.isMenuOpen = false;
    }

    /**
     * Gallery lightbox system
     * Professional image viewing experience with accessibility
     */
    openLightbox(imageSrc) {
        this.lightboxImg.src = imageSrc;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isLightboxOpen = true;
        
        // Focus lightbox for keyboard navigation
        this.lightbox.focus();
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.isLightboxOpen = false;
        
        // Return focus to triggering element if possible
        const activeGalleryItem = document.querySelector('.gallery-item:focus');
        if (activeGalleryItem) {
            activeGalleryItem.focus();
        }
    }

    /**
     * Utility method for section navigation
     * Provides programmatic scrolling to specific sections
     */
    scrollToSection(sectionId) {
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
            this.smoothScrollToElement(targetElement);
        }
    }


    /**
     * Performance monitoring and optimization
     * Provides insights for continued improvement
     */
    logPerformanceMetrics() {
        if (performance && performance.now) {
            const loadTime = performance.now();
            console.log(`Casa Solar initialized in ${loadTime.toFixed(2)}ms`);
        }
    }
}

/**
 * Application initialization and global function bindings
 * Establishes primary application instance and legacy support
 */

// Initialize Casa Solar application
let casaSolarApp;

document.addEventListener('DOMContentLoaded', () => {
    casaSolarApp = new CasaSolar();
    casaSolarApp.logPerformanceMetrics();
});

// Global function bindings for HTML onclick attributes
// Maintains compatibility with inline event handlers
function toggleMenu() {
    if (casaSolarApp) {
        casaSolarApp.toggleMenu();
    }
}

function closeMenu() {
    if (casaSolarApp) {
        casaSolarApp.closeMenu();
    }
}

function openLightbox(imageSrc) {
    if (casaSolarApp) {
        casaSolarApp.openLightbox(imageSrc);
    }
}

function closeLightbox() {
    if (casaSolarApp) {
        casaSolarApp.closeLightbox();
    }
}

function scrollToSection(sectionId) {
    if (casaSolarApp) {
        casaSolarApp.scrollToSection(sectionId);
    }
}

function showTab(tabName) {
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Add active class to clicked tab button
    const activeButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Show selected tab panel
    const activePanel = document.getElementById(tabName);
    if (activePanel) {
        activePanel.classList.add('active');
    }
}

function filterGallery(category) {
    // Remove active class from all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => button.classList.remove('active'));
    
    // Add active class to clicked filter button
    const activeButton = document.querySelector(`[onclick="filterGallery('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Filter and show/hide items with simple transition
    galleryItems.forEach((item, index) => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            // Show item
            item.classList.remove('hidden');
            item.style.order = index;
        } else {
            // Hide item
            item.classList.add('hidden');
        }
    });
}


/**
 * Performance optimization for modern browsers
 * Implements progressive enhancement strategies
 */
window.addEventListener('load', () => {
    // Optimize images with lazy loading support
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

/**
 * Error handling and graceful degradation
 * Ensures application stability across diverse environments
 */
window.addEventListener('error', (event) => {
    console.warn('Casa Solar: Non-critical error handled:', event.error);
    // Application continues to function with core features
});

/**
 * Export for module systems (if needed)
 * Provides compatibility with modern build tools
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasaSolar;
}