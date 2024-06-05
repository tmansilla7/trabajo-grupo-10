const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const repetirPassword = document.querySelector("#rep-password");
const tarjeta = document.querySelector("#tarjeta")
const cupon = document.querySelector("#cupon")
const transferencia = document.querySelector("#transferencia")
const numeroTarjeta = document.querySelector("#numeroTarjeta")
const claveTarjeta = document.querySelector("#claveTarjeta")
const submit = document.querySelector("#btn-submit");
submit.disabled = true;

const errorNombre = document.querySelector("#errorNombre");
const errorApellido = document.querySelector("#errorApellido");
const errorEmail = document.querySelector("#errorEmail");
const errorUsuario = document.querySelector("#errorUsuario");
const errorPassword = document.querySelector("#errorPassword");
const errorRepetirPassword = document.querySelector("#errorRepetirPassword");

function habilitarBoton() {
  if (nombre.value != "" && apellido.value != "" && email.value != "" && usuario.value != "" && password.value != "" && repetirPassword.value != "" && (tarjeta.checked || cupon.checked || transferencia.checked)) {
    submit.disabled = false;
  }
}

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

function removerClaseErrorDePassword(evento) {
  password.classList.remove("error");
  errorPassword.textContent = "";
}

function removerClaseErrorDeRepetirPassword(evento) {
  repetirPassword.classList.remove("error");
  errorRepetirPassword.textContent = "";
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

function verificarPassword(evento, selector, selector2, texto, texto2, texto3) {
  const array = password.value.split("");
  let letras = 0;
  let numeros = 0;
  let caracteresEspeciales = 0;
  if (password.value == '') {
    evento.preventDefault();
    selector.classList.add("error");
    selector2.textContent = texto;
  } else if (password.value.length < 8) {
    evento.preventDefault();
    selector.classList.add("error");
    selector2.textContent = texto2;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].match("[A-Za-z]")) {
        letras++;
      } else if (array[i].match("[0-9]")) {
        numeros++;
      } else {
        caracteresEspeciales++;
      }
    }
    if (letras < 2 || numeros < 2 || caracteresEspeciales < 2) {
      evento.preventDefault();
      selector.classList.add("error");
      selector2.textContent = texto3;
    }
  }
}

function verificarPasswordIguales(evento, selector, selector2, selector3, texto) {
  if (selector.value != selector2.value) {
    evento.preventDefault()
    selector2.classList.add("error")
    selector3.textContent = texto
  }
}

function habilitarTextarea() {
  if (tarjeta.checked) {
    numeroTarjeta.disabled = false
    claveTarjeta.disabled = false
  }
}

function deshabilitarTextarea() {
  numeroTarjeta.disabled = true
  claveTarjeta.disabled = true
}

function verificarFormulario(evento) {
  validarCampo(evento, nombre, errorNombre, "Ingresa tu nombre");
  soloLetras(
    evento,
    nombre,
    errorNombre,
    "El nombre sólo puede contener letras"
  );
  validarCampo(evento, apellido, errorApellido, "Ingresa tu apellido");
  soloLetras(
    evento,
    apellido,
    errorApellido,
    "El apellido sólo puede contener letras"
  );
  validarCampo(evento, email, errorEmail, "Ingresa tu email");
  validarCampo(evento, usuario, errorUsuario, "Ingresa el nombre de usuario");
  soloLetrasYNumeros(
    evento,
    usuario,
    errorUsuario,
    "El nombre de usuario sólo puede contener letras y números"
  )
  verificarPassword(
    evento,
    password,
    errorPassword,
    "Ingresa tu contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales"
  );
  verificarPasswordIguales(evento, password, repetirPassword, errorRepetirPassword, "Ambas contraseñas deben ser iguales")
}

submit.addEventListener("click", verificarFormulario);
nombre.addEventListener("keyup", removerClaseErrorDelNombre);
apellido.addEventListener("keyup", removerClaseErrorDelApellido);
email.addEventListener("keyup", removerClaseErrorDelEmail);
usuario.addEventListener("keyup", removerClaseErrorDelUsuario);
password.addEventListener("keyup", removerClaseErrorDePassword);
repetirPassword.addEventListener("keyup", removerClaseErrorDeRepetirPassword)
nombre.addEventListener("keyup", habilitarBoton);
apellido.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
usuario.addEventListener("keyup", habilitarBoton);
password.addEventListener("keyup", habilitarBoton);
repetirPassword.addEventListener("keyup", habilitarBoton)
tarjeta.addEventListener("click", habilitarBoton)
tarjeta.addEventListener("click", habilitarTextarea)
cupon.addEventListener("click", habilitarBoton)
cupon.addEventListener("click", deshabilitarTextarea)
transferencia.addEventListener("click", habilitarBoton)
transferencia.addEventListener("click", deshabilitarTextarea)