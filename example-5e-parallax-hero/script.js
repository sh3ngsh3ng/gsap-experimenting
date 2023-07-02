let parallax = gsap.timeline();

parallax
    .to('#bg', {
        scale: 1.1
    })
    .to('#plane', {
        scale: 2
    }, "<")

ScrollTrigger.create({
    animation: parallax,
    trigger: '.parallax',
    start: 'top top',
    end: 'bottom',
    scrub: 1,
    markers: true
})