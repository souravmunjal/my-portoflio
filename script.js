// Project selection
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        console.log('Project clicked:', projectId);
        showProjectDetail(projectId);
    });
});

function showProjectDetail(id) {
    console.log('Showing project detail:', id);
    document.querySelectorAll('.project-detail').forEach(detail => detail.classList.remove('active'));
    document.getElementById('detail' + id).classList.add('active');
}

// Page switching
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = item.getAttribute('data-page');
        console.log('Menu clicked:', pageId);
        showPage(pageId);
    });
});

function showPage(id) {
    console.log('Showing page:', id);
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(id + '-content').classList.add('active');
}