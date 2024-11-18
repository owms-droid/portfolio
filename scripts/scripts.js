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
        "Python", "SQL", "Git", "Django", "Responsive Design"
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
        { name: "Chamber of Commerce Site", description: "Built a full-stack Chamber of Commerce site using HTML, JavaScript, and CSS" },
        { name: "Weather App", description: "Developed a weather application using vanilla JavaScript and OpenWeatherMap API" },
        { name: "Task Manager", description: "Created a task management app with user authentication using Node.js and MongoDB" }
    ];

    // Populate projects
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });
});