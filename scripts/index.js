import { renderCarousel } from "../components/carousel.js";

let carousel = document.getElementById('carousel')

window.addEventListener('load', function (e) {
    let userInfo = sessionStorage.getItem('userLog');

    if (!userInfo) {
        this.window.location.href = "../pages/login.html"
    } else {
        renderCarousel(carousel)
    }
})


