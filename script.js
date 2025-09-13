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
        if (this.isHeaderVisible) {
            this.navbar.classList.add('nav-header-hidden');
            this.isHeaderVisible = false;
        }
    }

    /**
     * Show the header with smooth animation
     */
    showHeader() {
        if (!this.isHeaderVisible) {
            this.navbar.classList.remove('nav-header-hidden');
            this.isHeaderVisible = true;
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
        const mobileMenu = document.getElementById('mobile-menu');
        if (this.isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
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
                
                // Skip if targetId is empty, just '#', or not a valid selector
                if (!targetId || targetId === '#' || targetId.length <= 1) {
                    return;
                }
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.smoothScrollToElement(targetElement);
                }
            });
        });
    }

    /**
     * Execute smooth scroll with enhanced animation
     * Provides smooth navigation to booking section
     */
    smoothScrollToElement(targetElement) {
        const navbarHeight = this.navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20; // Extra padding for booking widget
        
        // Smooth scroll with easing
        this.animateScroll(targetPosition);
    }

    /**
     * Animate scroll with smooth easing function
     */
    animateScroll(targetPosition) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // 800ms duration
        let start = null;

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
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
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.isMenuOpen = true;
            
            // Focus first menu item for accessibility
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        }
    }

    closeMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            this.isMenuOpen = false;
        }
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
            
            // Special handling for booking section
            if (sectionId === '#contact') {
                this.highlightBookingWidget();
            }
        }
    }

    /**
     * Highlight booking widget when scrolled to
     */
    highlightBookingWidget() {
        const bookingContainer = document.querySelector('.booking-widget-container');
        if (bookingContainer) {
            // Add highlight class
            bookingContainer.classList.add('highlight');
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                bookingContainer.classList.remove('highlight');
            }, 3000);
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

// Translation functionality
function translatePage(langCode) {
    if (!translations[langCode]) {
        console.warn(`Translation not found for language: ${langCode}`);
        return;
    }
    
    const t = translations[langCode];
    
    // Update navigation
    updateNavigation(t.nav);
    
    // Update hero section
    updateHero(t.hero);
    
    // Update about section
    updateAbout(t.about);
    
    // Update amenities section
    updateAmenities(t.amenities);
    
    // Update gallery section
    updateGallery(t.gallery);
    
    // Update discover section
    updateDiscover(t.discover);
    
    // Update contact section
    updateContact(t.contact);
    
    // Update booking widget
    updateBookingWidget(t.booking, langCode);
    
    // Update footer
    updateFooter(t.footer);
    
    // Update mobile menu
    updateMobileMenu(t.mobile);
    
    // Update page title
    document.title = `Casa Solar - ${t.hero.title}`;
    
    // Update HTML lang attribute
    document.documentElement.lang = langCode;
}

function updateNavigation(nav) {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    const navTexts = [nav.home, nav.about, nav.amenities, nav.gallery, nav.discover, nav.bookNow];
    
    navLinks.forEach((link, index) => {
        if (navTexts[index]) {
            link.textContent = navTexts[index];
        }
    });
}

function updateHero(hero) {
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    const heroButton = document.querySelector('.hero-content .btn');
    
    if (heroTitle) heroTitle.textContent = hero.title;
    if (heroSubtitle) heroSubtitle.textContent = hero.subtitle;
    if (heroButton) heroButton.textContent = hero.bookButton;
}

function updateAbout(about) {
    const aboutTitle = document.querySelector('.about-header h2');
    const aboutSubtitle = document.querySelector('.about-subtitle');
    const aboutHeading = document.querySelector('.about-text h3');
    const aboutDescription = document.querySelector('.about-text p');
    
    if (aboutTitle) aboutTitle.textContent = about.title;
    if (aboutSubtitle) aboutSubtitle.textContent = about.subtitle;
    if (aboutHeading) aboutHeading.textContent = about.heading;
    if (aboutDescription) aboutDescription.textContent = about.description;
    
    // Update feature cards
    const featureCards = document.querySelectorAll('.feature-card h4');
    const featureTexts = [about.features.parking, about.features.elevator, about.features.kitchen, about.features.oldTown];
    
    featureCards.forEach((card, index) => {
        if (featureTexts[index]) {
            card.textContent = featureTexts[index];
        }
    });
}

