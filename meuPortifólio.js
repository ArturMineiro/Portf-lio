document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio de Artur Mineiro carregado com sucesso!');

    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    let currentIndex = 0;

    // Ativa o primeiro slide assim que a página carregar
    carouselItems[currentIndex].classList.add('active');

    function showSlide(newIndex) {
        if (newIndex === currentIndex) return;

        const currentSlide = carouselItems[currentIndex];
        const nextSlide = carouselItems[newIndex];

        // Remove active do atual e aplica classe de saída
        currentSlide.classList.remove('active');
        currentSlide.classList.add('exit-left');

        // Remove exit após a transição
        setTimeout(() => {
            currentSlide.classList.remove('exit-left');
        }, 500); // 500ms deve bater com o tempo da animação no CSS

        // Ativa o novo slide
        nextSlide.classList.add('active');

        // Atualiza o índice atual
        currentIndex = newIndex;
    }

    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(newIndex);
    });

    // Mostrar botão de "voltar ao topo" ao rolar a página
    window.onscroll = function () {
        scrollTopBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
