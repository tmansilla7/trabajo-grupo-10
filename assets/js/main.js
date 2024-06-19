const nombreUsuario = document.querySelector("#nombre");
const password = document.querySelector("#password");
const submit = document.querySelector("#btn-submit");
const errorNombre = document.querySelector("#errorNombre");
const errorPassword = document.querySelector("#errorPassword");

function removerClaseErrorDelNombre(evento) {
  removerClase("error", nombreUsuario, errorNombre, "");
}

function removerClaseErrorDePassword(evento) {
  removerClase("error", password, errorPassword, "");
}

function verificarFormulario(evento) {
  if (nombreUsuario.value == "") {
    evento.preventDefault();
    agregarClase(
      "error",
      nombreUsuario,
      errorNombre,
      "Ingresa tu nombre de usuario"
    );
  } else {
    soloLetrasYNumeros(
      evento,
      nombreUsuario,
      errorNombre,
      "Tu nombre de usuario sólo puede contener letras y números"
    );
    localStorage.setItem("usuario", nombreUsuario.value);
  }

  verificarPassword(
    evento,
    password,
    password,
    errorPassword,
    "Ingresa tu contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales"
  );
}

submit.addEventListener("click", verificarFormulario);
nombreUsuario.addEventListener("keyup", removerClaseErrorDelNombre);
password.addEventListener("keyup", removerClaseErrorDePassword);
