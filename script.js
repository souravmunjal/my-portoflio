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

// Tab switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        showTab(tabId);
    });
});

function showTab(id) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`[data-tab="${id}"]`).classList.add('active');
    document.getElementById(id).classList.add('active');
}