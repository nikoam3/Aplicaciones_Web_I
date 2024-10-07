import { nav } from "../components/navbar.js";

let navContainer = document.getElementById('navbarNav')

window.addEventListener('load', function (e) {
    navContainer.innerHTML = nav
})