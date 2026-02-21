document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Fade-up animation for section elements
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            if (mobileMenu.classList.contains('translate-x-full')) {
                icon.textContent = 'menu';
            } else {
                icon.textContent = 'close';
            }
        });
    }

    // Set Active Link in Navigation Based on Current Page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('text-white');
            link.classList.remove('text-slate-300', 'text-slate-400');
            // Adding an active underline indicator
            link.classList.add('border-b-2', 'border-primary');
        }
    });
});
