const JSON_SERIES_Y_PELICULAS = localStorage.getItem(
  LOCAL_STORAGE_SERIES_Y_PELICULAS
);
const SERIES_Y_PELICULAS = JSON.parse(JSON_SERIES_Y_PELICULAS);
let nodo_section = document.querySelector(".sermov");
const CATEGORIAS = document.querySelector("#categorias");
let categoria_seleccionada = "Todas";
const buscador = document.querySelector("#buscar");
let palabra_buscada = "";
const USUARIO = localStorage.getItem("usuario");

function removerClase(clase, selector, selector2, texto) {
  selector.classList.remove(clase);
  selector2.textContent = texto;
}

function agregarClase(clase, selector, selector2, texto) {
  selector.classList.add(clase);
  selector2.textContent = texto;
}

function validarCampo(evento, selector, selector2, texto) {
  if (selector.value == "") {
    evento.preventDefault();
    agregarClase("error", selector, selector2, texto);
  }
}

function soloLetras(evento, selector, selector2, texto) {
  const REGEX_LETTERS = /[^A-Za-z]+$/i;
  if (REGEX_LETTERS.test(selector.value)) {
    evento.preventDefault();
    agregarClase("error", selector, selector2, texto);
  }
}

function soloLetrasYNumeros(evento, selector, selector2, texto) {
  const REGEX_LETTERS_NUMBERS = /[^0-9A-Za-z]+$/i;
  if (REGEX_LETTERS_NUMBERS.test(selector.value)) {
    evento.preventDefault();
    agregarClase("error", selector, selector2, texto);
  }
}

function caracteresPassword(evento, selector, selector2, texto) {
  let letras = 0;
  let numeros = 0;
  let caracteresEspeciales = 0;
  const REGEX_LETTERS = /[A-Za-z]+$/i;
  const REGEX_NUMBERS = /[0-9]/;
  const array = password.value.split("");
  if (selector.value != "") {
    for (let i = 0; i < array.length; i++) {
      if (REGEX_LETTERS.test(array[i])) {
        letras++;
      } else if (REGEX_NUMBERS.test(array[i])) {
        numeros++;
      } else {
        caracteresEspeciales++;
      }
    }
    if (letras < 2 || numeros < 2 || caracteresEspeciales < 2) {
      evento.preventDefault();
      agregarClase("error", selector, selector2, texto);
    }
  }
  
}

function verificarPassword(
  evento,
  password,
  selector,
  selector2,
  texto,
  texto2,
  texto3
) {
  if (password.value == "") {
    evento.preventDefault();
    agregarClase("error", selector, selector2, texto);
  } else if (password.value.length < 8) {
    evento.preventDefault();
    agregarClase("error", selector, selector2, texto2);
  } else {
    caracteresPassword(evento, selector, selector2, texto3)
  }
}

function verificarNuevaPassword(
  evento,
  password,
  selector,
  selector2,
  texto,
  texto2,
  texto3
) {
  if (password.value.length < 8 && password.value != "") {
    evento.preventDefault();
    agregarClase("error", selector, selector2, texto2);
  } else {
    caracteresPassword(evento, selector, selector2, texto3)
  }
}

function verificarPasswordDiferentes(
  evento,
  selector,
  selector2,
  selector3,
  texto
) {
  if (selector.value == selector2.value && selector.value != "") {
    evento.preventDefault();
    agregarClase("error", selector2, selector3, texto);
  }
}

function verificarPasswordIguales(
  evento,
  selector,
  selector2,
  selector3,
  texto
) {
  if (selector.value != selector2.value) {
    evento.preventDefault();
    agregarClase("error", selector2, selector3, texto);
  }
}

function habilitarTextarea() {
  if (tarjeta.checked) {
    numeroTarjeta.disabled = false;
    claveTarjeta.disabled = false;
  }
}

function habilitarCheck() {
  if (cupon.checked) {
    rapi.disabled = false;
    facil.disabled = false;
  }
}

