document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.getElementById('particle-container');
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 4 + Math.random() * 6;

        particle.style.left = `${left}vw`;
        particle.style.top = `${top}vh`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particleContainer.appendChild(particle);

        particle.addEventListener('animationiteration', () => {
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${90 + Math.random() * 10}vh`; // spawn at the bottom
        });
    }

    const cards = document.querySelectorAll('.glass-panel:not(.zillow-theme)');
    
    // Smooth 3D tilt effect for non-touch devices
    if(window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener("mousemove", (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
    
            cards.forEach(card => {
                card.style.transform = `translateY(-2px) perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
        });
    
        document.addEventListener("mouseleave", () => {
            cards.forEach(card => {
                card.style.transform = `translateY(0) perspective(1000px) rotateY(0deg) rotateX(0deg)`;
            });
        });
    }
});
