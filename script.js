// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project navigation
let currentProject = 1;
const totalProjects = 1; // Update this as more projects are added

function showProject(index) {
    document.querySelectorAll('.project').forEach(p => p.classList.remove('active'));
    document.getElementById('project' + index).classList.add('active');
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentProject = currentProject > 1 ? currentProject - 1 : totalProjects;
    showProject(currentProject);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentProject = currentProject < totalProjects ? currentProject + 1 : 1;
    showProject(currentProject);
});