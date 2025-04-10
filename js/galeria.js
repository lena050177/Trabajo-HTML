
// Scroll de header

const navbar = document.querySelector (".navbar")

function scrollNavbar () {

    if (window.scrollY < 400) {
        navbar.classList.remove ("nav-scroll")
    } else {
        navbar.classList.add ("nav-scroll")
    }
};

window.addEventListener ("scroll", scrollNavbar )

// Scroll galeria
const elements = document.querySelectorAll(".image, .text-top, .text-servicio")

function mostrarElements() {
    const altura = window.innerHeight * 0.8

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
    
        if (elementTop < altura) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });
}

window.addEventListener ("scroll", mostrarElements)