function updateAmenities(amenities) {
    const amenitiesTitle = document.querySelector('.amenities .section-title');
    if (amenitiesTitle) amenitiesTitle.textContent = amenities.title;
    
    // Update amenity cards
    const amenityCards = document.querySelectorAll('.amenity-card');
    const amenityItems = [
        amenities.items.kitchen,
        amenities.items.location,
        amenities.items.washing,
        amenities.items.parking,
        amenities.items.sofa,
        amenities.items.wifi,
        amenities.items.ac,
        amenities.items.quiet
    ];
    
    amenityCards.forEach((card, index) => {
        if (amenityItems[index]) {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            if (title) title.textContent = amenityItems[index].title;
            if (description) description.textContent = amenityItems[index].description;
        }
    });
}

function updateGallery(gallery) {
    const galleryTitle = document.querySelector('.gallery .section-title');
    const gallerySubtitle = document.querySelector('.gallery-subtitle');
    
    if (galleryTitle) galleryTitle.textContent = gallery.title;
    if (gallerySubtitle) gallerySubtitle.textContent = gallery.subtitle;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterTexts = [gallery.filters.all, gallery.filters.interior, gallery.filters.kitchen, gallery.filters.bedroom, gallery.filters.bathroom];
    
    filterButtons.forEach((button, index) => {
        if (filterTexts[index]) {
            button.textContent = filterTexts[index];
        }
    });
    
    // Update gallery items
    const galleryItems = document.querySelectorAll('.gallery-overlay h3, .gallery-overlay p');
    const galleryItemData = [
        { title: gallery.items.hallway.title, desc: gallery.items.hallway.description },
        { title: gallery.items.bedroom.title, desc: gallery.items.bedroom.description },
        { title: gallery.items.bathroom.title, desc: gallery.items.bathroom.description },
        { title: gallery.items.kitchen.title, desc: gallery.items.kitchen.description },
        { title: gallery.items.kitchenDetail.title, desc: gallery.items.kitchenDetail.description },
        { title: gallery.items.dining.title, desc: gallery.items.dining.description },
        { title: gallery.items.living.title, desc: gallery.items.living.description },
        { title: gallery.items.machines.title, desc: gallery.items.machines.description },
        { title: gallery.items.downtown.title, desc: gallery.items.downtown.description },
        { title: gallery.items.parking.title, desc: gallery.items.parking.description },
        { title: gallery.items.pescadores.title, desc: gallery.items.pescadores.description },
        { title: gallery.items.peneco.title, desc: gallery.items.peneco.description }
    ];
    
    let itemIndex = 0;
    galleryItems.forEach((item, index) => {
        if (index % 2 === 0 && galleryItemData[itemIndex]) {
            item.textContent = galleryItemData[itemIndex].title;
        } else if (index % 2 === 1 && galleryItemData[itemIndex]) {
            item.textContent = galleryItemData[itemIndex].desc;
            itemIndex++;
        }
    });
}

function updateDiscover(discover) {
    const discoverTitle = document.querySelector('.discover-header h2');
    const discoverSubtitle = document.querySelector('.discover-subtitle');
    
    if (discoverTitle) discoverTitle.textContent = discover.title;
    if (discoverSubtitle) discoverSubtitle.textContent = discover.subtitle;
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabTexts = [discover.tabs.beaches, discover.tabs.nightlife, discover.tabs.activities];
    
    tabButtons.forEach((button, index) => {
        if (tabTexts[index]) {
            button.textContent = tabTexts[index];
        }
    });
    
    // Update tab content
    updateTabContent('beaches', discover.beaches);
    updateTabContent('nightlife', discover.nightlife);
    updateTabContent('activities', discover.activities);
}

