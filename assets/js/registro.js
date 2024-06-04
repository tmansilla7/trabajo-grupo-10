const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email")
const usuario = document.querySelector("#usuario")
const password = document.querySelector("#password");
const submit = document.querySelector("#btn-submit");

const errorNombre = document.querySelector("#errorNombre");
const errorApellido = document.querySelector("#errorApellido");
const errorEmail = document.querySelector("#errorEmail")
const errorUsuario = document.querySelector("#errorUsuario")
// const errorPassword = document.querySelector("#errorPassword");

function removerClaseErrorDelNombre(evento) {
  nombre.classList.remove("error");
  errorNombre.textContent = "";
}

function removerClaseErrorDelApellido(evento) {
  apellido.classList.remove("error");
  errorApellido.textContent = "";
}

function removerClaseErrorDelEmail(evento) {
    email.classList.remove("error");
    errorEmail.textContent = "";
  }

  function removerClaseErrorDelUsuario(evento) {
    usuario.classList.remove("error");
    errorUsuario.textContent = "";
  }

function validarCampo(evento, selector, selector2, texto) {
  if (selector.value == "") {
    evento.preventDefault();
    selector.classList.add("error");
    selector2.textContent = texto;
  }
}

function soloLetras(evento, selector, selector2, texto) {
  if (selector.value.match("[^A-Za-z]")) {
    evento.preventDefault();
    selector.classList.add("error");
    selector2.textContent = texto;
  }
}

function soloLetrasYNumeros(evento, selector, selector2, texto) {
    if (selector.value.match("[^0-9A-Za-z]")) {
      evento.preventDefault();
      selector.classList.add("error");
      selector2.textContent = texto;
    }
  }

function verificarFormulario(evento) {
  validarCampo(evento, nombre, errorNombre, "Ingresa tu nombre");
  soloLetras(
    evento,
    nombre,
    errorNombre,
    "El nombre sólo puede contener letras"
  );
  validarCampo(evento, apellido, errorApellido, "Ingresa tu apellido")
  soloLetras(evento, apellido, errorApellido, "El apellido sólo puede contener letras")
  validarCampo(evento, apellido, errorApellido, "Ingresa tu apellido")
  validarCampo(evento, email, errorEmail, "Ingresa tu email")
  validarCampo(evento, usuario, errorUsuario, "Ingresa el nombre de usuario")
  soloLetrasYNumeros(evento, usuario, errorUsuario, "El nombre de usuario sólo puede contener letras y números")
}

submit.addEventListener("click", verificarFormulario);
nombre.addEventListener("keyup", removerClaseErrorDelNombre);
apellido.addEventListener("keyup", removerClaseErrorDelApellido);
email.addEventListener("keyup", removerClaseErrorDelEmail);
usuario.addEventListener("keyup", removerClaseErrorDelUsuario);
