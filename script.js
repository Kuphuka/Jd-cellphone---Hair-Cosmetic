document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');
    const closeLightbox = () => {
        lightbox.hidden = true;
        document.body.classList.remove('no-scroll');
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.innerHTML = isOpen ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
    });

    siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }));

    document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
        const image = item.querySelector('img');
        lightboxImage.src = item.dataset.full;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
        document.body.classList.add('no-scroll');
    }));

    lightbox.addEventListener('click', event => {
        if (event.target === lightbox || event.target === lightbox.querySelector('.lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
});