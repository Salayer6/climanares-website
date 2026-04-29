// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation background change on scroll
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 11, 24, 0.9)';
            nav.style.padding = '0.5rem 0';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
            nav.style.background = 'rgba(5, 11, 24, 0.1)';
            nav.style.padding = '1rem 0';
            nav.style.boxShadow = 'none';
        }
    });

    // 2. Reveal elements on scroll using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Intersection event:', entry.target.tagName, entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Parallax effect for hero blobs and 'Giro' perfection
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });

        // Perfecting the giro: slight rotation follow for the hero visual
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `rotate(${2 + x * 5}deg) scale(${1 + Math.abs(y) * 0.05})`;
        }
    });

    // 5. Scroll-based rotation for a dynamic feel
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            const speed = (index + 1) * 0.05;
            const rotation = (scrolled * speed) % 2 - 1; // subtle oscillation
            if (card.classList.contains('active')) {
                // We don't want to override the hover transform, so we just use a CSS variable
                card.style.setProperty('--scroll-rotation', `${rotation}deg`);
            }
        });
    });
});
