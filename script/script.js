document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
        section.classList.add('visible');
        } else {
        section.classList.remove('visible');
        }
    });
    };

    // Ocultar el preloader y mostrar el contenido
    window.onload = () => {
    preloader.style.display = 'none';
      revealSection(); // Llamada inicial para animar las secciones visibles al cargar la página
    };

    window.addEventListener('scroll', revealSection);
});