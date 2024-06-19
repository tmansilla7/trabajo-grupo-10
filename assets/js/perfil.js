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
const cbu = document.querySelector("#cbu");
const submit = document.querySelector("#btn-submit");
const cancelar = document.querySelector("#btn-cancelar");

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
  const nuevaPass = nuevaPassword.value;
  const repPass = repetirPassword.value;
  const passMatch = nuevaPass && repPass && nuevaPass === repPass;
  const metodoPagoSeleccionado =
    tarjeta.checked || transferencia.checked || cupon.checked;

  submit.disabled = !(passMatch || metodoPagoSeleccionado);
}

function guardarMetodoDePago(
  evento,
  password,
  errorPassword,
  texto1,
  texto2,
  texto3
) {
  if (tarjeta.checked || transferencia.checked || cupon.checked) {
    let metodoDePago = {};
    if (
      verificarPassword(evento, password, errorPassword, texto1, texto2, texto3)
    ) {
      if (
        tarjeta.checked &&
        verificarTarjeta(
          evento,
          numeroTarjeta,
          claveTarjeta,
          errorTarjeta,
          "Ingresa un número válido"
        )
      ) {
        metodoDePago = {
          método: "Tarjeta de Crédito",
          número: numeroTarjeta.value,
          clave: claveTarjeta.value,
        };
        localStorage.setItem("Método de pago", JSON.stringify(metodoDePago));
      }

      if (cupon.checked && verificarCupon(evento, errorCheck, "Selecciona uno")) {
        let tipo = "";
        if (rapi.checked) {
          tipo = "RapiPago";
        } else if (facil.checked) {
          tipo = "Pago Fácil";
        } else if (facil.checked && rapi.checked) {
          tipo = "Pago Fácil y RapiPago";
        }
        metodoDePago = {
          método: "Cupón de Pago",
          tipo: tipo,
        };
        localStorage.setItem("Método de pago", JSON.stringify(metodoDePago));
      }

      if (transferencia.checked) {
        metodoDePago = "Transferencia Bancaria: " + cbu.textContent;
        localStorage.setItem("Método de pago", metodoDePago);
      }
    }
  }
}

function verificarFormulario(evento) {
  if (password.value != "") {
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

  if (
    nuevaPassword.value != "" ||
    tarjeta.checked ||
    transferencia.checked ||
    cupon.checked
  ) {
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

  verificarNuevaPassword(
    evento,
    nuevaPassword,
    nuevaPassword,
    errorNuevaPassword,
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
      evento,
      numeroTarjeta,
      claveTarjeta,
      errorTarjeta,
      "Ingresa un número válido"
    )
  ) {
    submit.disabled = true;
  }
  if (!verificarCupon(evento, errorCheck, "Selecciona uno")) {
    submit.disabled = true;
  }
  guardarMetodoDePago(
    evento,
    password,
    password,
    "Ingresa tu contraseña",
    "La contraseña debe tener al menos 8 caracteres",
    "La contraseña debe tener al menos 2 letras, 2 números y 2 caracteres especiales"
  );
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
nuevaPassword.addEventListener("keyup", removerClaseErrorDePassword);
repetirPassword.addEventListener("keyup", removerClaseErrorDeRepetirPassword);
numeroTarjeta.addEventListener("keyup", removerClaseErrorDeNumero);
claveTarjeta.addEventListener("keyup", removerClaseErrorDeClave);
tarjeta.addEventListener("click", habilitarTextarea);
tarjeta.addEventListener("click", deshabilitarCheck);
tarjeta.addEventListener("click", habilitarBoton);
cupon.addEventListener("click", habilitarCheck);
cupon.addEventListener("click", deshabilitarTextarea);
cupon.addEventListener("click", habilitarBoton);
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

nuevaPassword.addEventListener("keyup", habilitarBoton);
repetirPassword.addEventListener("keyup", habilitarBoton);
document.addEventListener("DOMContentLoaded", habilitarBoton);
