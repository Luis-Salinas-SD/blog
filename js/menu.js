//aparece y desaparece el menu al tocar el icono de hamburguesa
const hamburger = document.querySelector('.menu-icon');
const nav_menu = document.querySelector('.mobile')

hamburger.addEventListener('click', () => {
    nav_menu.classList.toggle("spread")
    console.log('algo');
})


const opcion = document.querySelectorAll(".opcion");
//Permite recorrer cada una de nuestras opciones
opcion.forEach((e) => {
    //Añadir un evento a cada elemento recorrido
    e.addEventListener("click", function (e) {
        //Alteramos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle("animacion");
        padre.parentNode.children[1].classList.toggle("animacion");
    });
});