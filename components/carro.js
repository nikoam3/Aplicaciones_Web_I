export function renderCarro(render, articulos) {
    for (let i = 0; i < articulos.length; i++) {
        render.innerHTML +=
            `                
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/${articulos[i].categoria}/${articulos[i].titulo}.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="position-absolute top-5 end-0 me-2">
                                <button type="button" class="btn-close" aria-label="Close" id="botonElimCarro"></button>
                            </div>
                            <h5 class="card-title me-2">${articulos[i].titulo}</h5>
                            <p class="card-text">Cantidad: ${articulos[i].cantidad}</p>
                            <p class="card-text"><strong class="text-body-secondary">Total $${articulos[i].total}</strong></p>
                        </div>
                    </div>
                </div>
            </div>`
    }
}