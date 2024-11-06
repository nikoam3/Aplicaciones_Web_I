const navElements = [
    { title: 'Login', link: '../pages/login.html' },
    { title: 'Registro', link: '../pages/registro.html' },
]

const categorias = [
    
    { title: 'Cuerdas', link: '../pages/cuerdas.html'},
    { title: 'Teclados', link: '../pages/teclados.html'},
    { title: 'Vientos', link: '../pages/vientos.html'}
]

export const nav = `
            <ul class="navbar-nav">
                ${categorias.map(c => {
                return `
                <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="${c.link}">${c.title}</a>
                        </li>`
                    }).join('')
                }
            </ul>
            `