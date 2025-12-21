// Main JS entry point for v3
console.log('v3 initialized');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => toggleMenu(true));
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', () => toggleMenu(false));
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Testimonials Carousel Navigation
    const testimonialsCarousel = document.getElementById('testimonials-carousel');
    const prevButton = document.getElementById('testimonials-prev');
    const nextButton = document.getElementById('testimonials-next');

    if (testimonialsCarousel && prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            testimonialsCarousel.scrollBy({
                left: -testimonialsCarousel.offsetWidth / 2,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', () => {
            testimonialsCarousel.scrollBy({
                left: testimonialsCarousel.offsetWidth / 2,
                behavior: 'smooth'
            });
        });
    }

    // Legal Mentions Modal
    const legalLink = document.getElementById('legal-link');
    const legalModal = document.getElementById('legal-modal');
    const closeLegalModal = document.getElementById('close-legal-modal');
    const legalModalBackdrop = document.getElementById('legal-modal-backdrop');
    const legalModalPanel = document.getElementById('legal-modal-panel');

    const toggleLegalModal = (show) => {
        if (show) {
            legalModal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                legalModalBackdrop.classList.remove('opacity-0');
                legalModalPanel.classList.remove('scale-95', 'opacity-0');
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            legalModalBackdrop.classList.add('opacity-0');
            legalModalPanel.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                legalModal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300); // Match transition duration
        }
    };

    if (legalLink) {
        legalLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLegalModal(true);
        });
    }

    if (closeLegalModal) {
        closeLegalModal.addEventListener('click', () => toggleLegalModal(false));
    }

    if (legalModal) {
        // Close on click outside (backdrop)
        legalModal.addEventListener('click', (e) => {
            if (e.target === legalModal || e.target.closest('#legal-modal-panel') === null && e.target !== legalModalPanel) {
                // Determine if click was inside panel or not. 
                // However, the structure is backdrop + panel wrapper. 
                // The backdrop div is separate. but the wrapper covers the screen.
                // Let's rely on clicking the backdrop element specifically or the wrapper wrapper.
                // Actually, the panel is inside a wrapper `relative z-10 w-full h-full`.
                // If I click that wrapper, I am outside the panel.
            }
        });
        
        // Simpler approach: click on backdrop element closes it
        legalModalBackdrop.addEventListener('click', () => toggleLegalModal(false));
        // Also click on the flex container surrounding the panel (which acts as empty space)
        // Since panel stops propagation or we check target
        const panelWrapper = legalModal.querySelector('.relative.z-10');
        panelWrapper.addEventListener('click', (e) => {
            if (e.target === panelWrapper) {
                toggleLegalModal(false);
            }
        });
    }
});
