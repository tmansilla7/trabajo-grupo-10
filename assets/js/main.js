const nombre_usuario = document.querySelector("#nombre");
const password = document.querySelector("#password");
const submit = document.querySelector("#btn-submit");
const errorNombre = document.querySelector("#errorNombre");
const errorPassword = document.querySelector("#errorPassword");

function removerClaseErrorDelNombre(evento) {
  removerClase("error", nombre_usuario, errorNombre, "");
}

function removerClaseErrorDePassword(evento) {
  removerClase("error", password, errorPassword, "");
}

function verificarFormulario(evento) {
  let existente = arrayUsuarios.find(
    (usuario) => usuario.nombreDeUsuario === nombre_usuario.value
  );

  if (nombre_usuario.value == "") {
    evento.preventDefault();
    agregarClase(
      "error",
      nombre_usuario,
      errorNombre,
      "Ingresa tu nombre de usuario"
    );
  } else if (!existente) {
    evento.preventDefault();
    agregarClase("error", nombre_usuario, errorNombre, "Ese usuario no existe");
  } else {
    localStorage.setItem("usuario", nombre_usuario.value);
  }

  if (password.value == "") {
    evento.preventDefault();
    agregarClase("error", password, errorPassword, "Ingresa tu contraseña");
  }
}

submit.addEventListener("click", verificarFormulario);
nombre_usuario.addEventListener("keyup", removerClaseErrorDelNombre);
password.addEventListener("keyup", removerClaseErrorDePassword);
