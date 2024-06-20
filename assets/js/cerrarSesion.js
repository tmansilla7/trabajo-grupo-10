const cerrarSesion = document.querySelector("#cerrar-sesion a");

function eliminarDatosDeLocalStorage() {
  localStorage.clear();
}

cerrarSesion.addEventListener("click", eliminarDatosDeLocalStorage);