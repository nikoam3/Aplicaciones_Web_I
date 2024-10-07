import { renderCards } from "../components/cards.js";

let cards = document.getElementById('card')

window.addEventListener('load', function (e) {
    cards.innerHTML = renderCards("Amplificadores")
})