function updateTabContent(tabId, content) {
    const tabPanel = document.getElementById(tabId);
    if (!tabPanel) return;
    
    const title = tabPanel.querySelector('h3');
    const description = tabPanel.querySelector('p');
    const attractions = tabPanel.querySelectorAll('.attraction-list li');
    
    if (title) title.textContent = content.title;
    if (description) description.textContent = content.description;
    
    attractions.forEach((attraction, index) => {
        if (content.attractions[index]) {
            attraction.textContent = content.attractions[index];
        }
    });
}

function updateContact(contact) {
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) contactTitle.textContent = contact.title;
}

function updateBookingWidget(booking, langCode) {
    console.log(`Updating booking widget to language: ${langCode}`);
    
    // First, ensure the widget exists
    let existingWidget = document.getElementById('lodgify-book-now-box');
    
    // If widget doesn't exist, recreate it from the original HTML
    if (!existingWidget) {
        console.log('Widget missing, recreating from original HTML');
        const bookingContainer = document.querySelector('.booking-widget-container');
        if (bookingContainer) {
            bookingContainer.innerHTML = `
                <div
                id="lodgify-book-now-box"
                data-rental-id="710932"
                data-website-id="604209"
                data-slug="andre-cavaco"
                data-language-code="${langCode}"
                data-new-tab="true"
                data-version="stable"
                data-has-guests-breakdown
                data-check-in-label='${booking.checkIn}'
                data-check-out-label='${booking.checkOut}'
                data-guests-label='${booking.guests}'
                data-guests-singular-label='${booking.guestsSingular}'
                data-guests-plural-label='${booking.guestsPlural}'
                data-location-input-label='${booking.location}'
                data-total-price-label='${booking.totalPrice}'
                data-select-dates-to-see-price-label='${booking.selectDates}'
                data-minimum-price-per-night-first-label='${booking.from}'
                data-minimum-price-per-night-second-label='${booking.perNight}'
                data-book-button-label='${booking.bookNow}'
                data-guests-breakdown-label='${booking.guestsBreakdown}'
                data-adults-label='${booking.adults}'
                data-adults-description='${booking.adultsDescription}'
                data-children-label='${booking.children}'
                data-children-description='${booking.childrenDescription}'
                data-children-not-allowed-label='${booking.childrenNotAllowed}'
                data-infants-label='${booking.infants}'
                data-infants-description='${booking.infantsDescription}'
                data-infants-not-allowed-label='${booking.infantsNotAllowed}'
                data-pets-label='${booking.pets}'
                data-pets-not-allowed-label='${booking.petsNotAllowed}'
                data-done-label='${booking.done}'
                ></div>
            `;
            existingWidget = document.getElementById('lodgify-book-now-box');
        }
    }
    
    // Update existing widget attributes (safer approach)
    if (existingWidget) {
        console.log('Updating existing widget attributes');
        existingWidget.setAttribute('data-language-code', langCode);
        existingWidget.setAttribute('data-check-in-label', booking.checkIn);
        existingWidget.setAttribute('data-check-out-label', booking.checkOut);
        existingWidget.setAttribute('data-guests-label', booking.guests);
        existingWidget.setAttribute('data-guests-singular-label', booking.guestsSingular);
        existingWidget.setAttribute('data-guests-plural-label', booking.guestsPlural);
        existingWidget.setAttribute('data-location-input-label', booking.location);
        existingWidget.setAttribute('data-total-price-label', booking.totalPrice);
        existingWidget.setAttribute('data-select-dates-to-see-price-label', booking.selectDates);
        existingWidget.setAttribute('data-minimum-price-per-night-first-label', booking.from);
        existingWidget.setAttribute('data-minimum-price-per-night-second-label', booking.perNight);
        existingWidget.setAttribute('data-book-button-label', booking.bookNow);
        existingWidget.setAttribute('data-guests-breakdown-label', booking.guestsBreakdown);
        existingWidget.setAttribute('data-adults-label', booking.adults);
        existingWidget.setAttribute('data-adults-description', booking.adultsDescription);
        existingWidget.setAttribute('data-children-label', booking.children);
        existingWidget.setAttribute('data-children-description', booking.childrenDescription);
        existingWidget.setAttribute('data-children-not-allowed-label', booking.childrenNotAllowed);
        existingWidget.setAttribute('data-infants-label', booking.infants);
        existingWidget.setAttribute('data-infants-description', booking.infantsDescription);
        existingWidget.setAttribute('data-infants-not-allowed-label', booking.infantsNotAllowed);
        existingWidget.setAttribute('data-pets-label', booking.pets);
        existingWidget.setAttribute('data-pets-not-allowed-label', booking.petsNotAllowed);
        existingWidget.setAttribute('data-done-label', booking.done);
    }
    
    // Try to re-render the widget (but don't remove it)
    if (window.LodgifyBookNowBox && window.LodgifyBookNowBox.render && existingWidget) {
        console.log('Attempting to re-render Lodgify widget');
        try {
            window.LodgifyBookNowBox.render(existingWidget);
        } catch (e) {
            console.log('Failed to re-render widget:', e);
        }
    }
    
    // Direct text replacement as fallback (safer)
    setTimeout(() => {
        updateBookingWidgetText(booking);
    }, 1000);
}

