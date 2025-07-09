document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.about-link');
    const sections = document.querySelectorAll('.about-section');
    // Show only the active section on load
    function showActiveSection() {
        sections.forEach((section, idx) => {
            if (links[idx].classList.contains('active')) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    showActiveSection();
    links.forEach((link, idx) => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            showActiveSection();
        });
    });
});