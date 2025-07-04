
// This script toggles the navigation menu on smaller screens when the hamburger icon is clicked.
// It adds an 'active' class to the navigation links, which can be styled to show or hide the menu.
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// This script highlights the active link in the navigation menu based on the current page.
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    const path = window.location.pathname.split('/').pop();
    links.forEach(link => {
        if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href').includes('index.html'))) {
            link.classList.add('active');
        }
    });
});