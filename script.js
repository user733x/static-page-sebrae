document.addEventListener('DOMContentLoaded', function() {
    // Data do evento: 08 de outubro de 2025 às 14h (horário local do Brasil)
    const eventDate = new Date('2025-10-08T14:00:00-03:00'); // 14h do dia 08/10/2025 (Brasil)
    
    // Otimização do carregamento da imagem de background
    function preloadBackgroundImage() {
        const img = new Image();
        img.onload = function() {
            const backgroundElement = document.querySelector('.background-gradient');
            if (backgroundElement) {
                backgroundElement.classList.add('loaded');
            }
        };
        img.src = 'asset/images/homem-image.png';
    }
    
    // Preload da imagem de background
    preloadBackgroundImage();
    
    // Cria efeitos de iluminação premium na página principal
    createPremiumLighting();
    
    function createPremiumLighting() {
        const particlesContainer = document.getElementById('glow-particles');
        if (!particlesContainer) return;
        
        // Cria partículas de brilho flutuantes
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'glow-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 6}s`;
            particle.style.animationDuration = `${4 + Math.random() * 4}s`;
            particle.style.width = `${2 + Math.random() * 3}px`;
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate.getTime() - now;
        
        if (timeLeft > 0) {
            // Calcula dias, horas, minutos e segundos
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Atualiza os elementos com animação
            updateNumberWithAnimation('days', days.toString().padStart(2, '0'));
            updateNumberWithAnimation('hours', hours.toString().padStart(2, '0'));
            updateNumberWithAnimation('minutes', minutes.toString().padStart(2, '0'));
            updateNumberWithAnimation('seconds', seconds.toString().padStart(2, '0'));
        } else {
            // Evento já passou - zera o contador
            updateNumberWithAnimation('days', '00');
            updateNumberWithAnimation('hours', '00');
            updateNumberWithAnimation('minutes', '00');
            updateNumberWithAnimation('seconds', '00');
            
            // Para o intervalo quando o evento terminar
            clearInterval(countdownInterval);
        }
    }
    
    function updateNumberWithAnimation(elementId, newValue) {
        const element = document.getElementById(elementId);
        if (element && element.textContent !== newValue) {
            // Animação de mudança
            element.style.transform = 'scale(0.8)';
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            
            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'scale(1)';
                element.style.backgroundColor = 'rgba(0,0,0,0.9)';
            }, 150);
        }
    }
    
    // Inicia a contagem
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
