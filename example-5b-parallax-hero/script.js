gsap.registerPlugin(ScrollTrigger)

let hero = document.querySelector("#hero-banner-section")

let animation = gsap.timeline({
    scrollTrigger: {
        trigger: hero,
        markers: true,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true
    }
})


animation.to('#sixth', {
    duration: 1,
    y: -700,
    ease: 'power1'
})
    .to('#fifth', {
        duration: 1,
        y: -500,
        ease: 'power1'
    }, '<')
    .to('#fourth', {
        duration: 1,
        y: -400,
        ease: 'power1'
    }, '<')
    .to('#third', {
        duration: 1,
        y: -300,
        ease: 'power1'
    }, '<')
    .to('#second', {
        duration: 1,
        y: -200,
        ease: 'power1'
    }, '<')
    .to('#first', {
        duration: 1,
        y: -100,
        ease: 'power1'
    }, '<')
    .to('.blur', {
        duration: 1,
        top: '0%',
        // y: -100
    }, '<')
    .to('.content', {
        duration: 1,
        top: '0%',
        // y: -100
    }, '<')



// ScrollTrigger.create({
//     trigger: hero,
//     start: "top 90%",
//     toggleActions: "play none none reverse",
//     animation: animation
// })
// gsap.to('img', {
//     stagger: 0.5,
//     y: -100,
//     scrollTrigger: {
//         trigger: '.images',
//         start: 'top top',
//         end: '+=200px',
//         markers: true,
//         // pin: true,
//         scrub: true
//     }
// })


// gsap.to('#sixth', {
//     yPercent: -100,
//     scrollTrigger: {
//         trigger: '.images',
//         start: 'top top',
//         end: '+=200px',
//         markers: true
//     }
// })