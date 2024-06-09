const cerrarSesion = document.querySelector("#cerrar-sesion")

function eliminarDatosDeLocalStorage() {
    localStorage.clear()
}

cerrarSesion.addEventListener("click", eliminarDatosDeLocalStorage)