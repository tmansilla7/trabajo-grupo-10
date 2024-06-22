function agregarSeriesYPeliculas() {
  for (let i in SERIES_Y_PELICULAS) {
    crearArticle(i);
  }
}

agregarSeriesYPeliculas();

function cambioDeCategoriaEnHome() {
  CATEGORIAS.addEventListener("change", (event) => {
    categoria_seleccionada = CATEGORIAS.options[CATEGORIAS.selectedIndex].text;

    nodo_section.innerHTML = "";

    if (categoria_seleccionada == "Todas") {
      agregarSeriesYPeliculas();
    } else {
      for (let i in SERIES_Y_PELICULAS) {
        if (categoria_seleccionada == SERIES_Y_PELICULAS[i]["categoría"]) {
          crearArticle(i);
        }
      }
    }
    buscador.value = "";
  });
}

cambioDeCategoriaEnHome();

buscador.addEventListener("keyup", (event) => {
  let encontradas = 0;
  no_encontradas.textContent = "";
  nodo_section.innerHTML = "";
  palabra_buscada = buscador.value;
  if (palabra_buscada == "" && categoria_seleccionada == "Todas") {
    agregarSeriesYPeliculas();
  } else {
    if (categoria_seleccionada == "Todas") {
      for (let i in SERIES_Y_PELICULAS) {
        if (
          SERIES_Y_PELICULAS[i]["titulo"]
            .toUpperCase()
            .includes(palabra_buscada.toUpperCase())
        ) {
          encontradas++;
          crearArticle(i);
        }
      }
    } else {
      for (let i in SERIES_Y_PELICULAS) {
        if (
          SERIES_Y_PELICULAS[i]["titulo"]
            .toUpperCase()
            .includes(palabra_buscada.toUpperCase())
        ) {
          if (SERIES_Y_PELICULAS[i]["categoría"] == categoria_seleccionada) {
            encontradas++;
            crearArticle(i);
          }
        }
      }
    }
    if (encontradas == 0) {
      no_encontradas.textContent = "Sin resultados";
    }
  }
});
