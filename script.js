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
     * Implements debounced scroll/resize for optimal performance
     */
    setupEventHandlers() {
        // Optimized scroll handler with debouncing
        window.addEventListener('scroll', () => {
            if (this.scrollTimeout) {
                cancelAnimationFrame(this.scrollTimeout);
            }
            
            this.scrollTimeout = requestAnimationFrame(() => {
                this.handleScrollEvents();
            });
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
     * Sets up smooth scrolling and intersection observers
     */
    initializeComponents() {
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.initializeFormValidation();
    }

    /**
     * Handle scroll-based UI updates
     * Manages navbar appearance, parallax effects, and header visibility
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

        // Header slide behavior
        this.handleHeaderVisibility(scrollPosition, scrollDirection);
        
        // Update last scroll position
        this.lastScrollY = scrollPosition;

        // Simple parallax effect for hero section
        this.updateParallaxEffect(scrollPosition);
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
     * Implement subtle parallax scrolling effect
     * Provides visual depth while maintaining performance
     */
    updateParallaxEffect(scrollPosition) {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const parallaxSpeed = -0.2;
            const yPosition = scrollPosition * parallaxSpeed;
            heroSection.style.transform = `translateY(${yPosition}px)`;
        }
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
     * Execute smooth scroll with custom easing
     * Provides consistent navigation experience across browsers
     */
    smoothScrollToElement(targetElement) {
        const navbarHeight = this.navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // Optimized duration for user experience
        
        let startTime = null;

        const animationStep = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Smooth easing function for professional feel
            const easedProgress = this.easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + (distance * easedProgress));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animationStep);
            }
        };

        requestAnimationFrame(animationStep);
    }

    /**
     * Cubic easing function for smooth animations
     * Provides professional-grade motion curves
     */
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    /**
     * Initialize intersection observer for scroll animations
     * Efficient performance monitoring for element visibility
     */
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe relevant elements for animation
        const animatableElements = document.querySelectorAll(
            '.amenity-card, .gallery-item, .testimonial-card'
        );
        
        animatableElements.forEach(element => {
            observer.observe(element);
        });
    }

    /**
     * Execute element animation with CSS transitions
     * Provides smooth reveal effects for content sections
     */
    animateElement(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        // Use requestAnimationFrame for smooth transitions
        requestAnimationFrame(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.classList.add('animated');
        });
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
     * Advanced form validation and submission
     * Implements comprehensive validation with user feedback
     */
    initializeFormValidation() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                this.handleFormSubmit(event);
            });
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const submissionData = this.extractFormData(formData);
        
        // Comprehensive validation
        const validationResult = this.validateFormData(submissionData);
        
        if (validationResult.isValid) {
            this.processFormSubmission(submissionData);
            this.resetForm(event.target);
        } else {
            this.displayValidationErrors(validationResult.errors);
        }
    }

    /**
     * Extract and structure form data
     * Provides clean data object for processing
     */
    extractFormData(formData) {
        return {
            name: formData.get('name')?.trim() || '',
            email: formData.get('email')?.trim() || '',
            dates: formData.get('dates')?.trim() || '',
            guests: parseInt(formData.get('guests')) || 1,
            message: formData.get('message')?.trim() || ''
        };
    }

    /**
     * Comprehensive form validation system
     * Implements business rules and data integrity checks
     */
    validateFormData(data) {
        const errors = [];

        // Name validation
        if (!data.name || data.name.length < 2) {
            errors.push('Please enter a valid full name (minimum 2 characters)');
        }

        // Email validation with comprehensive regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            errors.push('Please enter a valid email address');
        }

        // Guest count validation
        if (data.guests < 1 || data.guests > 8) {
            errors.push('Number of guests must be between 1 and 8');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Process successful form submission
     * Simulates server communication with user feedback
     */
    processFormSubmission(data) {
        // Display success message
        this.displaySuccessMessage(data.name, data.email);
        
        // Log submission for development/debugging
        console.log('Form submission processed:', data);
    }

    /**
     * Reset form to initial state
     * Provides clean slate for new submissions
     */
    resetForm(formElement) {
        formElement.reset();
        
        // Reset any custom styling or states
        const inputs = formElement.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
    }

    /**
     * Display validation errors to user
     * Provides clear, actionable feedback
     */
    displayValidationErrors(errors) {
        const errorMessage = `Please correct the following issues:\n\n• ${errors.join('\n• ')}`;
        alert(errorMessage);
    }

    /**
     * Display success confirmation
     * Provides positive user feedback for completed actions
     */
    displaySuccessMessage(name, email) {
        const successMessage = `Thank you, ${name}!\n\nYour inquiry has been submitted successfully.\nWe will respond to ${email} within 24 hours.`;
        alert(successMessage);
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

function handleFormSubmit(event) {
    if (casaSolarApp) {
        casaSolarApp.handleFormSubmit(event);
    }
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