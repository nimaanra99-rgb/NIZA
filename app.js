document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});
