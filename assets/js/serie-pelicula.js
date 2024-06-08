const QUERY_PARAMS_NOMBRE = "indice";
const url_vista = document.location.href;
const url = new URL(url_vista);
const indice_de_la_serie_pelicula = url.searchParams.get(QUERY_PARAMS_NOMBRE);
const SERIES_PELICULAS = JSON.parse(localStorage.getItem("series y películas"));

function agregarTitulo(titulo) {
  const nodo_title = document.querySelector("title");
  nodo_title.textContent = titulo;
}

function agregarTemporadasODuracion(array) {
  if (array["tipo"] == "serie") {
    const nodo_div = document.querySelector("#temporadas");
    const nodo_temporadas = document.createElement("h3");
    nodo_temporadas.textContent = "Temporadas: ";
    const nodo_select = document.createElement("select");
    nodo_select.name = "temporadas";
    for (let i = 1; i <= array["temporadas"]; i++) {
      const nodo_option = document.createElement("option");
      nodo_option.value = i;
      nodo_option.textContent = i;
      nodo_select.appendChild(nodo_option);
    }
    nodo_div.appendChild(nodo_temporadas);
    nodo_div.appendChild(nodo_select);

    const nodo_capitulos = document.createElement("h3");
    nodo_capitulos.textContent = "Capítulos: ";
    const nodo_select2 = document.createElement("select");
    nodo_select2.name = "capitulos";
    for (let i = 1; i <= array["capitulos"]; i++) {
      const nodo_option = document.createElement("option");
      nodo_option.value = i;
      nodo_option.textContent = i;
      nodo_select2.appendChild(nodo_option);
    }
    nodo_div.appendChild(nodo_capitulos);
    nodo_div.appendChild(nodo_select2);
  } else {
    const nodo_div = document.querySelector("#duracion");
    const nodo_duracion = document.createElement("h3");
    nodo_duracion.textContent = "Duración: ";
    const nodo_tiempo = document.createElement("p");
    nodo_tiempo.textContent = array["duracion"];
    nodo_div.appendChild(nodo_duracion);
    nodo_div.appendChild(nodo_tiempo);
  }
}

function agregarActores(actores) {
  const nodo_actores = document.querySelector("#actores");
  for (let actor of actores) {
    let nodo_actor = document.createElement("a");
    nodo_actor.href = actor["url"];
    nodo_actor.target = "_blank";
    nodo_actor.textContent = actor["nombre"];
    nodo_actores.appendChild(nodo_actor);

    if (actor.nombre != actores[actores.length - 1].nombre) {
      nodo_actores.append(", ");
    }
  }
}

function agregarTrailer(array) {
  const nodo_iframe = document.querySelector("iframe");
  nodo_iframe.src = array["trailer"]["url_iframe"];

  const nodo_trailer = document.querySelector("#trailer_youtube");
  nodo_trailer.href = array["trailer"]["url_youtube"];
}

function agregarSimilares(array) {
  const nodo_similares = document.querySelector(".similares");
  for (let similar of array["similares"]) {
    let nodo_similar = document.createElement("article");
    let nodo_img = document.createElement("img");
    nodo_img.src = similar["src"];
    nodo_img.alt = similar["alt"];
    nodo_similar.appendChild(nodo_img);
    nodo_similares.appendChild(nodo_similar);
  }
}

function agregarDescripcion(array, titulo, genero, actores, sinopsis) {
  const nodo_titulo = document.querySelector("#titulo");
  nodo_titulo.textContent = titulo;
  agregarTemporadasODuracion(array);
  const nodo_genero = document.querySelector("#genero");
  nodo_genero.textContent = genero;
  agregarActores(actores);
  const nodo_sinopsis = document.querySelector(".sinopsis");
  nodo_sinopsis.textContent = sinopsis;
  agregarTrailer(array);
  agregarSimilares(array);
}

agregarTitulo(SERIES_PELICULAS[indice_de_la_serie_pelicula]["titulo"]);
agregarDescripcion(
  SERIES_PELICULAS[indice_de_la_serie_pelicula],
  SERIES_PELICULAS[indice_de_la_serie_pelicula]["titulo"],
  SERIES_PELICULAS[indice_de_la_serie_pelicula]["categoría"],
  SERIES_PELICULAS[indice_de_la_serie_pelicula]["actores"],
  SERIES_PELICULAS[indice_de_la_serie_pelicula]["sinopsis"]
);
