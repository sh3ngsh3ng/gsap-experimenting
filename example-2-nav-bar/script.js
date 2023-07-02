gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a")
const activeNav = document.querySelector(".active-nav")

links.forEach((link) => {
    link.addEventListener('click', (evt) => {
        gsap.to(links, { color: "#252525" })

        if (document.activeElement === link) {
            console.log("here")
            gsap.to(link, { color: "#e20707" })
        }

        const state = Flip.getState(activeNav)
        link.appendChild(activeNav)
        Flip.from(state, {
            duration: 1,
            absolute: true,
            ease: 'elastic.out(1,0.5)'
        })
    })
})