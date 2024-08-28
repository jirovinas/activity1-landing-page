function toggleContent(id) {
    const content = document.getElementById('content-' + id);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}
