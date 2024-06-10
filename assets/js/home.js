function agregarSeriesYPeliculas() {
  for (let i in SERIES_Y_PELICULAS) {
    crearArticle(i);
  }
}

agregarSeriesYPeliculas();

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
});
