// scroll option
const about = document.querySelector(".aboutme")
const abouttag = document.querySelector(".about")
abouttag.addEventListener("click", () => {
    console.log("hello")
    const offsetTop = about.offsetTop
    window.scrollTo(0, offsetTop)
})
