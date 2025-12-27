// Função para animação ao rolar a página
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

animatedElements.forEach(el => {
    observer.observe(el);
});

const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage({ method: 'setVolume', value: 1 }, '*');
