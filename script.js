// Get elements
const toggleButton = document.getElementById('toggle-dark-mode');
const modeText = document.getElementById('mode-text');

// Toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Update text based on mode
    if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = "You're in Dark Mode";
    } else {
        modeText.textContent = "You're in Light Mode";
    }
});

// Initialize default mode
document.body.classList.add('light-mode');
