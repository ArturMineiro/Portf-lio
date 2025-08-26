document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio de Artur Mineiro carregado com sucesso!');

    // Menu hamburguer
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const navList = document.getElementById('nav-list');
    
    menuToggleBtn?.addEventListener('click', () => {
      navList.classList.toggle('open');
    
      // Alternar o texto do botão
      if (navList.classList.contains('open')) {
        menuToggleBtn.textContent = '✖';
      } else {
        menuToggleBtn.textContent = '☰ Menu';
      }
    });

    // Botão "voltar ao topo"
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
    });

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});