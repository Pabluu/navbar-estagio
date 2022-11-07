

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};

const theme = localStorage.getItem('theme')
|| (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}




let secondy = document.querySelectorAll('.secondy')
let elementPrimary;
let itemsOcultar = false


function expandirMenu() {
    elementPrimary = this
    nextElement = elementPrimary.nextElementSibling;
    
    while (nextElement !== null){
        nextElement.hidden = itemsOcultar
        nextElement = nextElement.nextElementSibling
    }

    itemsOcultar = itemsOcultar == false  ? true : false
    
}

// add um evento de click nos elemento primary
let primary = document.querySelectorAll('.primary');
primary.forEach((item) => {
    item.addEventListener('click', expandirMenu);
});

function ocultarElements() {
    secondy.forEach((item) => {
        item.hidden = true;
    })

    tercery.forEach((item) => {
        item.hidden = true;
    })
}




let minimizado = false;

/* Função para ocultar a navbar */
function ocultarNavbar() {
    let navText = document.querySelector(".logo-text")
    let sigla = 'apli sistemas'

    // maximizar navbar
    if (minimizado == true) {
        minimizado = changeNavbar(true)
    } else { // minimizar navbar
        sigla = 'as'
        minimizado = changeNavbar(false)

    }

    navText.innerText = sigla;
}

/*
função auxiliar da função "ocultarNavbar"
retorna true depois de minimizar ou false quando maximizar
*/

function changeNavbar(minimizado) {
    let navbar = document.querySelector('.navbar');
    let svg = document.querySelector('.logo-svg').children[0];
    let navbarActive = 'navbar-active'; // seletor css

    if (minimizado) {
        svg.style.transform = 'rotate(180deg)'
        navbar.classList.remove(navbarActive);
        return false;

    } else {
        svg.style.transform = 'rotate(0deg)'
        navbar.classList.add(navbarActive);
        return true;
    }
}