const JSON_PELICULAS = localStorage.getItem(LOCAL_STORAGE_SERIES_Y_PELICULAS);
const PELICULAS = JSON.parse(JSON_PELICULAS);

function agregarSeries() {
  let nodo_section = document.querySelector(".sermov");

  for (let i in PELICULAS) {
    if (PELICULAS[i]["tipo"] == "película") {
      let nodo_article = document.createElement("article");
      nodo_article.classList.add("frame");
      let nodo_a = document.createElement("a");
      nodo_a.href = `./serie-pelicula.html?indice=${i}`;
      let nodo_img = document.createElement("img");
      nodo_img.src = PELICULAS[i]["imagen"]["src"];
      nodo_img.alt = PELICULAS[i]["imagen"]["alt"];
      let nodo_h3 = document.createElement("h3");
      nodo_h3.textContent = PELICULAS[i]["titulo"];
      nodo_a.appendChild(nodo_img);
      nodo_a.appendChild(nodo_h3);
      nodo_article.appendChild(nodo_a);
      nodo_section.appendChild(nodo_article);
    }
  }
}

agregarSeries();