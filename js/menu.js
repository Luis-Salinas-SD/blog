const hamburger = document.querySelector('.menu-icon');
const nav_menu = document.querySelector('.nav-bar')

hamburger.addEventListener('click', () => {
    nav_menu.classList.toggle("spread")
    console.log('algo');
})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}