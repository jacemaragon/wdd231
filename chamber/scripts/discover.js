
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); 
});


navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('show'); 
    }
});


const visitorInfo = document.getElementById('visitor-info');


const visitorName = localStorage.getItem('visitorName');

if (visitorName) {
    visitorInfo.textContent = ` Welcome back, ${visitorName}! We're glad to see you again!` ;
} else {
    const name = prompt('Welcome! Please enter your name:');
    localStorage.setItem('visitorName', name);
    visitorInfo.textContent = ` Welcome, ${name}! Enjoy your visit!` ;
}