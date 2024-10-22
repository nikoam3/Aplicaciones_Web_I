const navElements = [
    { title: 'Login', link: '../pages/login.html' },
    { title: 'Registro', link: '../pages/registro.html' },
]

const categorias = [
    { title: 'Vientos', link: '../pages/vientos.html' },
    { title: 'Cuerdas', link: '../pages/cuerdas.html' },
    { title: 'Teclados', link: '../pages/teclados.html' }
]

export const nav = `
            <ul class="navbar-nav">
                ${categorias.map(c => {
                return `<li class="nav-item">
                            <a class="nav-link" aria-current="page" href="${c.link}">${c.title}</a>
                        </li>`
                    }).join('')
                }
            </ul>
            <a class="nav-link ms-auto" href="./pages/login.html">
                <button type="button" class="btn btn-outline-danger ms-auto"><i
                        class="bi bi-box-arrow-right"></i></button>
            </a>
            `
