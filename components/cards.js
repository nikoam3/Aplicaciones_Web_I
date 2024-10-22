export function renderCards(categoria, render) {
    fetch('../data.json')
        .then((respuesta) => respuesta.json())
        .then((data) => {

            let card = data.filter(d => d.categoria == categoria)

            for (let i = 0; i < card.length; i++) {
                console.log(categoria + card[i].titulo)
                render.innerHTML += `<div class="col">
                                        <div class="card">
                                            <img src="../img/${categoria}/${card[i].titulo}.png" class="card-img-top" alt="${card[i].titulo}">
                                            <div class="card-body">
                                                <h5 class="card-title">${card[i].titulo}</h5>
                                                <p class="card-text">${card[i].descripcion}</p>
                                                <p class="card-text text-center"><strong>$${card[i].precio}</strong></p>
                                            </div>
                                            <div class="card-footer text-center">
                                                <input type="number" class="form-control-xs" placeholder="0"></input>
                                                <button type="button" class="btn btn-outline-success m-3"><i
                                                    class="bi bi-cart-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>`
            }
        }).catch((error) => console.log(error));
}



