// Initialize Lenis Smooth Scroll
const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger)

// Header Scroll Effect
const header = document.querySelector('.main-header')
lenis.on('scroll', (e) => {
    if (e.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

// Animations Removed for Classic Static Layout
// Elements are visible by default via CSS

// Hero Image Parallax
gsap.to(".hero-image", {
    y: "20%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
})
