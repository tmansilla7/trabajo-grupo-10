const cerrarSesion = document.querySelector("#cerrar-sesion a");

function eliminarDatosDeLocalStorage() {
  localStorage.removeItem("usuario")
}

cerrarSesion.addEventListener("click", eliminarDatosDeLocalStorage);