document.addEventListener('DOMContentLoaded', (event) => {
    // Toggle mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = 60;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Skills data
    const skills = [
        "JavaScript", "HTML", "CSS", "C#", "Node.js", 
        "Python", "SQL", "Git", "Django", ".NET"
    ];

    // Populate skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('skill-card');
        skillCard.textContent = skill;
        skillsContainer.appendChild(skillCard);
    });

    // Projects data
    const projects = [
        { name: "Chamber of Commerce Site", description: "Built a full-stack Chamber of Commerce site using HTML, JavaScript, and CSS", link: "https://owms-droid.github.io/wdd231/chamber/" },
        { name: "Scoreboard Web App", description: "Developed a simple scoreboard application using JavaScript and CSS", link: "https://oliver-simple-scoreboard.netlify.app/" },
        { name: "Asteroids Game", description: "Created a game with Python, applying concepts like Inheritance, Polymorphism", link: "http://www.google.com" }
    ];

    // Populate projects
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        `;
        projectsContainer.appendChild(projectCard);
    });
});