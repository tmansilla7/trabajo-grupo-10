function agregarPeliculas() {
  for (let i in SERIES_Y_PELICULAS) {
    if (SERIES_Y_PELICULAS[i]["tipo"] == "película") {
      crearArticle(i)
    }
  }
}

agregarPeliculas();
