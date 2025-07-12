document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');

    async function loadProjects() {
        try {
            const response = await fetch('scripts/resume.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const projects = await response.json();
            grid.innerHTML = projects.projects.map(project => `
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.name} Screenshot">
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-desc">${project.description}</p>
                        <div class="project-tags">
                            ${project.technologies.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <a href="${project.live_demo}" target="_blank" class="project-link">View Live</a>
                    </div>
                </div>
            `).join('');
        } catch (err) {
            grid.innerHTML = '<p>Unable to load projects.</p>';
            console.error('Error loading projects:', err);
        }
    }

    loadProjects();
});