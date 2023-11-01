window.onload = function() {
    fetch('https://api.github.com/users/yourusername/repos')
        .then(response => response.json())
        .then(data => {
            let projectsContainer = document.getElementById('projects-container');
            data.forEach(repo => {
                let repoElement = document.createElement('div');
                repoElement.innerHTML = `<h2>${repo.name}</h2><p>${repo.description}</p>`;
                projectsContainer.appendChild(repoElement);
            });
        });
};

