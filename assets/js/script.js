// Only handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Card flip functionality
    const featuredCard = document.querySelector('.featured-card');
    if (featuredCard) {
        featuredCard.addEventListener('click', function() {
            const cardInner = this.querySelector('.card-inner');
            if (cardInner) {
                cardInner.classList.toggle('flipped');
                console.log('Card clicked!'); // For debugging
            }
        });
    }

    // Service cards navigation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            switch(index) {
                case 0:
                    window.location.href = 'tours.html';
                    break;
                case 1:
                    window.location.href = 'services.html';
                    break;
                case 2:
                    window.location.href = 'trips.html';
                    break;
            }
        });
    });

    // Hero section Explore Now button navigation
    const exploreBtn = document.querySelector('.hero-content .explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'tours.html';
        });
    }

    // Learn More button navigation
    const learnMoreBtn = document.querySelector('.featured-content .explore-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }

    // WhatsApp handler for all buttons
    const buttons = document.querySelectorAll('.book-now-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // For "Contact Us" button in services page
            if (this.textContent.trim() === 'Contact Us') {
                const message = `Hi, I'm interested in booking a vehicle for my trip.\n\nPlease provide information about:\n- Vehicle availability\n- Rates per day/km\n- Driver details\n- Booking process\n\nThank you!`;
                window.location.href = `https://wa.me/919958164882?text=${encodeURIComponent(message)}`;
            }
            // For tour package quotes
            else if (this.textContent.trim() === 'Get Quotes') {
                const tourName = this.closest('.tour-package').querySelector('h2').textContent;
                const message = `Hi, I would like to get a quote for ${tourName}. Please provide more information.`;
                window.location.href = `https://wa.me/919958164882?text=${encodeURIComponent(message)}`;
            }
        });
    });
});
