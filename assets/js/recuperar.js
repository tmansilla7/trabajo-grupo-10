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
  let usuarioExistente = arrayUsuarios.find(
    (usuario) => usuario.nombreDeUsuario === nombreUsuario.value
  );

  let emailExistente = arrayUsuarios.find(
    (usuario) => usuario.nombreDeUsuario === nombreUsuario.value
  );

  if (email.value == "") {
    evento.preventDefault();
    agregarClase(
      "error",
      email,
      errorEmail,
      "Ingresa tu email"
    );
  } else if (!emailExistente) {
    evento.preventDefault();
    agregarClase("error", email, errorEmail, "Ingresa un email válido");
  }

  if (nombreUsuario.value == "") {
    evento.preventDefault();
    agregarClase(
      "error",
      nombreUsuario,
      errorUsuario,
      "Ingresa tu nombre de usuario"
    );
  } else if (!usuarioExistente) {
    evento.preventDefault();
    agregarClase("error", nombreUsuario, errorUsuario, "Ingresa un usuario válido");
  }

  
  
  
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
nombreUsuario.addEventListener("keyup", removerClaseErrorDeUsuario);
email.addEventListener("keyup", removerClaseErrorDelEmail);
