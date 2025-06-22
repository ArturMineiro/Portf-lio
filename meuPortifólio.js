document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio de Artur Mineiro carregado com sucesso!');

    // Carrossel
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    if (carouselItems.length > 0) {
        carouselItems[currentIndex].classList.add('active');

        function showSlide(newIndex) {
            if (newIndex === currentIndex) return;

            const currentSlide = carouselItems[currentIndex];
            const nextSlide = carouselItems[newIndex];

            currentSlide.classList.remove('active');
            currentSlide.classList.add('exit-left');
            setTimeout(() => currentSlide.classList.remove('exit-left'), 500);

            nextSlide.classList.add('active');
            currentIndex = newIndex;
        }

        prevBtn?.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(newIndex);
        });

        nextBtn?.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(newIndex);
        });
    }

    // Botão "voltar ao topo"
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
    });

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Menu hamburguer
    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    toggle?.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
});
