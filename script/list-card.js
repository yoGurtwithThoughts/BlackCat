document.addEventListener('DOMContentLoaded', () => {
    const cardsPerPage = 3; // Number of cards per page
    let currentPage = 0; // Start from the first page

    const cards = document.querySelectorAll('#product-cards .col-md-4');
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    function showPage(page) {
        const start = page * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            card.style.display = 'none'; // Hide all cards
            if (index >= start && index < end) {
                card.style.display = 'block'; // Show cards for the current page
            }
        });

        // Disable buttons if at first or last page
        document.getElementById('prevButton').disabled = page === 0;
        document.getElementById('nextButton').disabled = page === totalPages - 1;
    }

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--; // Decrease page number
            showPage(currentPage);
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++; // Increase page number
            showPage(currentPage);
        }
    });

    // Show the first page initially
    showPage(currentPage);
});