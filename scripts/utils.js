import { nav } from "../components/navbar.js";
import { renderCarro } from "../components/carro.js";
import { renderCards } from "../components/cards.js";

let cards = document.getElementById('card')
let categoria = document.getElementById('categoriaId')
let navContainer = document.getElementById('navBar')
let botonLogout = document.getElementById('logout1');
let carro = document.getElementById('carro');
const articulosCarro = JSON.parse(localStorage.getItem('articulosCarro'))

window.addEventListener('load', function (e) {
    navContainer.innerHTML += nav

    let userInfo = sessionStorage.getItem('userLog');

    if (!userInfo) {
        this.window.location.href = "../pages/login.html"
    } else {
        renderCards(categoria.textContent, cards)
    }

    if (!articulosCarro) {
        let vacio = []
        localStorage.setItem('articulosCarro', JSON.stringify(vacio))
    }
    renderCarro(carro, articulosCarro)
})

botonLogout.addEventListener("click", function (e) {
    sessionStorage.removeItem('userLog')
    window.location.href = "../pages/login.html"
})