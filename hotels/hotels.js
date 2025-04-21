document.addEventListener('DOMContentLoaded', function() {
    // Hotel data (in a real app, this would come from an API)
    const hotelsData = {
        delhi: [
            {
                id: 1,
                name: "The Grand Delhi",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                price: 4500,
                rating: 4.5,
                amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
                policeStation: "Connaught Place PS (1.2 km)",
                railwayStation: "New Delhi Railway Station (3.5 km)",
                airport: "Indira Gandhi Airport (12 km)",
                description: "Luxury hotel in the heart of Delhi with world-class amenities and services."
            },
            {
                id: 2,
                name: "Taj Mahal Hotel",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
                price: 8500,
                rating: 4.8,
                amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym"],
                policeStation: "Parliament Street PS (0.8 km)",
                railwayStation: "New Delhi Railway Station (4 km)",
                airport: "Indira Gandhi Airport (14 km)",
                description: "Iconic 5-star hotel offering luxurious rooms and exceptional service."
            },
            {
                id: 3,
                name: "Hyatt Regency",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
                price: 6500,
                rating: 4.3,
                amenities: ["Free WiFi", "Pool", "Restaurant", "Gym"],
                policeStation: "RK Puram PS (2 km)",
                railwayStation: "Hazrat Nizamuddin Station (5 km)",
                airport: "Indira Gandhi Airport (10 km)",
                description: "Modern hotel with excellent facilities and convenient location."
            }
        ],
        chennai: [
            {
                id: 1,
                name: "The Park Chennai",
                image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac",
                price: 5000,
                rating: 4.4,
                amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
                policeStation: "Egmore PS (1 km)",
                railwayStation: "Chennai Central (2 km)",
                airport: "Chennai Airport (12 km)",
                description: "Contemporary hotel with stylish decor and excellent dining options."
            },
            {
                id: 2,
                name: "Taj Coromandel",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                price: 9000,
                rating: 4.7,
                amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym", "Beach Access"],
                policeStation: "Nungambakkam PS (0.5 km)",
                railwayStation: "Chennai Central (3 km)",
                airport: "Chennai Airport (14 km)",
                description: "Luxurious 5-star hotel known for its impeccable service and facilities."
            }
        ]
    };

    // DOM elements
    const destinationSelect = document.getElementById('destination');
    const searchBtn = document.getElementById('search-hotels');
    const hotelCardsContainer = document.getElementById('hotel-cards');
    const selectedDestinationSpan = document.getElementById('selected-destination');
    const sortSelect = document.getElementById('sort-by');

    // Default display (Delhi hotels)
    displayHotels(hotelsData.delhi);
    selectedDestinationSpan.textContent = 'Delhi';

    // Search hotels
    searchBtn.addEventListener('click', function() {
        const destination = destinationSelect.value;
        
        if (!destination) {
            alert('Please select a destination');
            return;
        }
        // Update selected destination in UI
        const destinationName = destinationSelect.value;
        console.log(destinationName);
        selectedDestinationSpan.textContent = destinationName;
        
        // Display hotels for selected destination
        if (hotelsData[destination]) {
            displayHotels(hotelsData[destination]);
        } else {
            hotelCardsContainer.innerHTML = '<p class="no-results">No hotels found for this destination</p>';
        }
    });

    // Sort hotels
    sortSelect.addEventListener('change', function() {
        const destination = destinationSelect.value || 'delhi';
        const sortBy = sortSelect.value;
        let hotels = hotelsData[destination] || hotelsData.delhi;
        
        switch(sortBy) {
            case 'price-low':
                hotels = [...hotels].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                hotels = [...hotels].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                hotels = [...hotels].sort((a, b) => b.rating - a.rating);
                break;
            case 'distance':
                // In a real app, you would sort by actual distance
                hotels = [...hotels].sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
        
        displayHotels(hotels);
    });

    // Display hotels function
    function displayHotels(hotels) {
        hotelCardsContainer.innerHTML = hotels.map(hotel => `
            <div class="hotel-card">
                <div class="hotel-image">
                    <img src="${hotel.image}" alt="${hotel.name}">
                    <div class="hotel-price">₹${hotel.price}/night</div>
                </div>
                <div class="hotel-details">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <div class="hotel-rating">
                        <i class="fas fa-star"></i>
                        <span>${hotel.rating}</span>
                    </div>
                    <div class="hotel-amenities">
                        ${hotel.amenities.map(amenity => `
                            <span class="amenity">
                                <i class="fas fa-check"></i>
                                ${amenity}
                            </span>
                        `).join('')}
                    </div>
                    <div class="hotel-location">
                        <div class="location-info">
                            <i class="fas fa-shield-alt"></i>
                            <span>${hotel.policeStation}</span>
                        </div>
                        <div class="location-info">
                            <i class="fas fa-train"></i>
                            <span>${hotel.railwayStation}</span>
                        </div>
                        <div class="location-info">
                            <i class="fas fa-plane"></i>
                            <span>${hotel.airport}</span>
                        </div>
                    </div>
                    <a href="#" class="book-btn" data-hotel-id="${hotel.id}">Book Now</a>
                </div>
            </div>
        `).join('');
    }

    // Book hotel button click
    hotelCardsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('book-btn')) {
            e.preventDefault();
            const hotelId = e.target.getAttribute('data-hotel-id');
            const destination = destinationSelect.value || 'delhi';
            const hotel = hotelsData[destination].find(h => h.id == hotelId);
            
            alert(`Booking ${hotel.name} for ₹${hotel.price}/night`);
            // In a real app, you would redirect to a booking page or open a modal
        }
    });

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        alert('You have been logged out');
        window.location.href = 'index.html';
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});