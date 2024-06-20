const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const nombreUsuario = document.querySelector("#usuario");
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
const errorCheck = document.querySelector("#errorCheck");

const usuarioNuevo = {
  nombre: "",
  apellido: "",
  email: "",
  nombreDeUsuario: "",
  password: "",
  metodoDePago: {},
};

function habilitarBoton() {
  if (
    nombre.value != "" &&
    apellido.value != "" &&
    email.value != "" &&
    nombreUsuario.value != "" &&
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
  removerClase("error", nombreUsuario, errorUsuario);
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

function validarEmail(evento) {
  const REGEX_EMAIL = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!REGEX_EMAIL.test(email.value)) {
    evento.preventDefault();
    agregarClase("error", email, errorEmail, "Ingresa un email válido");
  } else {
    usuarioNuevo.email = email.value;
  }
}

function usuarioExistente() {
  let existente = arrayUsuarios.find(
    (usuario) => usuario.nombreDeUsuario === nombreUsuario.value
  );

  if (existente) {
    agregarClase(
      "error",
      nombreUsuario,
      errorUsuario,
      "Ese nombre de usuario ya existe"
    );
    usuarioNuevo.nombreDeUsuario = "";
    return false;
  } else {
    usuarioNuevo.nombreDeUsuario = nombreUsuario.value;
  }
}

function emailExistente() {
  let existente = arrayUsuarios.find(
    (usuario) => usuario.email === email.value
  );

  if (existente) {
    agregarClase("error", email, errorEmail, "Ese email ya fue utilizado");
    usuarioNuevo.email = "";
    return false;
  } else {
    usuarioNuevo.email = email.value;
  }
}

function verificarFormulario(evento) {
  validarCampo(evento, nombre, errorNombre, "Ingresa tu nombre");
  soloLetras(
    evento,
    nombre,
    errorNombre,
    "nombre",
    nombre,
    "El nombre sólo puede contener letras"
  );
  validarCampo(evento, apellido, errorApellido, "Ingresa tu apellido");
  soloLetras(
    evento,
    apellido,
    errorApellido,
    "apellido",
    apellido,
    "El apellido sólo puede contener letras"
  );
  validarCampo(evento, email, errorEmail, "Ingresa tu email");
  validarEmail(evento);
  emailExistente();
  validarCampo(
    evento,
    nombreUsuario,
    errorUsuario,
    "Ingresa el nombre de usuario"
  );
  soloLetrasYNumeros(
    evento,
    nombreUsuario,
    errorUsuario,
    "El nombre de usuario sólo puede contener letras y números"
  );
  usuarioExistente();
  verificarPassword(
    evento,
    password,
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
  verificarTarjeta(
    evento,
    numeroTarjeta,
    claveTarjeta,
    errorTarjeta,
    "Ingresa un número válido"
  );
  verificarCupon(evento, errorCheck, "Selecciona uno");
}

function agregarUsuario(evento) {
  if (
    usuarioNuevo.nombre != "" &&
    usuarioNuevo.apellido != "" &&
    usuarioNuevo.email != "" &&
    usuarioNuevo.nombreDeUsuario != ""
  ) {
    arrayUsuarios.push(usuarioNuevo);
    localStorage.setItem(LOCAL_STORAGE_USUARIOS, JSON.stringify(arrayUsuarios));
  }
}

submit.addEventListener("click", verificarFormulario);
submit.addEventListener("click", agregarUsuario);
nombre.addEventListener("keyup", removerClaseErrorDelNombre);
apellido.addEventListener("keyup", removerClaseErrorDelApellido);
email.addEventListener("keyup", removerClaseErrorDelEmail);
nombreUsuario.addEventListener("keyup", removerClaseErrorDelUsuario);
password.addEventListener("keyup", removerClaseErrorDePassword);
repetirPassword.addEventListener("keyup", removerClaseErrorDeRepetirPassword);
numeroTarjeta.addEventListener("keyup", removerClaseErrorDeNumero);
claveTarjeta.addEventListener("keyup", removerClaseErrorDeClave);
nombre.addEventListener("keyup", habilitarBoton);
apellido.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
nombreUsuario.addEventListener("keyup", habilitarBoton);
password.addEventListener("keyup", habilitarBoton);
repetirPassword.addEventListener("keyup", habilitarBoton);
tarjeta.addEventListener("click", habilitarBoton);
tarjeta.addEventListener("click", habilitarTextarea);
tarjeta.addEventListener("click", deshabilitarCheck);
cupon.addEventListener("click", habilitarBoton);
cupon.addEventListener("click", habilitarCheck);
cupon.addEventListener("click", deshabilitarTextarea);
facil.addEventListener("click", removerClaseErrorDeCheck);
rapi.addEventListener("click", removerClaseErrorDeCheck);
transferencia.addEventListener("click", habilitarBoton);
transferencia.addEventListener("click", deshabilitarTextarea);
transferencia.addEventListener("click", deshabilitarCheck);
tarjeta.addEventListener("click", removerClaseErrorDeCheck);
transferencia.addEventListener("click", removerClaseErrorDeCheck);
cupon.addEventListener("click", removerClaseErrorDeNumero);
cupon.addEventListener("click", removerClaseErrorDeClave);
transferencia.addEventListener("click", removerClaseErrorDeNumero);
transferencia.addEventListener("click", removerClaseErrorDeClave);
