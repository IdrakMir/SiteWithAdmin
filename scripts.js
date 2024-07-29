window.onload = function () {
    const title = localStorage.getItem('pageTitle');
    const content = localStorage.getItem('pageContent');

    if (title) {
        document.getElementById('page-title').textContent = title;
    }
    if (content) {
        document.getElementById('page-content').textContent = content;
    }
};
