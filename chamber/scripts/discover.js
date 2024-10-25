// Toggle hamburger menu visibility
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the 'show' class
});

// Close the menu when a link is clicked
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('show'); // Hide the menu when a link is clicked
    }
});

// Visitor Information using localStorage
const visitorInfo = document.getElementById('visitor-info');

// Check if visitor name is in localStorage
const visitorName = localStorage.getItem('visitorName');

if (visitorName) {
    visitorInfo.textContent = ` Welcome back, ${visitorName}! We're glad to see you again!` ;
} else {
    const name = prompt('Welcome! Please enter your name:');
    localStorage.setItem('visitorName', name);
    visitorInfo.textContent = ` Welcome, ${name}! Enjoy your visit!` ;
}