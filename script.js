// scroll option
const about = document.querySelector(".aboutme")
const abouttag = document.querySelector(".about")
abouttag.addEventListener("click", () => {
    const offsetTop = about.offsetTop
    window.scrollTo(0, offsetTop)
})


const myskill = document.querySelector(".my-skills-section-main")
document.querySelector(".myskill").addEventListener("click", () => {
    const offsetTop = myskill.offsetTop
    window.scrollTo(0, offsetTop)
})
const project = document.querySelector(".portfolio")
document.querySelector(".project").addEventListener("click", () => {
    const offsetTop = project.offsetTop
    window.scrollTo(0, offsetTop)
})


const contactMe = document.querySelector(".scrool")
document.querySelector(".contact-me").addEventListener("click", () => {
    const offsetTop = contactMe.offsetTop
    window.scrollTo(0, offsetTop)
})