function updateBookingWidgetText(booking) {
    console.log('Attempting to update booking widget text directly');
    
    // Try to find and update common Lodgify widget text elements
    const selectors = [
        'input[placeholder*="Check-in"], input[placeholder*="Check-out"]',
        'button[data-testid*="check-in"], button[data-testid*="check-out"]',
        '.ldg-bnb-input[placeholder*="Check-in"], .ldg-bnb-input[placeholder*="Check-out"]',
        'input[placeholder*="Guests"], .ldg-bnb-input[placeholder*="Guests"]',
        'button:contains("Book Now"), .ldg-bnb-button:contains("Book Now")',
        '[data-testid*="guests"], [data-testid*="check-in"], [data-testid*="check-out"]'
    ];
    
    selectors.forEach(selector => {
        try {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element.placeholder) {
                    if (element.placeholder.includes('Check-in')) {
                        element.placeholder = booking.checkIn;
                    } else if (element.placeholder.includes('Check-out')) {
                        element.placeholder = booking.checkOut;
                    } else if (element.placeholder.includes('Guests')) {
                        element.placeholder = booking.guests;
                    }
                }
                if (element.textContent) {
                    if (element.textContent.includes('Book Now')) {
                        element.textContent = booking.bookNow;
                    }
                }
            });
        } catch (e) {
            // Ignore selector errors
        }
    });
    
    // Try to update any visible text that might be in the widget
    const widget = document.getElementById('lodgify-book-now-box');
    if (widget) {
        const allTextElements = widget.querySelectorAll('*');
        allTextElements.forEach(element => {
            if (element.children.length === 0 && element.textContent) {
                const text = element.textContent.trim();
                if (text === 'Check-in') element.textContent = booking.checkIn;
                else if (text === 'Check-out') element.textContent = booking.checkOut;
                else if (text === 'Guests') element.textContent = booking.guests;
                else if (text === 'Book Now') element.textContent = booking.bookNow;
                else if (text === 'Total price:') element.textContent = booking.totalPrice;
            }
        });
    }
}


