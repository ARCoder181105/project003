document.addEventListener('DOMContentLoaded', function() {
    // Sample flight data
    const flights = [
        {
            id: 1,
            airline: "Air India",
            logo: "https://media.assettype.com/creativegaga%2F2023-08%2F7605006c-4e86-45ed-a5cd-cb00cbb32461%2FAirIndia_NewLogo.webp",
            departureTime: "08:30",
            departurePlace: "DEL",
            arrivalTime: "11:00",
            arrivalPlace: "BOM",
            duration: "2h 30m",
            price: 5499,
            type: ["Non-stop"],
            departureDate: "2023-12-15",
            arrivalDate: "2023-12-15"
        },
        {
            id: 2,
            airline: "IndiGo",
            logo: "https://play-lh.googleusercontent.com/zG1e9Pdw27RYpUo_TpSZcD-zjCeShkN5pxwgy7L-e9hra170T_SpBzcUc5nsBu3gWQ",
            departureTime: "10:15",
            departurePlace: "DEL",
            arrivalTime: "12:45",
            arrivalPlace: "BOM",
            duration: "2h 30m",
            price: 4999,
            type: ["Non-stop"],
            departureDate: "2023-12-15",
            arrivalDate: "2023-12-15"
        },
        {
            id: 3,
            airline: "Vistara",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Vistara_Logo.svg/800px-Vistara_Logo.svg.png",
            departureTime: "14:20",
            departurePlace: "DEL",
            arrivalTime: "17:50",
            arrivalPlace: "BOM",
            duration: "2h 30m",
            price: 6499,
            type: ["Non-stop"],
            departureDate: "2023-12-15",
            arrivalDate: "2023-12-15"
        },
        {
            id: 4,
            airline: "SpiceJet",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0Uqynrm5ck04ITB5nOBf6o_CiUMvJHdLlw&s",
            departureTime: "18:45",
            departurePlace: "DEL",
            arrivalTime: "21:15",
            arrivalPlace: "BOM",
            duration: "2h 30m",
            price: 4299,
            type: ["Non-stop"],
            departureDate: "2023-12-15",
            arrivalDate: "2023-12-15"
        }
    ];

    // DOM elements
    const searchBtn = document.getElementById('search-flights');
    const flightCardsContainer = document.getElementById('flight-cards');
    const sortSelect = document.getElementById('sort-by');

    // Display initial flights
    displayFlights(flights);

    // Search button click handler
    searchBtn.addEventListener('click', function() {
        // In a real app, this would fetch from API
        alert('Search functionality would connect to flight API in production');
        displayFlights(flights);
    });

    // Sort functionality
    sortSelect.addEventListener('change', function() {
        const sortedFlights = [...flights];
        const sortBy = this.value;
        
        switch(sortBy) {
            case 'price':
                sortedFlights.sort((a, b) => a.price - b.price);
                break;
            case 'duration':
                // In a real app, convert duration to minutes for sorting
                sortedFlights.sort((a, b) => a.duration.localeCompare(b.duration));
                break;
            case 'departure':
                sortedFlights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
                break;
            case 'arrival':
                sortedFlights.sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime));
                break;
        }
        
        displayFlights(sortedFlights);
    });

    // Display flights function
    function displayFlights(flightsToDisplay) {
        flightCardsContainer.innerHTML = flightsToDisplay.map(flight => `
            <div class="flight-card">
                <div class="flight-header">
                    <div class="airline">
                        <img src="${flight.logo}" alt="${flight.airline}" class="airline-logo">
                        <span class="airline-name">${flight.airline}</span>
                    </div>
                    <div class="flight-price">₹${flight.price}</div>
                </div>
                
                <div class="flight-details">
                    <div class="departure">
                        <span class="time">${flight.departureTime}</span>
                        <span class="place">${flight.departurePlace}</span>
                        <span class="date">${flight.departureDate}</span>
                    </div>
                    
                    <div class="duration">
                        <span>${flight.duration}</span>
                        <div class="duration-line"></div>
                    </div>
                    
                    <div class="arrival">
                        <span class="time">${flight.arrivalTime}</span>
                        <span class="place">${flight.arrivalPlace}</span>
                        <span class="date">${flight.arrivalDate}</span>
                    </div>
                </div>
                
                <div class="flight-footer">
                    <div class="flight-type">
                        ${flight.type.map(type => `<span>${type}</span>`).join('')}
                    </div>
                    <button class="book-btn" data-flight-id="${flight.id}">Book Now</button>
                </div>
            </div>
        `).join('');
    }

    // Book button click handler
    flightCardsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('book-btn')) {
            const flightId = e.target.getAttribute('data-flight-id');
            const flight = flights.find(f => f.id == flightId);
            alert(`Booking ${flight.airline} flight for ₹${flight.price}`);
            // In a real app, redirect to booking page
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});