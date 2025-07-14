// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    const details = document.getElementById('projectDetails');

    // Add click event listener
    button.addEventListener('click', function() {
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            button.textContent = 'Hide Project Details';
        } else {
            details.style.display = 'none';
            button.textContent = 'Show Project Details';
        }
    });
});
