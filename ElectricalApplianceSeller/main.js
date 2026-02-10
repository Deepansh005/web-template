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

// Entrance Animations for Text
const revealTexts = document.querySelectorAll('.reveal-text')
revealTexts.forEach((text) => {
    gsap.from(text, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    })
})

// Entrance Animations for Images
const revealImages = document.querySelectorAll('.reveal-image')
revealImages.forEach((img) => {
    gsap.from(img, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
            trigger: img,
            start: "top 80%",
        }
    })
})

// Product Cards Magnetic/Hover Effect
const productCards = document.querySelectorAll('.product-card')
productCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / 25
        const y = (e.clientY - top - height / 2) / 25

        gsap.to(card, {
            rotateY: x,
            rotateX: -y,
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out"
        })
    })

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        })
    })
})

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
