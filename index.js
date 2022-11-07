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



/*
Função para expandir/minimizar o item-menu
*/
function expandirMenu() {
    sibling = this.nextElementSibling;

    while (sibling !== null) {
        if (sibling.hidden) { //exibe conteudo
            sibling.hidden = false
        } else { //oculta conteudo
            sibling.hidden = true
        }

        sibling = sibling.nextElementSibling
    }

}

// add um evento de click nos elemento primary
let primary = document.querySelectorAll('.primary');
let secondy = document.querySelectorAll('.secondy');

primary.forEach((item) => {
    item.addEventListener('click', expandirMenu);
});


let navbarMinimizado = false;

/* Função para expandir/minimizar a navbar */
function ocultarNavbar() {
    let navText = document.querySelector(".logo-text")
    let sigla = 'apli sistemas'

    // maximizar navbar
    if (navbarMinimizado == true) {
        navbarMinimizado = changeNavbar(true)
    } else { // minimizar navbar
        sigla = 'as'
        navbarMinimizado = changeNavbar(false)
    }

    navText.innerText = sigla;
}

/*
função auxiliar da função "ocultarNavbar"
retorna true depois de minimizar ou false quando maximizar
*/

function changeNavbar(navbarMinimizado) {
    let navbar = document.querySelector('.navbar');
    let svg = document.querySelector('.logo-svg').children[0];
    let navbarActive = 'navbar-active'; // seletor css

    if (navbarMinimizado) {
        svg.style.transform = 'rotate(180deg)'
        navbar.classList.remove(navbarActive);
        return false;

    } else {
        svg.style.transform = 'rotate(0deg)'
        navbar.classList.add(navbarActive);
        return true;
    }
}