function deshabilitarTextarea() {
  numeroTarjeta.disabled = true;
  claveTarjeta.disabled = true;
}

function deshabilitarCheck() {
  rapi.disabled = true;
  facil.disabled = true;
  rapi.checked = false;
  facil.checked = false;
}

function verificarTarjeta(selector, selector2, selector3, texto) {
  const REGEX_NUMERO = /[0-9]/;
  const REGEX_CLAVE = /[1-9]/;
  const array2 = selector2.value.split("");
  if (tarjeta.checked) {
    const array = selector.value.split("");
    if (
      selector.value == "" ||
      selector.value.length < 16 ||
      selector.value.length > 19
    ) {
      agregarClase("error", selector, selector3, texto);
      return false;
    }
    for (let i = 0; i < array.length; i++) {
      if (!REGEX_NUMERO.test(array[i])) {
        agregarClase("error", selector, selector3, texto);
        return false;
      }
    }
    if (selector2.value == "" || selector2.value.length != 3) {
      agregarClase("error", selector2, selector3, texto);
      return false;
    }
    for (let i = 0; i < array2.length; i++) {
      if (!REGEX_CLAVE.test(array2[i])) {
        agregarClase("error", selector2, selector3, texto);
        return false;
      }
    }
  }
  return true;
}

function verificarCupon(selector, texto) {
  if (cupon.checked) {
    if (!rapi.checked && !facil.checked) {
      selector.textContent = texto;
      return false;
    }
  }
  return true;
}

function crearArticle(i) {
  let nodo_article = document.createElement("article");
  nodo_article.classList.add("frame");
  let nodo_a = document.createElement("a");
  nodo_a.href = `./serie-pelicula.html?indice=${i}`;
  let nodo_img = document.createElement("img");
  nodo_img.src = SERIES_Y_PELICULAS[i]["imagen"]["src"];
  nodo_img.alt = SERIES_Y_PELICULAS[i]["imagen"]["alt"];
  let nodo_h3 = document.createElement("h3");
  nodo_h3.textContent = SERIES_Y_PELICULAS[i]["titulo"];
  nodo_a.appendChild(nodo_img);
  nodo_a.appendChild(nodo_h3);
  nodo_article.appendChild(nodo_a);
  nodo_section.appendChild(nodo_article);
}

function agregarSeriesOPeliculas(array, tipo) {
  for (let i in array) {
    if (array[i]["tipo"] == tipo) {
      crearArticle(i);
    }
  }
}

function cambioDeCategoria(array, tipo) {
  CATEGORIAS.addEventListener("change", (event) => {
    categoria_seleccionada = CATEGORIAS.options[CATEGORIAS.selectedIndex].text;

    nodo_section.innerHTML = "";

    if (categoria_seleccionada == "Todas") {
      agregarSeriesOPeliculas(array, tipo);
    } else {
      for (let i in array) {
        if (
          categoria_seleccionada == array[i]["categoría"] &&
          array[i]["tipo"] == tipo
        ) {
          crearArticle(i);
        }
      }
    }
    buscador.value = "";
  });
}

function buscar(array, tipo) {
  buscador.addEventListener("keyup", (event) => {
    nodo_section.innerHTML = "";
    palabra_buscada = buscador.value;
    if (palabra_buscada == "" && categoria_seleccionada == "Todas") {
      agregarSeriesOPeliculas(array, tipo);
    } else {
      if (categoria_seleccionada == "Todas") {
        for (let i in array) {
          if (
            array[i]["titulo"]
              .toUpperCase()
              .includes(palabra_buscada.toUpperCase())
          ) {
            if (array[i]["tipo"] == tipo) {
              crearArticle(i);
            }
          }
        }
      } else {
        for (let i in array) {
          if (
            array[i]["titulo"]
              .toUpperCase()
              .includes(palabra_buscada.toUpperCase())
          ) {
            if (
              array[i]["categoría"] == categoria_seleccionada &&
              array[i]["tipo"] == tipo
            ) {
              crearArticle(i);
            }
          }
        }
      }
    }
  });
}
