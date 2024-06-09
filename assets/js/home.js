function agregarSeriesYPeliculas() {
  for (let i in SERIES_Y_PELICULAS) {
    crearArticle(i)
  }
}

agregarSeriesYPeliculas();
