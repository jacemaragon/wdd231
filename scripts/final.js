const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mainContent = document.querySelector('main');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Dynamically set margin-top based on the height of the navigation when active
    if (navLinks.classList.contains('active')) {
        const navHeight = navLinks.scrollHeight;
        mainContent.style.marginTop = `${navHeight}px`; // Set margin to height of nav
    } else {
        mainContent.style.marginTop = '0'; // Reset margin when menu is hidden
    }
});
