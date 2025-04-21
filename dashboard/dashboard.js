document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper with proper navigation
    const swiper = new Swiper('.destination-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        alert('You have been logged out');
        window.location.href = 'index.html';
    });

    // Trip planner cards functionality
    const plannerCards = document.querySelectorAll('.planner-card');
    
    plannerCards.forEach(card => {
        card.addEventListener('click', function() {
            const id = this.id;
            
            switch(id) {
                case 'hotels':
                    window.location.href = '/hotels/hotels.html';
                    break;
                case 'flights':
                    window.location.href = '/flights/flights.html';
                    break;
                case 'trains':
                    alert('Train booking feature coming soon!');
                    break;
                case 'taxis':
                    alert('Taxi booking feature coming soon!');
                    break;
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });


    // Inside the destination card click handler (if any)
document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const destination = this.closest('.destination-card').dataset.destination;
        window.location.href = `/destination/${destination}.html`;
    });
});


});