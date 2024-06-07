const QUERY_PARAMS_NOMBRE = "indice";
const url_vista = document.location.href;
const url = new URL(url_vista);
const indice_de_la_serie = url.searchParams.get(QUERY_PARAMS_NOMBRE);

const SERIES = JSON.parse(localStorage.getItem("series"));

const nodo_title = document.querySelector("title");
nodo_title.textContent = SERIES[indice_de_la_serie]["titulo"];

const nodo_titulo = document.querySelector("#titulo");
nodo_titulo.textContent = SERIES[indice_de_la_serie]["titulo"];

const nodo_temporadas = document.querySelector("#temporadas");
for (let i = 1; i <= SERIES[indice_de_la_serie]["temporadas"]; i++) {
  const nodo_option = document.createElement("option");
  nodo_option.value = i;
  nodo_option.textContent = i;
  nodo_temporadas.appendChild(nodo_option);
}

const nodo_capitulos = document.querySelector("#capitulos");
for (let i = 1; i <= SERIES[indice_de_la_serie]["capitulos"]; i++) {
  const nodo_option = document.createElement("option");
  nodo_option.value = i;
  nodo_option.textContent = i;
  nodo_capitulos.appendChild(nodo_option);
}

const nodo_genero = document.querySelector("#genero");
nodo_genero.textContent = SERIES[indice_de_la_serie]["categoría"];

const nodo_actores = document.querySelector("#actores")
for (let actor of SERIES[indice_de_la_serie]["actores"]) {
    let nodo_actor = document.createElement("a");
    nodo_actor.href = actor["url"];
    nodo_actor.target = "_blank"
    nodo_actor.textContent = actor["nombre"]
    nodo_actores.appendChild(nodo_actor)
    nodo_actores.append(", ")
}

const nodo_sinopsis = document.querySelector(".sinopsis")
nodo_sinopsis.textContent = SERIES[indice_de_la_serie]["sinopsis"];

const nodo_iframe = document.querySelector("iframe")
nodo_iframe.src = SERIES[indice_de_la_serie]["trailer"]["url_iframe"]

const nodo_trailer = document.querySelector("#trailer_youtube")
nodo_trailer.href = SERIES[indice_de_la_serie]["trailer"]["url_youtube"]

const nodo_similares = document.querySelector(".similares")
for (let similar of SERIES[indice_de_la_serie]["similares"]) {
    let nodo_similar = document.createElement("article");
    let nodo_img = document.createElement("img");
    nodo_img.src = similar["src"]
    nodo_img.alt = similar["alt"]
    nodo_similar.appendChild(nodo_img)
    nodo_similares.appendChild(nodo_similar)
}


// const nodo_texto_p = document.createTextNode(SERIES[indice_de_la_serie]['sinopsis'])
// const nodo_p = document.querySelector("p")
// nodo_p.appendChild(nodo_texto_p)
