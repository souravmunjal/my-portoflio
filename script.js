// Project selection
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        showProjectDetail(projectId);
    });
});

function showProjectDetail(id) {
    document.querySelectorAll('.project-detail').forEach(detail => detail.classList.remove('active'));
    document.getElementById('detail' + id).classList.add('active');
}