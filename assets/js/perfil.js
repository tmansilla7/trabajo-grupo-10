const nombreUsuario = document.querySelector("#nombre-usuario")
const emailUsuario = document.querySelector("#email-usuario")
const email = USUARIO.toLowerCase() + "@gmail.com"

function datosDeUsuario(selector, texto) {
    selector.textContent = texto
}

datosDeUsuario(nombreUsuario, USUARIO)
datosDeUsuario(emailUsuario, email)
