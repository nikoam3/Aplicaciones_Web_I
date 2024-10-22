import { renderCarousel } from "../components/carousel.js";

let carousel = document.getElementById('carousel')

window.addEventListener('load', function (e) {
    renderCarousel(carousel)
})