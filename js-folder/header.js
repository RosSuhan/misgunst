let checkbox = document.getElementById("menu-bar");
let label = document.getElementById("menuLable");
let dropdown = document.getElementById("mobileDropdownMenuBlock");
let header = document.getElementById("header");
let hero = document.getElementById("hero")

function mobileMenu() {
    if (checkbox.checked == true ) {
        dropdown.style.display = "initial"
        console.log("dropdown menu to show")
    }
    else {
        dropdown.style.display = "none"
        console.log("display none")
    }
}


window.onscroll = function() {
    if(window.scrollY >= hero.offsetTop) {
        header.classList.add("sticky");
        console.log("pagescroll")
    }
    else {
        header.classList.remove("sticky");
        console.log("page at top")
    }
}