const form = document.querySelector("form");
const alertError = document.getElementById("alerta-error-login");

window.addEventListener('load', function (e) {
    const data = JSON.parse(localStorage.getItem('users'))
    
    if (!data) {
        fetch('../usersBBDD.json')
            .then((respuesta) => respuesta.json())
            .then((data) => {
                localStorage.setItem('users', JSON.stringify(data))
            })
    }
})

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem('users'))

    const inputEmail = document.getElementById('validationDefaultUsername');
    const inputPassword = document.getElementById('validationDefault03');

    let user = data.find(u => u.email == inputEmail.value)

    if (user && user.contraseña == inputPassword.value) {
        sessionStorage.setItem('userLog', JSON.stringify(user))
        window.location.href = "../index.html"

    } else if (user) {
        alertError.innerHTML += `
                <div class="alert alert-danger d-flex align-items-center mt-2" role="alert">
                    Contraseña o Email incorrecto.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `
    } else {
        alertError.innerHTML += `
                <div class="alert alert-warning d-flex align-items-center mt-2" role="alert">
                    Tu email no se encuentra registrado, por favor, crea un usuario.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `
    }
})
