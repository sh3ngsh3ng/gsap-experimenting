gsap.registerPlugin(ScrollTrigger);
gsap.set('.card', { position: 'absolute' })
gsap.to('.card', {
    yPercent: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#cards',
        markers: true,
        start: 'top top',
        end: '+=2000px',
        scrub: true,
        pin: true,
    }
})