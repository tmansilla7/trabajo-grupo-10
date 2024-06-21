const nombreUsuario = document.querySelector("#nombre-usuario");
const emailUsuario = document.querySelector("#email-usuario");

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
const metodo_guardado = document.querySelector("#metodo-guardado");

const errorPassword = document.querySelector("#errorPassword");
const errorNuevaPassword = document.querySelector("#errorNuevaPassword");
const errorRepetirPassword = document.querySelector("#errorRepetirPassword");
const errorTarjeta = document.querySelector("#errorTarjeta");
const errorCheck = document.querySelector("#errorCheck");

function datosDeUsuario(selector, texto) {
  selector.textContent = texto;
}

datosDeUsuario(nombreUsuario, USUARIO_INGRESADO.nombreDeUsuario);
datosDeUsuario(emailUsuario, USUARIO_INGRESADO.email);

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

function datosGuardadosCorrectamente() {
  metodo_guardado.classList.add("correcto");
  metodo_guardado.textContent = "Los datos fueron guardados correctamente";
}

function cambiarPassword() {}

function guardarMetodoDePago(evento) {
  metodo_guardado.textContent = "";
  let dataStorage = JSON.parse(localStorage.getItem("usuario"));
  let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"));
  let usuarioEnArray = usuariosRegistrados.find(
    (usuario) => usuario.nombreDeUsuario === dataStorage.nombreDeUsuario
  );

  if (password.value == "") {
    agregarClase("error", password, errorPassword, "Ingresa tu contraseña");
    password.focus();
    evento.preventDefault();
  } else if (tarjeta.checked || transferencia.checked || cupon.checked) {
    if (password.value != dataStorage.password) {
      agregarClase("error", password, errorPassword, "Contraseña incorrecta");
      password.focus();
      evento.preventDefault();
    } else if (
      tarjeta.checked &&
      verificarTarjeta(
        evento,
        numeroTarjeta,
        claveTarjeta,
        errorTarjeta,
        "Ingresa un número válido"
      )
    ) {
      dataStorage.metodoDePago = {
        método: "Tarjeta de Crédito",
        número: numeroTarjeta.value,
        clave: claveTarjeta.value,
      };

      localStorage.setItem("usuario", JSON.stringify(dataStorage));

      const filtro = usuariosRegistrados.filter(
        (usuario) => usuario !== usuarioEnArray
      );
      filtro.push(dataStorage);
      localStorage.setItem(LOCAL_STORAGE_USUARIOS, JSON.stringify(filtro));

      datosGuardadosCorrectamente();
    } else if (
      cupon.checked &&
      verificarCupon(evento, errorCheck, "Selecciona uno")
    ) {
      let tipo = "";
      if (rapi.checked) {
        tipo = "RapiPago";
      } else if (facil.checked) {
        tipo = "Pago Fácil";
      }
      dataStorage.metodoDePago = {
        método: "Cupón de Pago",
        tipo: tipo,
      };
      localStorage.setItem("usuario", JSON.stringify(dataStorage));

      const filtro = usuariosRegistrados.filter(
        (usuario) => usuario !== usuarioEnArray
      );
      filtro.push(dataStorage);
      localStorage.setItem(LOCAL_STORAGE_USUARIOS, JSON.stringify(filtro));

      datosGuardadosCorrectamente();
    } else if (transferencia.checked) {
      dataStorage.metodoDePago = "Transferencia Bancaria: " + cbu.textContent;
     
      localStorage.setItem("usuario", JSON.stringify(dataStorage));

      const filtro = usuariosRegistrados.filter(
        (usuario) => usuario !== usuarioEnArray
      );
      filtro.push(dataStorage);
      localStorage.setItem(LOCAL_STORAGE_USUARIOS, JSON.stringify(filtro));

      datosGuardadosCorrectamente();
    }
  }
}

function verificarFormulario(evento) {
  if (
    nuevaPassword.value != "" ||
    tarjeta.checked ||
    transferencia.checked ||
    cupon.checked
  ) {
    if (password.value == "") {
      agregarClase("error", password, errorPassword, "Ingresa tu contraseña");
      password.focus();
      evento.preventDefault();
    } else if (password.value !== USUARIO_INGRESADO.password) {
      agregarClase("error", password, errorPassword, "Contraseña incorrecta");
      password.focus();
      evento.preventDefault();
    }
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
  guardarMetodoDePago(evento);
}

function verificarCancelarSuscripcion(evento) {
  if (password.value == "") {
    agregarClase("error", password, errorPassword, "Ingresa tu contraseña");
    password.focus();
    evento.preventDefault();
  } else if (password.value !== USUARIO_INGRESADO.password) {
    agregarClase("error", password, errorPassword, "Contraseña incorrecta");
    password.focus();
    evento.preventDefault();
  } else {
    removerClaseErrorDeNuevaPassword(evento);
    removerClaseErrorDeRepetirPassword(evento);
    const usuarioEliminado = arrayUsuarios.find(
      (usuario) => usuario.nombreDeUsuario === USUARIO_INGRESADO.nombreDeUsuario
    );
    localStorage.removeItem("usuario");
    const filtro = USUARIOS.filter((usuario) => usuario !== usuarioEliminado);
    localStorage.setItem(LOCAL_STORAGE_USUARIOS, JSON.stringify(filtro));
  }
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
