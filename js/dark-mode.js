function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = html.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved preference or system preference on page load
function initDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDark)) {
        document.documentElement.classList.add('dark-mode');
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initDarkMode);