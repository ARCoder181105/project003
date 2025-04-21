// Delay animation for place cards
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.place-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
