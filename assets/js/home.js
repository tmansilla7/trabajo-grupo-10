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
  nodo_section.innerHTML = "";
  palabra_buscada = buscador.value;
  if (palabra_buscada == "" && categoria_seleccionada == "Todas") {
    agregarSeriesYPeliculas();
  } else {
    for (let i in SERIES_Y_PELICULAS) {
      if (
        SERIES_Y_PELICULAS[i]["titulo"]
          .toUpperCase()
          .includes(palabra_buscada.toUpperCase())
      ) {
        crearArticle(i);
        CATEGORIAS.value = "1";
      }
    }
  }
});
