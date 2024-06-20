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
  let existente = arrayUsuarios.find(
    (usuario) =>
      usuario.nombreDeUsuario === nombreUsuario.value &&
      usuario.email === email.value
  );

  if (email.value == "") {
    evento.preventDefault();
    agregarClase("error", email, errorEmail, "Ingresa tu email");
  }

  if (nombreUsuario.value == "") {
    evento.preventDefault();
    agregarClase(
      "error",
      nombreUsuario,
      errorUsuario,
      "Ingresa tu nombre de usuario"
    );
  } else if (!existente) {
    evento.preventDefault();
    agregarClase(
      "error",
      nombreUsuario,
      errorUsuario,
      "Email o usuario incorrecto"
    );
  }
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
nombreUsuario.addEventListener("keyup", removerClaseErrorDeUsuario);
email.addEventListener("keyup", removerClaseErrorDelEmail);
