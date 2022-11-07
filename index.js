

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





const primary = document.querySelectorAll('.primary');
const secondy = document.querySelectorAll('.secondy');
const tercery = document.querySelectorAll('.tercery');


function subMenu() {
    let nextElement = this.nextElementSibling;
    let subMenuActive = 'submenu-active';


    ocultarElements();

    if (this.className.indexOf(subMenuActive) === -1) {

        if (nextElement.hidden == true) {
            nextElement.hidden = false;
            this.classList.add(subMenuActive)
        } else {
            nextElement.hidden = true;
            this.classList.remove(subMenuActive)
        }
    } else {
        nextElement.hidden = true;
        this.classList.remove(subMenuActive)
    }
}

primary.forEach((item) => {
    item.addEventListener('click', subMenu);
});

function ocultarElements() {
    secondy.forEach((item) => {
        item.hidden = true;
    })

    tercery.forEach((item) => {
        item.hidden = true;
    })
}






function siteOffline() {
    let listIcons = ['settings_suggest', 'compost', 'list_alt', 'attach_money', 'inventory_2', 'monetization_on']

    let listItems = document.querySelectorAll('.item');

    listItems.forEach(item => {
        listIcons.forEach(element => {
            if (element === item) {
                return true
            }
        });
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
retorna true depois de maximizar ou false quando minimizar
 */

function changeNavbar(minimizado) {
    let pai = document.querySelector('.navbar');
    let svg = document.querySelector('.logo-svg').children[0];
    let navbarActive = 'navbar-active'; // seletor css

    if (minimizado) {
        svg.style.transform = 'rotate(180deg)'
        pai.classList.remove(navbarActive);
        return false;

    } else {
        svg.style.transform = 'rotate(0deg)'
        pai.classList.add(navbarActive);
        return true;
    }
}