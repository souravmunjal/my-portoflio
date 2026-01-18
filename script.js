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

// Page switching
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = item.getAttribute('data-page');
        showPage(pageId);
    });
});

function showPage(id) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(id + '-content').classList.add('active');
}