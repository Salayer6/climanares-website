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

    // 4. Parallax effect for hero blobs (optional micro-animation)
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});