function updateFooter(footer) {
    const footerTitle = document.querySelector('.footer-main h3');
    const footerDescription = document.querySelector('.footer-description');
    const footerExplore = document.querySelector('.footer-links h3');
    const footerSupport = document.querySelector('.footer-support h3');
    const supportText = document.querySelector('.support-text');
    const copyright = document.querySelector('.footer-bottom p');
    
    if (footerTitle) footerTitle.textContent = footer.title;
    if (footerDescription) footerDescription.textContent = footer.description;
    if (footerExplore) footerExplore.textContent = footer.explore;
    if (footerSupport) footerSupport.textContent = footer.support;
    if (supportText) supportText.textContent = footer.supportText;
    if (copyright) copyright.textContent = footer.copyright;
    
    // Update highlights
    const highlights = document.querySelectorAll('.highlight');
    const highlightTexts = [footer.highlights.beach, footer.highlights.oldTown, footer.highlights.amenities];
    
    highlights.forEach((highlight, index) => {
        if (highlightTexts[index]) {
            highlight.textContent = highlightTexts[index];
        }
    });
}

function updateMobileMenu(mobile) {
    const mobileFooterText = document.querySelector('.mobile-footer-text');
    const mobileContactLink = document.querySelector('.mobile-contact-link');
    
    if (mobileFooterText) mobileFooterText.textContent = mobile.footerText;
    if (mobileContactLink) {
        const textNode = mobileContactLink.childNodes[mobileContactLink.childNodes.length - 1];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = mobile.contactUs;
        }
    }
}

// Initialize Casa Solar application
let casaSolarApp;

document.addEventListener('DOMContentLoaded', () => {
    casaSolarApp = new CasaSolar();
    casaSolarApp.logPerformanceMetrics();
    initializeLanguageWidget();
    initializeBackToTopButton();
    ensureBookingWidgetExists();
});

// Function to ensure booking widget exists
function ensureBookingWidgetExists() {
    const existingWidget = document.getElementById('lodgify-book-now-box');
    if (!existingWidget) {
        console.log('Booking widget missing, restoring from HTML');
        const bookingContainer = document.querySelector('.booking-widget-container');
        if (bookingContainer) {
            bookingContainer.innerHTML = `
                <div
                id="lodgify-book-now-box"
                data-rental-id="710932"
                data-website-id="604209"
                data-slug="andre-cavaco"
                data-language-code="en"
                data-new-tab="true"
                data-version="stable"
                data-has-guests-breakdown
                data-check-in-label='Check-in'
                data-check-out-label='Check-out'
                data-guests-label='Guests'
                data-guests-singular-label='{{NumberOfGuests}} guest'
                data-guests-plural-label='{{NumberOfGuests}} guests'
                data-location-input-label='Location'
                data-total-price-label='Total price:'
                data-select-dates-to-see-price-label='Select dates to see total price'
                data-minimum-price-per-night-first-label='From'
                data-minimum-price-per-night-second-label='per night'
                data-book-button-label='Book Now'
                data-guests-breakdown-label='Guests'
                data-adults-label='{"one":"adult","other":"adults"}'
                data-adults-description='Ages {minAge} or above'
                data-children-label='{"one":"child","other":"children"}'
                data-children-description='Ages {minAge}-{maxAge}'
                data-children-not-allowed-label='Not suitable for children'
                data-infants-label='{"one":"infant","other":"infants"}'
                data-infants-description='Under {maxAge}'
                data-infants-not-allowed-label='Not suitable for infants'
                data-pets-label='{"one":"pet","other":"pets"}'
                data-pets-not-allowed-label='Not allowed'
                data-done-label='Done'
                ></div>
            `;
        }
    }
}

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

// Dynamic Gallery Class
class DynamicGallery {
    constructor() {
        this.galleryGrid = document.getElementById('galleryGrid');
        this.filterTabs = document.querySelectorAll('.filter-btn');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxClose = document.getElementById('lightboxClose');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.animateItemsOnLoad();
    }
    
