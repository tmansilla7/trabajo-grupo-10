const nombreUsuario = document.querySelector("#nombre");
const email = document.querySelector("#email");
const errorUsuario = document.querySelector("#errorUsuario");
const errorEmail = document.querySelector("#errorEmail")
const submit = document.querySelector("#btn-submit");
submit.disabled = true;

function habilitarBoton() {
  if (nombreUsuario.value != "" && email.value != "") {
    submit.disabled = false;
  }
}

function removerClaseErrorDelEmail(evento) {
  email.classList.remove("error");
  errorEmail.textContent = "";
}

function removerClaseErrorDeUsuario(evento) {
  nombreUsuario.classList.remove("error");
  errorUsuario.textContent = "";
}

function validarCampo(evento, selector, selector2, texto) {
  if (selector.value == "") {
    evento.preventDefault();
    selector.classList.add("error");
    selector2.textContent = texto;
  }
}

function verificarFormulario(evento) {
  validarCampo(evento, email, errorEmail, "Ingresa tu email")
  validarCampo(evento, nombreUsuario, errorUsuario, "Ingresa tu usuario")
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
nombreUsuario.addEventListener("keyup", removerClaseErrorDeUsuario);
email.addEventListener("keyup", removerClaseErrorDelEmail);
