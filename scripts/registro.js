const form = document.querySelector("form");
const alertaRegistro = document.getElementById("alerta-registro");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'))

    const inputNombre = document.getElementById('validationDefault01');
    const inputApellido = document.getElementById('validationDefault02');
    const inputEmail = document.getElementById('validationDefaultUsername');
    const inputPassword = document.getElementById('validationDefault03');
    const inputFechaNac = document.getElementById('validationDefault05');

    const nuevoUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        email: inputEmail.value,
        contraseña: inputPassword.value,
        fecha_de_nacimiento: inputFechaNac.value
    }

    users.push(nuevoUsuario)
    localStorage.setItem('users', JSON.stringify(users))

    alertaRegistro.innerHTML += `
    <div class="alert alert-primary" role="alert">
        Usuario creado con éxito, <a href="../pages/login.html" class="alert-link">realizar el login</a>.
    </div>
    `
})