    bindEvents() {
        // Filter functionality
        this.filterTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.handleFilterClick(e.target);
            });
        });
        
        // Lightbox functionality
        this.galleryItems.forEach(item => {
            const viewBtn = item.querySelector('.view-btn');
            const img = item.querySelector('img');
            
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openLightbox(img.src, img.alt);
            });
            
            img.addEventListener('click', () => {
                this.openLightbox(img.src, img.alt);
            });
        });
        
        this.lightboxClose.addEventListener('click', () => {
            this.closeLightbox();
        });
        
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox();
            }
        });
    }
    
    handleFilterClick(clickedTab) {
        // Remove active class from all tabs
        this.filterTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked tab
        clickedTab.classList.add('active');
        
        // Get filter value
        const filterValue = clickedTab.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        // Filter gallery items
        this.filterGallery(filterValue);
    }
    
    filterGallery(filter) {
        this.galleryItems.forEach((item) => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    openLightbox(src, alt) {
        this.lightboxImage.src = src;
        this.lightboxImage.alt = alt;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    animateItemsOnLoad() {
        // Simple gallery - no complex animations needed
    }
}

// Global gallery instance
let galleryInstance = null;

// Gallery filtering function (integrated with gallery)
function filterGallery(category) {
    if (galleryInstance) {
        galleryInstance.filterGallery(category);
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    galleryInstance = new DynamicGallery();
});

// Language Widget Functions
function toggleLanguageMenu() {
    const languageMenu = document.getElementById('languageMenu');
    const languageCurrent = document.querySelector('.language-current');
    
    if (languageMenu && languageCurrent) {
        const isActive = languageMenu.classList.contains('active');
        
        if (isActive) {
            languageMenu.classList.remove('active');
            languageCurrent.classList.remove('active');
        } else {
            languageMenu.classList.add('active');
            languageCurrent.classList.add('active');
        }
    }
}

function selectLanguage(langCode, flagSrc, langName) {
    const languageCurrent = document.querySelector('.language-current');
    const languageMenu = document.getElementById('languageMenu');
    
    if (languageCurrent && languageMenu) {
        // Update current language display
        const flagImg = languageCurrent.querySelector('.language-flag');
        const languageText = languageCurrent.querySelector('.language-text');
        
        if (flagImg) flagImg.src = flagSrc;
        if (languageText) languageText.textContent = langCode.toUpperCase();
        
        // Close menu
        languageMenu.classList.remove('active');
        languageCurrent.classList.remove('active');
        
        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', JSON.stringify({
            code: langCode,
            flag: flagSrc,
            name: langName
        }));
        
        // Implement actual language switching
        translatePage(langCode);
        
        console.log(`Language switched to: ${langName} (${langCode})`);
    }
}

// Initialize language widget on page load
function initializeLanguageWidget() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    if (savedLanguage) {
        try {
            const langData = JSON.parse(savedLanguage);
            const languageCurrent = document.querySelector('.language-current');
            
            if (languageCurrent) {
                const flagImg = languageCurrent.querySelector('.language-flag');
                const languageText = languageCurrent.querySelector('.language-text');
                
                if (flagImg) flagImg.src = langData.flag;
                if (languageText) languageText.textContent = langData.code.toUpperCase();
                
                // Apply translations for saved language
                translatePage(langData.code);
            }
        } catch (error) {
            console.warn('Error loading saved language preference:', error);
        }
    }
    
    // Close language menu when clicking outside
    document.addEventListener('click', (event) => {
        const languageWidget = document.getElementById('languageWidget');
        const languageMenu = document.getElementById('languageMenu');
        
        if (languageWidget && languageMenu && 
            !languageWidget.contains(event.target) && 
            languageMenu.classList.contains('active')) {
            languageMenu.classList.remove('active');
            const languageCurrent = document.querySelector('.language-current');
            if (languageCurrent) {
                languageCurrent.classList.remove('active');
            }
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

// Back to Top Button Functionality
function initializeBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Export for module systems (if needed)
 * Provides compatibility with modern build tools
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasaSolar;
}