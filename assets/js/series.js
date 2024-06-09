function agregarSeries() {
  for (let i in SERIES_Y_PELICULAS) {
    if (SERIES_Y_PELICULAS[i]["tipo"] == "serie") {
      crearArticle(i)
    }
  }
}

agregarSeries();
