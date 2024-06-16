const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const repetirPassword = document.querySelector("#rep-password");
const tarjeta = document.querySelector("#tarjeta");
const cupon = document.querySelector("#cupon");
const facil = document.querySelector("#facil");
const rapi = document.querySelector("#rapi");
const transferencia = document.querySelector("#transferencia");
const numeroTarjeta = document.querySelector("#numeroTarjeta");
const claveTarjeta = document.querySelector("#claveTarjeta");
const submit = document.querySelector("#btn-submit");
submit.disabled = true;

const errorNombre = document.querySelector("#errorNombre");
const errorApellido = document.querySelector("#errorApellido");
const errorEmail = document.querySelector("#errorEmail");
const errorUsuario = document.querySelector("#errorUsuario");
const errorPassword = document.querySelector("#errorPassword");
const errorRepetirPassword = document.querySelector("#errorRepetirPassword");
const errorTarjeta = document.querySelector("#errorTarjeta");
const errorCheck = document.querySelector("#errorCheck")

function habilitarBoton() {
  if (
    nombre.value != "" &&
    apellido.value != "" &&
    email.value != "" &&
    usuario.value != "" &&
    password.value != "" &&
    repetirPassword.value != "" &&
    (tarjeta.checked || cupon.checked || transferencia.checked)
  ) {
    submit.disabled = false;
  }
}

function removerClaseErrorDelNombre(evento) {
  removerClase("error", nombre, errorNombre);
}

function removerClaseErrorDelApellido(evento) {
  removerClase("error", apellido, errorApellido);
}

function removerClaseErrorDelEmail(evento) {
  removerClase("error", email, errorEmail);
}

function removerClaseErrorDelUsuario(evento) {
  removerClase("error", usuario, errorUsuario);
}

function removerClaseErrorDePassword(evento) {
  removerClase("error", password, errorPassword);
}

function removerClaseErrorDeRepetirPassword(evento) {
  removerClase("error", repetirPassword, errorRepetirPassword);
}

function removerClaseErrorDeNumero(evento) {
  removerClase("error", numeroTarjeta, errorTarjeta);
}

function removerClaseErrorDeClave(evento) {
  removerClase("error", claveTarjeta, errorTarjeta);
}

function removerClaseErrorDeCheck(evento) {
  errorCheck.textContent = "";
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
  );
  verificarPassword(
    evento,
    password,
    errorPassword,
    "Ingresa tu contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales"
  );
  verificarPasswordIguales(
    evento,
    password,
    repetirPassword,
    errorRepetirPassword,
    "Ambas contraseñas deben ser iguales"
  );
  verificarTarjeta(evento, numeroTarjeta, claveTarjeta, errorTarjeta, "Ingresa un número válido")
  verificarCupon(evento, errorCheck, "Selecciona uno")
}

submit.addEventListener("click", verificarFormulario);
nombre.addEventListener("keyup", removerClaseErrorDelNombre);
apellido.addEventListener("keyup", removerClaseErrorDelApellido);
email.addEventListener("keyup", removerClaseErrorDelEmail);
usuario.addEventListener("keyup", removerClaseErrorDelUsuario);
password.addEventListener("keyup", removerClaseErrorDePassword);
repetirPassword.addEventListener("keyup", removerClaseErrorDeRepetirPassword);
numeroTarjeta.addEventListener("keyup", removerClaseErrorDeNumero);
claveTarjeta.addEventListener("keyup", removerClaseErrorDeClave);
nombre.addEventListener("keyup", habilitarBoton);
apellido.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
usuario.addEventListener("keyup", habilitarBoton);
password.addEventListener("keyup", habilitarBoton);
repetirPassword.addEventListener("keyup", habilitarBoton);
tarjeta.addEventListener("click", habilitarBoton);
tarjeta.addEventListener("click", habilitarTextarea);
tarjeta.addEventListener("click", deshabilitarCheck);
cupon.addEventListener("click", habilitarBoton);
cupon.addEventListener("click", habilitarCheck);
cupon.addEventListener("click", deshabilitarTextarea);
facil.addEventListener("click", removerClaseErrorDeCheck)
rapi.addEventListener("click", removerClaseErrorDeCheck)
transferencia.addEventListener("click", habilitarBoton);
transferencia.addEventListener("click", deshabilitarTextarea);
transferencia.addEventListener("click", deshabilitarCheck);
tarjeta.addEventListener("click", removerClaseErrorDeCheck)
transferencia.addEventListener("click", removerClaseErrorDeCheck)
cupon.addEventListener("click", removerClaseErrorDeNumero)
cupon.addEventListener("click", removerClaseErrorDeClave)
transferencia.addEventListener("click", removerClaseErrorDeNumero)
transferencia.addEventListener("click", removerClaseErrorDeClave)

