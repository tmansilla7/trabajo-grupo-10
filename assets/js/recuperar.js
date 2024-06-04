const nombreUsuario = document.querySelector("#nombre");
const email = document.querySelector("#email");
const submit = document.querySelector("#btn-submit");
submit.disabled = true;

function habilitarBoton() {
  if (nombreUsuario.value != "" && email.value != "") {
    submit.disabled = false;
  }
}

nombreUsuario.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
