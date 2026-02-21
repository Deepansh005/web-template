document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Optimized Fade-up animation using Batching for performance
    ScrollTrigger.batch(".fade-up", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            overwrite: true
        }),
        start: "top 90%"
    });

    // Mobile Menu Toggle with better cleanup
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('translate-x-full');
            if (isOpen) {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            }

            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            icon.textContent = isOpen ? 'menu' : 'close';
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
                mobileMenuBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
            });
        });
    }

    // Set Active Link in Navigation
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('text-white', 'border-primary');
            link.classList.remove('text-slate-300', 'text-slate-400');
            if (link.closest('nav')) link.classList.add('border-b-2');
        }
    });

    // Back to Top functionality
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.className = 'fixed bottom-8 right-8 z-[60] bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all';
    backToTopBtn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

