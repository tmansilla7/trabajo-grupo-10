const nombreUsuario = document.querySelector("#nombre-usuario");
const emailUsuario = document.querySelector("#email-usuario");
const email = USUARIO.toLowerCase() + "@gmail.com";

const password = document.querySelector("#password");
const nuevaPassword = document.querySelector("#nueva-password");
const repetirPassword = document.querySelector("#rep-password");
const tarjeta = document.querySelector("#tarjeta");
const cupon = document.querySelector("#cupon");
const facil = document.querySelector("#facil");
const rapi = document.querySelector("#rapi");
const transferencia = document.querySelector("#transferencia");
const numeroTarjeta = document.querySelector("#numeroTarjeta");
const claveTarjeta = document.querySelector("#claveTarjeta");
const cbu = document.querySelector("#cbu")
const submit = document.querySelector("#btn-submit");
const cancelar = document.querySelector("#btn-cancelar");

const errorPassword = document.querySelector("#errorPassword");
const errorNuevaPassword = document.querySelector("#errorNuevaPassword");
const errorRepetirPassword = document.querySelector("#errorRepetirPassword");
const errorTarjeta = document.querySelector("#errorTarjeta");
const errorCheck = document.querySelector("#errorCheck");

let metodoDePago = {}

function datosDeUsuario(selector, texto) {
  selector.textContent = texto;
}

datosDeUsuario(nombreUsuario, USUARIO);
datosDeUsuario(emailUsuario, email);

function removerClaseErrorDePassword(evento) {
  removerClase("error", password, errorPassword);
}

function removerClaseErrorDeNuevaPassword(evento) {
  removerClase("error", nuevaPassword, errorNuevaPassword);
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

function habilitarBoton() {
  submit.disabled = false;
}

function guardarMetodoDePago(evento, password, errorPassword, texto1, texto2, texto3) {
  if (tarjeta.checked) {
    metodoDePago = {
      método: "Tarjeta de crédito",
      número: numeroTarjeta.value,
      clave: claveTarjeta.value
    }
  }
  if (transferencia.checked) {
    metodoDePago = "Transferencia Bancaria: " + cbu.textContent
    
  }
  localStorage.setItem(
    "Método de pago",
    metodoDePago
  );
  console.log(JSON.stringify(metodoDePago))
}

function verificarFormulario(evento) {
  verificarPassword(
    evento,
    password,
    password,
    errorPassword,
    "Ingresa tu contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales"
  );
  verificarNuevaPassword(
    evento,
    nuevaPassword,
    nuevaPassword,
    errorNuevaPassword,
    "Ingresa tu nueva contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales"
  );
  verificarPasswordDiferentes(
    evento,
    password,
    nuevaPassword,
    errorNuevaPassword,
    "La nueva contraseña no debe ser igual a la anterior"
  );
  if (
    !verificarTarjeta(
      numeroTarjeta,
      claveTarjeta,
      errorTarjeta,
      "Ingresa un número válido"
    )
  ) {
    submit.disabled = true;
  }
  if (!verificarCupon(errorCheck, "Selecciona uno")) {
    submit.disabled = true;
  }
  guardarMetodoDePago(evento, password, password, "Ingresa tu contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales")
}

function verificarCancelarSuscripcion(evento) {
  verificarPassword(
    evento,
    password,
    password,
    errorPassword,
    "Ingresa tu contraseña"
  );
  removerClaseErrorDeNuevaPassword(evento);
  removerClaseErrorDeRepetirPassword(evento);
}

submit.addEventListener("click", verificarFormulario);
cancelar.addEventListener("click", verificarCancelarSuscripcion);
password.addEventListener("keyup", removerClaseErrorDePassword);
nuevaPassword.addEventListener("keyup", removerClaseErrorDeNuevaPassword);
repetirPassword.addEventListener("keyup", removerClaseErrorDeRepetirPassword);
numeroTarjeta.addEventListener("keyup", removerClaseErrorDeNumero);
claveTarjeta.addEventListener("keyup", removerClaseErrorDeClave);
tarjeta.addEventListener("click", habilitarTextarea);
tarjeta.addEventListener("click", deshabilitarCheck);
cupon.addEventListener("click", habilitarCheck);
cupon.addEventListener("click", deshabilitarTextarea);
facil.addEventListener("click", removerClaseErrorDeCheck);
rapi.addEventListener("click", removerClaseErrorDeCheck);
numeroTarjeta.addEventListener("keyup", habilitarBoton);
claveTarjeta.addEventListener("keyup", habilitarBoton);
facil.addEventListener("click", habilitarBoton);
rapi.addEventListener("click", habilitarBoton);
transferencia.addEventListener("click", deshabilitarTextarea);
transferencia.addEventListener("click", deshabilitarCheck);
tarjeta.addEventListener("click", removerClaseErrorDeCheck);
transferencia.addEventListener("click", removerClaseErrorDeCheck);
cupon.addEventListener("click", removerClaseErrorDeNumero);
cupon.addEventListener("click", removerClaseErrorDeClave);
transferencia.addEventListener("click", removerClaseErrorDeNumero);
transferencia.addEventListener("click", removerClaseErrorDeClave);
transferencia.addEventListener("click", habilitarBoton);
