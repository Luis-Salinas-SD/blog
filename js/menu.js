//aparece y desaparece el menu al tocar el icono de hamburguesa
const hamburger = document.querySelector('.menu-icon');
const nav_menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
    nav_menu.classList.toggle("spread")
    console.log('algo');
})