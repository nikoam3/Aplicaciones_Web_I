const botonAgreCarro = document.querySelector("div#card")
const botonElimCarro = document.getElementById("carro")

botonAgreCarro.addEventListener("click", function (e) {
    if (e.target.id == "botonAgreCarro") {

        let articulosCarro = JSON.parse(localStorage.getItem('articulosCarro'))

        let cardQuery = e.target.offsetParent

        let tituloArticulo = cardQuery.querySelector('.card-title').textContent
        let precioArticulo = cardQuery.querySelector('.precioArticulo').textContent
        let cantidadArticulo = cardQuery.querySelector('.form-control').value
        let totalArticulo = precioArticulo * cantidadArticulo
        let categoriaArticulo = document.getElementById('categoriaId').textContent

        let nuevoArticuloCarro = {
            titulo: tituloArticulo,
            precio: precioArticulo,
            cantidad: cantidadArticulo,
            total: totalArticulo,
            categoria: categoriaArticulo
        }

        articulosCarro.push(nuevoArticuloCarro)
        localStorage.setItem('articulosCarro', JSON.stringify(articulosCarro))
        location.reload()
    }
})

botonElimCarro.addEventListener("click", function(e) {
    if (e.target.id == "botonElimCarro") {
        let articulosCarro = JSON.parse(localStorage.getItem('articulosCarro'))
        let tituloArticulo = e.target.offsetParent.nextElementSibling.innerText

        let nuevoArticulosCarro = articulosCarro.filter(articulo => articulo.titulo != tituloArticulo);

        localStorage.removeItem("articulosCarro");
        localStorage.setItem('articulosCarro', JSON.stringify(nuevoArticulosCarro))
        location.reload()
    }
})