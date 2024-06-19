const nombreUsuario = document.querySelector("#nombre");
const email = document.querySelector("#email");
const errorUsuario = document.querySelector("#errorUsuario");
const errorEmail = document.querySelector("#errorEmail");
const submit = document.querySelector("#btn-submit");
submit.disabled = true;

function habilitarBoton() {
  if (nombreUsuario.value != "" && email.value != "") {
    submit.disabled = false;
  }
}

function removerClaseErrorDelEmail(evento) {
  removerClase("error", email, errorEmail);
}

function removerClaseErrorDeUsuario(evento) {
  removerClase("error", nombreUsuario, errorUsuario);
}

function verificarFormulario(evento) {
  validarCampo(evento, email, errorEmail, "Ingresa tu email");
  validarCampo(evento, nombreUsuario, errorUsuario, "Ingresa tu usuario");
  soloLetrasYNumeros(
    evento,
    nombreUsuario,
    errorUsuario,
    "Tu nombre de usuario sólo puede contener letras y números"
  );
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
nombreUsuario.addEventListener("keyup", removerClaseErrorDeUsuario);
email.addEventListener("keyup", removerClaseErrorDelEmail);
