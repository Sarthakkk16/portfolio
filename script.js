document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('visited')) {
        showMainPage();
    } else {
        sessionStorage.setItem('visited', 'true');
    }
});
function showMainPage() {
    document.getElementById('welcome-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    showSection('experience');
}
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.onclick.toString().includes(`'${sectionId}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}