const nombreUsuario = document.querySelector("#nombre");
const password = document.querySelector("#password");
const submit = document.querySelector("#btn-submit");
const errorNombre = document.querySelector("#errorNombre");
const errorPassword = document.querySelector("#errorPassword");

function removerClaseErrorDelNombre(evento) {
  removerClase("error", nombreUsuario, errorNombre, "")
}

function removerClaseErrorDePassword(evento) {
  removerClase("error", password, errorPassword, "")
}

function verificarFormulario(evento) {
  if (nombreUsuario.value == "") {
    evento.preventDefault();
    agregarClase("error", nombreUsuario, errorNombre, "Ingresa tu nombre de usuario")
  } else {
    localStorage.setItem("usuario", nombreUsuario.value);
  }

  if (password.value == "") {
    evento.preventDefault();
    agregarClase("error", password, errorPassword, "Ingresa tu contraseña")
  }
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", removerClaseErrorDelNombre);
password.addEventListener("keyup", removerClaseErrorDePassword);
