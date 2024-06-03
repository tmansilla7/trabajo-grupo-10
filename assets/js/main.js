const nombreUsuario = document.querySelector("#nombre");
const password = document.querySelector("#password");
const submit = document.querySelector("#btn-submit");
const errorNombre = document.querySelector("#errorNombre")
const errorPassword = document.querySelector("#errorPassword")

function removerClaseErrorDelNombre(evento) {
  nombreUsuario.classList.remove("error");
  errorNombre.textContent = ""
}

function removerClaseErrorDePassword(evento) {
  password.classList.remove("error");
  errorPassword.textContent = ""
}

function verificarFormulario(evento) {
  if (nombreUsuario.value == "") {
    evento.preventDefault()
    nombreUsuario.classList.add("error");
    errorNombre.textContent = "Ingresa el nombre de usuario"
   }

  if (password.value == "") {
    evento.preventDefault()
    password.classList.add("error");
    errorPassword.textContent = "Ingresa la contraseña"
  }
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", removerClaseErrorDelNombre);
password.addEventListener("keyup", removerClaseErrorDePassword);

