// project-ideas.js
document.addEventListener('DOMContentLoaded', () => {
    const projectIdeasForm = document.getElementById('projectIdeasForm');
    const ideasContainer = document.getElementById('ideasContainer');

    projectIdeasForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('ideaTitle').value;
        const description = document.getElementById('ideaDescription').value;
        const implementation = document.getElementById('ideaImplementation').value;

        const idea = document.createElement('div');
        idea.classList.add('idea');

        const ideaContent = `
            <h3>${title}</h3>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Implementation:</strong> ${implementation}</p>
        `;

        idea.innerHTML = ideaContent;
        ideasContainer.appendChild(idea);

        projectIdeasForm.reset();
    });
});