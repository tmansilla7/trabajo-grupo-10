const cerrarSesion = document.querySelector("#cerrar-sesion")

function eliminarDatosDeLocalStorage() {
    localStorage.removeItem("usuario")
}

cerrarSesion.addEventListener("click", eliminarDatosDeLocalStorage)