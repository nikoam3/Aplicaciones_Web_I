let categorias = ['Cuerdas', 'Teclados', 'Vientos']
let elementos = []
export function renderCarousel(render) {
    fetch('../data.json')
        .then((respuesta) => respuesta.json())
        .then((data) => {

            cargoElementos(data);
            console.log(elementos)
            render.innerHTML += `
                <div id="carouselExampleInterval" class="carousel slide carousel-fade m-5" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                        <div class="carousel-inner" >
                        
                            <div class="carousel-item active" data-bs-interval="2000" >
                                <a href="../pages/${elementos[0].categoria}.html">        
                                    <img src="../img/${elementos[0].categoria}/${elementos[0].titulo}.png" class="d-block w-75" alt="${elementos[0].categoria}">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4>${elementos[0].categoria}</h4>
                                    </div>
                                  </a>
                            </div>    
                            <div class="carousel-item" data-bs-interval="2000" >
                                <a href="../pages/${elementos[1].categoria}.html">
                                    <img src="../img/${elementos[1].categoria}/${elementos[1].titulo}.png" class="d-block w-75" alt="${elementos[1].categoria}">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4>${elementos[1].categoria}</h4>
                                    </div>
                                </a>
                            </div>   
                            <div class="carousel-item" data-bs-interval="2000" >
                                <a href="../pages/${elementos[2].categoria}.html">
                                    <img src="../img/${elementos[2].categoria}/${elementos[2].titulo}.png" class="d-block w-75" alt="${elementos[2].categoria}">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4>${elementos[2].categoria}</h4>
                                    </div>
                                </a>
                            </div>  
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>`
        }).catch((error) => console.log(error));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cargoElementos(data) {
    for (let i = 0; i < categorias.length; i++) {
        let carousel = data.filter(d => d.categoria == categorias[i])
        let x = getRandomInt(0, carousel.length)
        elementos.push(carousel[x])
    }
}



