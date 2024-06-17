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
const submit = document.querySelector("#btn-submit");

const errorPassword = document.querySelector("#errorPassword");
const errorNuevaPassword = document.querySelector("#errorNuevaPassword");
const errorRepetirPassword = document.querySelector("#errorRepetirPassword");
const errorTarjeta = document.querySelector("#errorTarjeta");
const errorCheck = document.querySelector("#errorCheck");

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
  verificarPassword(
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

 
//   verificarTarjeta(
//     numeroTarjeta,
//     claveTarjeta,
//     errorTarjeta,
//     "Ingresa un número válido"
//   );
//   if (tarjeta.checked) {
//     if (
//       !verificarTarjeta(
//         numeroTarjeta,
//         claveTarjeta,
//         errorTarjeta,
//         "Ingresa un número válido"
//       )
//     ) {
//       submit.disabled = true;
//     }
//   }

  if (!verificarCupon(errorCheck, "Selecciona uno")) {
    submit.disabled = true;
  }
}

submit.addEventListener("click", verificarFormulario);
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
