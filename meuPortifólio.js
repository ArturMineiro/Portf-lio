document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio de Artur Mineiro carregado com sucesso!');

    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Mostrar o primeiro slide no início
    showSlide(currentIndex);
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio de Artur Mineiro carregado com sucesso!');

    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Mostrar o primeiro slide no início
    showSlide(currentIndex);

    // Função para rolar a página para o topo
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
