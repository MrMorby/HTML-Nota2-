// Función para hacer scroll hacia arriba
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Función para mostrar u ocultar el botón
function toggleButtonVisibility() {
    const button = document.getElementById('volver-arriba');
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    const footerVisible = footerRect.top <= window.innerHeight;

    if (footerVisible) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
}

// Añadir el evento scroll para verificar la visibilidad del botón
window.addEventListener('scroll', toggleButtonVisibility);
