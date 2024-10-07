export const articulos = [
    { categoria: 'Amplificadores', titulo: 'Amplificador', img: '../img/amplificadores/ampli.png', descripcion: 'Amplificador para bajos', precio: '10.000' },
    { categoria: 'Amplificadores', titulo: 'Amplificador Boss', img: '../img/amplificadores/ampli1.png', descripcion: 'Amplificador de guitarra eléctrica', precio: '2.500' },
    { categoria: 'Amplificadores', titulo: 'Amplificador Vintage', img: '../img/amplificadores/ampli2.png', descripcion: 'De uso varios, adorno, recuerdo, etc.', precio: '20.000' },
    { categoria: 'Cuerdas', titulo: 'Guitarra Criolla', img: '../img/cuerdas/criolla.png', descripcion: 'Con un tamaño de 39", esta guitarra es ideal tanto para estudiantes como para músicos con experiencia que buscan un sonido cálido y envolvente.', precio: '30.000' },
    { categoria: 'Cuerdas', titulo: 'Guitarra Eléctrica', img: '../img/cuerdas/electrica.png', descripcion: 'Se caracteriza por su liviandad, al ser más pequeña que el resto. Esto, permite comodidad en el juego sin descuidar la excelencia en el sonido para que des todo en el escenario.', precio: '50.000' },
    { categoria: 'Cuerdas', titulo: 'Guitarra Eléctrica', img: '../img/cuerdas/electrica2.png', descripcion: 'Con su cuerpo de roble blanco y mástil de arce, esta guitarra no solo ofrece un sonido potente y claro, sino también una gran durabilidad y resistencia.', precio: '75.000' },
    { categoria: 'Cuerdas', titulo: 'Guitarra Electroacustica', img: '../img/cuerdas/electroacustica.png', descripcion: 'Su caja de tilo y mango Rosewood media caja (Mini Jumbo) con corte tamaño adulto, la hacen muy cómoda para tocar.', precio: '40.000' },
    { categoria: 'Teclados', titulo: 'Teclado Samsom 61', img: '../img/teclados/teclado.png', descripcion: 'El teclado hace que la interpretación y la producción musical sean accesibles para todos. Tanto para músicos experimentados como para jóvenes creadores.', precio: '100.000' },
    { categoria: 'Teclados', titulo: 'Teclado Roland Keytar', img: '../img/teclados/teclado1.png', descripcion: 'Diseño moderno y estilizado que junto a su aspecto personalizable con Edge Blades intercambiables y sus 49 teclas harán que el público vibre de una manera especial.', precio: '80.000' },
    { categoria: 'Teclados', titulo: 'Teclado Yamaha YC61', img: '../img/teclados/teclado2.png', descripcion: 'La serie YC cuenta con un nuevo diseño de motor de sonido Virtual Circuitry Modeling (VCM) para órgano con drawbars físicos, un amplio control en tiempo real y sonidos auténticos de piano.', precio: '200.000' }
]

export function renderCards(categoria) {
    return articulos.map(a => {
        if (categoria == a.categoria) {
            return `
            <div class="col">
                <div class="card">
                    <img src="${a.img}" class="card-img-top" alt="${a.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${a.titulo}</h5>
                        <p class="card-text">${a.descripcion}</p>
                        <p class="card-text text-center"><strong>$${a.precio}</strong></p>
                    </div>
                    <div class="card-footer text-center">
                        <input type="number" class="form-control-xs" placeholder="0"></input>
                        <button type="button" class="btn btn-outline-success m-3"><i
                            class="bi bi-cart-plus"></i></button>
                    </div>
                </div>
            </div>`
        }
    }).join('')
}



